#!/usr/bin/env python3
"""Convert the Stitch HTML prototypes into React page components."""

import re
from html.parser import HTMLParser
from pathlib import Path

SRC = Path("/Users/hanbaorou/Downloads/stitch_artistic_nature_portfolio_page")
OUT = Path("/Users/hanbaorou/Coding_Class/personal_web/src")

PATHS = {
    "home": "/",
    "works": "/works",
    "about": "/about",
    "contact": "/contact",
}

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}

PAGES = {
    "hanbaorou_1": ("HomePage", "bindHomeInteractions"),
    "hanbaorou_2": ("WorksPage", "bindWorksInteractions"),
    "hanbaorou_3": ("ContactPage", "bindContactInteractions"),
    "hanbaorou_4": ("AboutPage", None),
}


class Node:
    def __init__(self, tag, attrs):
        self.tag = tag
        self.attrs = attrs
        self.children = []


class Builder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node(None, [])
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                return

    def handle_data(self, data):
        if data:
            self.stack[-1].children.append(data)

    def handle_comment(self, data):
        text = " ".join(data.split())
        if text and not text.lower().startswith("interactive"):
            self.stack[-1].children.append(("comment", text))


def find_first(node, tag):
    if isinstance(node, Node) and node.tag == tag:
        return node
    if isinstance(node, Node):
        for child in node.children:
            found = find_first(child, tag)
            if found:
                return found
    return None


def react_attr_name(name):
    if name.startswith("data-") or name.startswith("aria-"):
        return name
    parts = name.split("-")
    return parts[0] + "".join(part.capitalize() for part in parts[1:])


def escape_text(value):
    value = value.replace("&", "&amp;").replace("<", "&lt;")
    value = value.replace("{", "{'{' }").replace("}", "{'}'}")
    return value


def escape_attr(value):
    return value.replace("&", "&amp;").replace('"', "&quot;").replace("{", "&#123;").replace("}", "&#125;")


def format_text(raw):
    content = raw.strip()
    if not content:
        return None
    prefix = " " if raw[:1].isspace() else ""
    suffix = " " if raw[-1:].isspace() else ""
    return escape_text(prefix + content + suffix)


def style_attr(value):
    match = re.match(r"""background-image:\s*url\(['"]([^'"]+)['"]\)""", value.strip())
    if not match:
        return None
    url = match.group(1).replace('"', '\\"')
    return '{{ backgroundImage: "url(\'' + url + '\')" }}'


class Renderer:
    def __init__(self):
        self.uses_link = False

    def attrs(self, node):
        pairs = []
        attr_map = {name: ("" if value is None else value) for name, value in node.attrs}
        tag = node.tag

        if tag == "a":
            route = PATHS.get(attr_map.get("data-path"))
            if not route and attr_map.get("href") == "#contact":
                route = "/contact"
            if route:
                tag = "Link"
                self.uses_link = True
                attr_map.pop("href", None)
                attr_map.pop("data-path", None)
                pairs.append(f'to="{route}"')
            elif attr_map.get("href") == "#":
                attr_map["href"] = "#top"

        if tag == "img" and "alt" not in attr_map and attr_map.get("data-alt"):
            attr_map["alt"] = attr_map["data-alt"]

        for name, value in attr_map.items():
            if tag == "Link" and name == "data-path":
                continue
            if name == "style":
                styled = style_attr(value)
                if styled:
                    pairs.append(f"style={styled}")
                continue
            if name in {"selected", "disabled", "required", "checked"} and value == "":
                pairs.append(react_attr_name(name))
                continue
            js_name = "className" if name == "class" else "htmlFor" if name == "for" else "viewBox" if name == "viewbox" else react_attr_name(name)
            pairs.append(f'{js_name}="{escape_attr(value)}"')
        return tag, pairs

    def render(self, node, indent):
        if isinstance(node, str):
            text = format_text(node)
            if text is None:
                return ""
            return " " * indent + text + "\n"
        if isinstance(node, tuple) and node[0] == "comment":
            comment = node[1].replace("*/", "* /")
            return " " * indent + "{/* " + comment + " */}\n"

        tag, pairs = self.attrs(node)
        pad = " " * indent
        attr_text = (" " + " ".join(pairs)) if pairs else ""
        children = [self.render(child, indent + 2) for child in node.children]
        children = [child for child in children if child]
        if tag in VOID or not children:
            return f"{pad}<{tag}{attr_text} />\n"
        inner = "".join(children)
        return f"{pad}<{tag}{attr_text}>\n{inner}{pad}</{tag}>\n"


def parse(html):
    html = re.sub(r"<script\b[^>]*>.*?</script>", "", html, flags=re.S)
    builder = Builder()
    builder.feed(html)
    return builder.root


def write_page(folder, component, binder):
    html = (SRC / folder / "code.html").read_text()
    root = parse(html)
    main = find_first(root, "main")
    renderer = Renderer()
    body = "".join(renderer.render(child, 4) for child in main.children)
    imports = []
    if binder:
        imports.append('import { useEffect, useRef } from "react"')
    if renderer.uses_link:
        imports.append('import { Link } from "react-router-dom"')
    if binder:
        imports.append(f'import {{ {binder} }} from "../interactions"')
    header = "\n".join(imports)
    if binder:
        effect = f"""
  const rootRef = useRef(null)
  useEffect(() => {{
    const root = rootRef.current
    if (!root) return undefined
    return {binder}(root)
  }}, [])

  return (
    <div ref={{rootRef}}>
{body}    </div>
  )
"""
    else:
        effect = f"""
  return (
    <>
{body}    </>
  )
"""
    source = f"""{header}

export default function {component}() {{{effect}}}
"""
    (OUT / "pages" / f"{component}.jsx").write_text(source)


def write_footer():
    html = (SRC / "hanbaorou_1" / "code.html").read_text()
    root = parse(html)
    footer = find_first(root, "footer")
    renderer = Renderer()
    body = renderer.render(footer, 4)
    source = f"""import {{ Link }} from "react-router-dom"

export default function Footer() {{
  return (
{body}  )
}}
"""
    (OUT / "components" / "Footer.jsx").write_text(source)


def main():
    (OUT / "pages").mkdir(parents=True, exist_ok=True)
    (OUT / "components").mkdir(parents=True, exist_ok=True)
    for folder, (component, binder) in PAGES.items():
        write_page(folder, component, binder)
        print("wrote", component)
    write_footer()
    print("wrote Footer")


if __name__ == "__main__":
    main()
