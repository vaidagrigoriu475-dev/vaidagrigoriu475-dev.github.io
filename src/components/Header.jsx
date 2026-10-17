import { useState } from "react"
import { NavLink } from "react-router-dom"

const LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtMT5J9GuncPDF9py8Uha5FoLj6xn-cnp1fgZ6j2PpA9lyIeriVD5wUT8ekuprZJqiLZLUdVhc9q-k3QnWAGb3_4bGzwFNgusPuP_So_6eHMR9s7W2qN5lB1283TeOdZ8J57M-yinQBNGMsQTTyz96PgztoiIXTHHgHcwdKsaxf6_kCTPuTAQfK0kk-FlW2tgHb4TxI8eb5Q_G6awjtcTi9q5WbQRf9hGo0Wpt7_Wu9xoHPgEwSs7d"
const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0mRxYkmkB7qBF3r63zDF1bvC2Dqz07h3vID9LYOyPgdCoJ4R4cMlp9LBCh-htJeD7c6e7BTSvXAsu9jFTwUNT1si01xRNVT_M0CueYoQoyb51hHQl3qf2_ajC-YchA2p-tdm6T2brv1wQF96ku2vgPKSG5VIZwlmRnZce_o97BGSxHH2fJki9PT244kaNZlyWGEYLFCn3_IVFrKjNVjA3GRTdGtjQNM2SOEd6-tYKX02xyLhIcW8u"

const LINKS = [
  { to: "/", label: "HOME", end: true },
  { to: "/works", label: "WORKS" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
]

function navClass(isActive) {
  return isActive
    ? "px-space-md py-space-xs rounded-full transition-colors duration-300 bg-surface-container text-on-surface font-medium"
    : "px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors duration-300"
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="w-full px-margin-mobile md:px-margin pt-space-sm">
        <div className="h-20 w-full rounded-full bg-surface/85 backdrop-blur-xl px-space-md md:px-space-lg flex items-center justify-between shadow-[0_4px_24px_-4px_rgba(30,33,30,0.05)]">
          <NavLink to="/" className="flex items-center gap-space-xs group min-w-0" onClick={() => setOpen(false)}>
            <img alt="汉堡肉 HANBAOROU Logo" className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105" src={LOGO} />
            <div className="flex flex-col ml-1 min-w-0">
              <span className="font-label-md text-label-md tracking-wider uppercase text-on-surface font-semibold">HANBAOROU</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">汉堡肉</span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-space-xs p-1 rounded-full bg-surface-container-low/60">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => navClass(isActive)}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-space-sm">
            <NavLink to="/contact" className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md tracking-wide hover:bg-primary transition-all duration-300 shadow-[0_2px_8px_rgba(74,99,71,0.15)]">
              Let's Talk
            </NavLink>
            <div className="relative group">
              <NavLink to="/about" className="block p-0.5 rounded-full ring-1 ring-outline-variant hover:ring-primary transition-all duration-300">
                <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={AVATAR} />
              </NavLink>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:flex flex-col items-center pointer-events-none">
                <div className="bg-inverse-surface text-inverse-on-surface px-space-sm py-space-xs rounded-DEFAULT shadow-lg whitespace-nowrap">
                  <span className="font-label-sm text-label-sm">Available for collaboration</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low text-on-surface"
              aria-expanded={open}
              aria-label={open ? "关闭菜单" : "打开菜单"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="material-symbols-outlined text-xl">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden mt-2 rounded-lg bg-surface/95 backdrop-blur-xl p-space-sm shadow-[0_8px_30px_-4px_rgba(30,33,30,0.06)] flex flex-col gap-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => navClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
