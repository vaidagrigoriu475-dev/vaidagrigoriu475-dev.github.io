import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { bindHomeInteractions } from "../interactions"
import TextPressure from "../components/Text_Pressure_Cursor"

export default function HomePage() {
  const rootRef = useRef(null)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    return bindHomeInteractions(root)
  }, [])

  return (
    <div ref={rootRef}>
    <div className="flex flex-col w-full">
      {/* Organic Ambient Glow Background Layer (Local, gentle drift) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[38rem] h-[38rem] rounded-full bg-secondary-fixed/35 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-[48rem] -left-20 w-[32rem] h-[32rem] rounded-full bg-surface-container-high/60 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-[85rem] right-10 w-[42rem] h-[42rem] rounded-full bg-primary-fixed/20 blur-[140px] pointer-events-none -z-10" />
        {/* 01. EDITORIAL HERO SECTION */}
        <section className="w-full px-margin-mobile md:px-margin pt-space-md md:pt-space-lg pb-space-xl">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-space-lg">
            {/* Status & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/80">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
                <span className="font-label-sm text-label-sm tracking-widest uppercase">
                  AVAILABLE FOR 2025 CREATIVE DIRECTION &amp; BRAND CRAFT
                </span>
              </div>
              <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm tracking-wider">
                <span>
                  PORTFOLIO VOL. IV
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant" />
                <span>
                  SHANGHAI (31.2304° N, 121.4737° E)
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant hidden sm:inline-block" />
                <span className="hidden sm:inline-block">
                  EST. 2021
                </span>
              </div>
            </div>
            {/* Main Headline & Organic Title Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-end pt-space-xs">
              <div className="lg:col-span-8 flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md tracking-widest uppercase">
                  <span>
                    Artifact 00 / Core Philosophy
                  </span>
                  <span className="inline-block w-8 h-px bg-primary-container" />
                </div>
                <div style={{ position: "relative", height: "300px" }}>
                  <TextPressure
                    text="HANBAOROU"
                    flex
                    alpha={false}
                    stroke={false}
                    width
                    weight
                    italic
                    radius={0.5}
                    smoothing={0.5}
                    idle="wave"
                    idleSpeed={1}
                    clickRipple
                    strokeColor="#ff5a1f"
                    strokeWidth={3}
                    minFontSize={36}
                    scale={false}
                    textColor="#191c19"
                  />
                </div>
                <p className="font-headline-lg text-secondary italic font-light">
                  / 汉堡肉
                </p>
                <p className="font-headline-sm text-headline-sm text-secondary font-normal">
                   独立设计师 &amp; 自然转译者 · Independent Art Director 
                </p>
              </div>
              {/* Organic specimen badge pill */}
              <div className="lg:col-span-4 flex lg:justify-end items-center">
                <div className="group relative px-space-md py-space-sm rounded-lg bg-surface-container-low shadow-sm hover:shadow-md transition-all duration-500 flex items-center gap-space-sm max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0 group-hover:rotate-12 transition-transform duration-500">
                    <span className="material-symbols-outlined text-lg">
                      spa
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                      Curvature Specimen
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface line-clamp-1">
                      自然解构徽标 · Wabi-sabi Ratio
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Editorial Poetic Subtitle & Interactive Jump Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
              <div className="lg:col-span-8 flex flex-col gap-space-sm max-w-3xl">
                <p className="font-display text-headline-sm md:text-headline-md text-on-surface leading-relaxed italic">
                   "In search of organic resonance between form, silence, and human warmth." 
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                   寻找形式、静谧与触感温度之间的有机共鸣。以质朴的自然哲学介入视觉品牌、书籍装帧与数字交互，剔除工业制造的冰冷浮躁，呈现不经修饰的材料本真。 
                </p>
              </div>
              {/* Direct Floating Action Card (Contact Quick Portal) */}
              <div className="lg:col-span-4">
                <Link to="/contact" className="group block p-space-md rounded-lg bg-surface-container shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-space-sm mb-space-xs">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300" data-alt="Portrait photography of HANBAOROU, a thoughtful Chinese designer in natural light wearing a dark linen shirt, studio background with soft earthenware vessels and dry botanical shadows, muted earthy colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhOJFBmOlFZUUsYFC5ZKbzffGweSGqP_0eTUsJkqNZFbCnAHqQu1NF1-pSTv6bHorZnFukdhD41Hr9CJHRiC6hohBGoyBt3zTMenCPXgaevK1IJ805QQXQsBs_GcTRcyHPGepl-QpyjQEorXVk1XRyFgeLxjb_Urm-vg8IDdf7PWdAibGThSK24Vb03ENYMxyE18HOl0UC2HQRwz2F7TOoARViT0GQNU_8AuAg234XkvhB_N_8USqA" alt="Portrait photography of HANBAOROU, a thoughtful Chinese designer in natural light wearing a dark linen shirt, studio background with soft earthenware vessels and dry botanical shadows, muted earthy colors" />
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                          汉堡肉工作室
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                      </div>
                      <span className="font-label-sm text-label-sm text-primary tracking-wide">
                        SHANGHAI ATELIER
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                     即刻开启合作洽谈，探讨品牌视觉重构与展览画册。 
                  </p>
                  <div className="flex items-center justify-between pt-space-xs border-t border-surface-container-high/60 text-primary font-label-md text-label-md">
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300 font-medium">
                      与汉堡肉交谈 → 微信与直邮
                    </span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* 02. FEATURED HERO ARTIFACT SHOWCASE */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container-low/50">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-space-lg">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-sm">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                  Exhibition Feature · 2024–2025
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                  年度核心作品展示 / Artifact of Focus
                </h2>
              </div>
              <div className="text-on-surface-variant font-label-md text-label-md">
                <span>
                  [ DISCIPLINE : BRAND IDENTITY &amp; TACTILE PACKAGING ]
                </span>
              </div>
            </div>
            {/* Master Asymmetric Bento Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* Visual Hero Card: Vessels of Solitude (8 Cols) */}
              <div className="lg:col-span-8 group relative rounded-lg bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 flex flex-col">
                <div className="relative w-full h-[28rem] md:h-[34rem] overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" data-alt="Tactile artistic photography of handmade unglazed ceramic vessels and textured raw handmade paper packaging boxes on natural sand stone, soft morning sunlight casting long meditative organic shadows, muted olive and beige palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACnexcavilQxz-v54hFveZ5wGA37LqsLsbObBPTkLfagxLw21M7dBuu_rb0qhO7c0QRvQQerN5eRx1oozWc_7z-N0qMzk6NgZARfY8dp13eZVBNTMsk723kzF9EoJ4tHdLWKBPMYSIz6kNvIBZiV3brZWfw9EUFei281VM1hylVmMH4LyjT9IPQtcE1UARMeoe75DZ6yIi1MknrmVQ95QcwA4YQGiZr-jUpd7aVgoF-7kEuLIkAJ8W" alt="Tactile artistic photography of handmade unglazed ceramic vessels and textured raw handmade paper packaging boxes on natural sand stone, soft morning sunlight casting long meditative organic shadows, muted olive and beige palette" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent" />
                  {/* Floating Metadata Pills on Image */}
                  <div className="absolute top-space-md left-space-md flex flex-wrap gap-2">
                    <span className="px-space-sm py-1 rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm shadow-sm">
                       CERAMIC ESSENCE 
                    </span>
                    <span className="px-space-sm py-1 rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm shadow-sm">
                       AWARD OF EXCELLENCE 
                    </span>
                  </div>
                  {/* Content Inside Bottom of Hero Tile */}
                  <div className="absolute bottom-0 inset-x-0 p-space-md md:p-space-lg text-inverse-on-surface flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim">
                      BRAND IDENTITY &amp; BESPOKE BOXES
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-inverse-on-surface font-normal">
                       《器之呼吸》/ Vessels of Solitude 
                    </h3>
                    <p className="font-body-md text-body-md text-inverse-on-surface/90 max-w-xl line-clamp-2">
                       景德镇手作陶艺品牌的全案视觉转译，通过未施釉陶土纹理与生木棉纸张的触感融合，建立人与器具之间的静默契约。 
                    </p>
                  </div>
                </div>
                <div className="p-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container">
                  <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
                    <span>
                      YEAR : 2024
                    </span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                    <span>
                      CLIENT : 寂物窑陶研究所
                    </span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                    <span>
                      PAPER : 320g 特种和纸
                    </span>
                  </div>
                  <Link to="/works" className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-on-primary-fixed-variant transition-colors">
                     阅读设计纪实 
                    <span className="material-symbols-outlined text-base">
                      east
                    </span>
                  </Link>
                </div>
              </div>
              {/* Side Manifesto & Natural Specimen Cards (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                {/* Manifesto Card */}
                <div className="p-space-lg rounded-lg bg-surface-container flex flex-col justify-between shadow-sm relative overflow-hidden flex-1">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
                      <span>
                        MANIFESTO 2025
                      </span>
                      <span>
                        (01 / CRAFT)
                      </span>
                    </div>
                    <div className="font-headline-md text-headline-md text-on-surface leading-tight">
                       在不完美中寻找圆融，于物象剥离后体会质感。 
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                       汉堡肉的主张：设计不仅是视觉布局，而是对光线、纸张纹理、植物墨水挥发与手指触碰阻尼感的综合调度。 
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between border-t border-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                    <span>
                      WABI-SABI SENSIBILITY
                    </span>
                    <span className="text-primary font-semibold">
                      物哀与余白
                    </span>
                  </div>
                </div>
                {/* Materiality Tactile Teaser */}
                <div className="p-space-md rounded-lg bg-surface-container shadow-sm flex items-center gap-space-md">
                  <img className="w-20 h-20 rounded-DEFAULT object-cover flex-shrink-0" data-alt="Macro close-up photograph of rough natural textured fibrous paper with embedded moss specks and earthy organic pigments, minimal lighting, extreme micro detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx4FmXC1da198YAGxAqV2tVeRS39iI3N02NZrDlzpFzLVNBefueh5cXu4BVBiYQx_9S0ru7CffHdj7F4vQtOP_hRhgjayZOTRUP_BUV37MPSE7_oMBLrO5VoAXDUciYD5_l1rJKZ3pfsDCQRr2McTmW2MsJQZmt70m9BkDATr5H3IvZniw7GpXwqittKx_FWq5rKl3tiKxIkOWegAN8BumAw2AExGY-NwrT_vmVBVOUJO1zqFise1S" alt="Macro close-up photograph of rough natural textured fibrous paper with embedded moss specks and earthy organic pigments, minimal lighting, extreme micro detail" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Natural Materiality
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      素材的呼吸
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      手工造纸、天然矿物染与沉稳排版
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 03. CURATED SELECTED WORKS OVERVIEW (3 Selected Key Projects) */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-surface-container-high pb-space-sm">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                  Curated Catalog
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                  精选设计案例 / Selected Case Studies
                </h2>
              </div>
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <span>
                  SHOWING 03 OF 28 COMMISSIONS
                </span>
              </div>
            </div>
            {/* 3-Column Art Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {/* Project 01: 云雾与苔 */}
              <article className="group rounded-lg bg-surface-container-low overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col">
                <div className="relative w-full h-72 overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial book design spread of an art journal titled Clouds and Moss, elegant Newsreader typography, open minimalist book on pale weathered cedar wood with pine needle accents, soft diffused gallery lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr70exp3u_zFmJ0IqUOAyWWTDQvPJBMYaeyXLJa5vR7smQ6-hF-Pu-mFYLMITmAfhKOkzZ-esW_n7R0YhdpAkIGQfLMvGgZqjsHMQwdNt0Bg1wdbypPaBMrEoqnRuV8Mto1tty0SSTeI8QqkvJntGWls8Fl5ZEFUEoc9m1bABsMvkpKhPByvDh8Kdi9ymJ7JzThHgfISOwBFcLZE8BH2WQ3gmCiI_e4Bvd5TYeqKE0cAHd7gm9KVBT" alt="Editorial book design spread of an art journal titled Clouds and Moss, elegant Newsreader typography, open minimalist book on pale weathered cedar wood with pine needle accents, soft diffused gallery lighting" />
                  <div className="absolute top-3 left-3">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface/90 text-on-surface font-label-sm text-label-sm shadow-sm">
                       EDITORIAL &amp; BOOK 
                    </span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>
                        2024 · VOL. 02
                      </span>
                      <span>
                        MOSS JOURNAL
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                       《云雾与苔》/ Cloud &amp; Moss 
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                       独立艺术季刊整体视觉设计，纸张层叠与轻微墨透的有机诗意呈现，探讨南方湿地与苔藓生长轨迹。 
                    </p>
                  </div>
                  <div className="pt-space-xs border-t border-surface-container-high/60 flex items-center justify-between text-secondary font-label-md text-label-md">
                    <span>
                      View Project Specimen
                    </span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
              {/* Project 02: 汉堡肉实验室 */}
              <article className="group rounded-lg bg-surface-container-low overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col">
                <div className="relative w-full h-72 overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Avant-garde packaging and visual design for HANBAOROU LAB, organic meat and plant-based culinary identity, unbleached kraft paper wrapping, olive seal sticker, earthy minimalist design studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnS1692PJiwDL05oRHewt-5ijb6gS8aLaFZqudjhSnyqF9x5rLCKNomBxVmJ0NjzpSWA-cSpoa6kReZnHKbigWnkvwjwYQGBhqZgyAVh0L8pR1Z9GIcImk9R4TFXdQ3FVDhZp6nl3RSOOrleHiXV2zRqBrjCOQ5pI06NBQxpLaaAH8BTCaTPv7R6Ouu1Q1stVNzIpsvuKtExl0kfJX9WLw_Znn5AnsFFWNmmxtEPpW00vV4U3voHTB" alt="Avant-garde packaging and visual design for HANBAOROU LAB, organic meat and plant-based culinary identity, unbleached kraft paper wrapping, olive seal sticker, earthy minimalist design studio setting" />
                  <div className="absolute top-3 left-3">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface/90 text-on-surface font-label-sm text-label-sm shadow-sm">
                       BRAND LAB &amp; EXPERIMENTAL 
                    </span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>
                        2023 · IN-HOUSE
                      </span>
                      <span>
                        CULINARY IDENTITY
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                       《汉堡肉实验室》/ Lab Specimen 
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                       主理人实验餐饮概念包装与视觉系统，结合天然亚麻缝线与可降解纤维盒，颠覆传统快餐审美的反思之作。 
                    </p>
                  </div>
                  <div className="pt-space-xs border-t border-surface-container-high/60 flex items-center justify-between text-secondary font-label-md text-label-md">
                    <span>
                      View Project Specimen
                    </span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
              {/* Project 03: 素生木构 */}
              <article className="group rounded-lg bg-surface-container-low overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col">
                <div className="relative w-full h-72 overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Architectural monograph and environmental signage for Raw Timber Pavilion, clean Japanese joinery details, warm golden hour sun filtering through timber slats, serene minimalist space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5u1Qdma-xJMy6wh_rCKxL_YcN9xEtc3QtqX2xFDOI9AuKLsi_lCH4d5NLMYho0Kap-hnESyPCL8LkJSW7F-RGsipoMRou5Ex7bhIS_D4HgkKmNUXO8Cs3W3uCsE8cUDmUtpCfOc6sPx4QgU48m2--UC_S8x_87KO3No78DWzYJNDX2-vQyrUE_tCrUxfsN4Ydu6wCelSi6V3nhjl41dKhu5Lr5wj_oaJcEyrk9JEK7bxko8XLHx8" alt="Architectural monograph and environmental signage for Raw Timber Pavilion, clean Japanese joinery details, warm golden hour sun filtering through timber slats, serene minimalist space" />
                  <div className="absolute top-3 left-3">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface/90 text-on-surface font-label-sm text-label-sm shadow-sm">
                       SPATIAL IDENTITY &amp; WAYFINDING 
                    </span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>
                        2024 · KYOTO / SHANGHAI
                      </span>
                      <span>
                        TIMBER PAVILION
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                       《素生木构》/ Raw Timber Pavilion 
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                       自然木构建筑展陈空间导视与文献设计，采用原木烙印与微缩盲文压凸技术，呼应榫卯工艺的精妙。 
                    </p>
                  </div>
                  <div className="pt-space-xs border-t border-surface-container-high/60 flex items-center justify-between text-secondary font-label-md text-label-md">
                    <span>
                      View Project Specimen
                    </span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            </div>
            {/* Call to Action Button to Full Archive */}
            <div className="flex justify-center pt-space-md">
              <Link to="/works" className="group inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary font-label-md text-label-md tracking-wider hover:bg-primary shadow-sm hover:shadow-md transition-all duration-300">
                <span>
                  查看完整 28 件作品展厅 (View Full Works Gallery)
                </span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* 04. BRIEF PHILOSOPHY TEASER (Leading to About Page) */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Left: Studio Atmosphere Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[30rem] rounded-lg overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" data-alt="Monochromatic and quiet atelier view of a design studio desk with paper swatches, ink stone, dried lotus pod, stone paperweight, and soft morning light, wabi-sabi serene aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYKiCtBDPxz70INwpovTPx9gAgRAvv2CYGbTyLc-zBtAGlJSzl2NV9BDWRN6UzpL9RE4SZP3Grji6nAt184cecrZ57gMoor-YM5A1FvOraZyLdDk_thBKF-8oySlASTu50Q1AcRirX3oXDYyLb59mOkeY7i4so81LZ_7OpRu4wS_ZjDcfwDbNPuyQMYUkbBHuS7dSbOxaxL-2fGKLqZMvsuyO2aM9pGiTzsIQ7Y3Tp8QrZ8fMziRlu" alt="Monochromatic and quiet atelier view of a design studio desk with paper swatches, ink stone, dried lotus pod, stone paperweight, and soft morning light, wabi-sabi serene aesthetic" />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-DEFAULT bg-surface/90 backdrop-blur-md">
                  <p className="font-body-sm text-body-sm text-on-surface italic">
                     "每一种纸张纤维都有其重力与倾听世界的方式。" 
                  </p>
                  <span className="font-label-sm text-label-sm text-secondary uppercase block mt-1">
                    HANBAOROU STUDIO NOTE / 2024
                  </span>
                </div>
              </div>
              {/* Decorative Stone Pebble SVG element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary-fixed opacity-70 blur-xl pointer-events-none" />
            </div>
            {/* Right: Thought Narrative & About Link */}
            <div className="lg:col-span-7 flex flex-col gap-space-md lg:pl-space-md">
              <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span>
                  关于汉堡肉 / Design Philosophy
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal leading-tight">
                 不盲从喧嚣潮流，
                <br className="hidden sm:inline" />
                 以宁静的减法赋予器物长久的生命。 
              </h2>
              <div className="flex flex-col gap-space-xs font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p>
                   我是汉堡肉（Hanbaorou），现居上海的独立艺术指导与自然探索者。在经历了数年快节奏的品牌咨询后，我选择重返物质材料的原点，建立注重手作质感、余白喘息与东方诗性的设计语汇。 
                </p>
                <p className="text-body-md font-body-md text-on-surface-variant/90">
                   我的工作横跨品牌视觉体系、艺术出版物、器物包装与展览空间。每一次合作都像是一场缓慢的植物发酵——不求速成，唯求真实与耐看。 
                </p>
              </div>
              {/* Disciplines Micro List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                <div className="p-space-xs rounded-DEFAULT bg-surface-container-low flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary uppercase">
                    Discipline 01
                  </span>
                  <span className="font-headline-sm text-body-md text-on-surface font-medium">
                    视觉形象系统
                  </span>
                </div>
                <div className="p-space-xs rounded-DEFAULT bg-surface-container-low flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary uppercase">
                    Discipline 02
                  </span>
                  <span className="font-headline-sm text-body-md text-on-surface font-medium">
                    书籍装帧设计
                  </span>
                </div>
                <div className="p-space-xs rounded-DEFAULT bg-surface-container-low flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary uppercase">
                    Discipline 03
                  </span>
                  <span className="font-headline-sm text-body-md text-on-surface font-medium">
                    触觉包装研发
                  </span>
                </div>
              </div>
              <div className="pt-space-xs">
                <Link to="/about" className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold hover:text-on-primary-fixed-variant transition-colors group">
                  <span>
                    阅读主理人历程与完整创作信条 (Explore Full About Story)
                  </span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* 05. QUICK CONTACT TEASER & ONE-CLICK EMAIL */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl">
          <div className="w-full max-w-7xl mx-auto rounded-lg bg-surface-container-low p-space-md md:p-space-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-xs">
                <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary-container" />
                  <span>
                    INITIATE DIALOGUE · 开启合作探讨
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                   有关于新项目或展览的想法？ 
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                   我们非常乐意倾听您的愿景。无论是全新品牌的初生塑造，抑或既有典藏的书籍装订，汉堡肉都期待与注重质感的伙伴同行。 
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-sm sm:items-end">
                {/* Copy Email Component with Notification Feedback */}
                <div className="w-full sm:w-auto flex flex-col items-start sm:items-end gap-1">
                  <button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-all duration-300 shadow-sm active:scale-95 group" id="copy-email-button" type="button">
                    <span className="material-symbols-outlined text-secondary text-base group-hover:rotate-12 transition-transform">
                      content_copy
                    </span>
                    <span className="font-label-md text-label-md select-all" id="email-label">
                      studio@hanbaorou.design
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      点击复制
                    </span>
                  </button>
                  <span className="font-label-sm text-label-sm text-primary opacity-0 transition-opacity duration-300" id="copy-feedback">
                    已成功复制邮箱至剪贴板
                  </span>
                </div>
                {/* Jump to Full Contact Page Button */}
                <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md tracking-wider hover:bg-primary shadow-sm hover:shadow-md transition-all duration-300">
                  <span>
                    前往完整联系页面 / 预约面谈
                  </span>
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Micro-interaction script for copy email clipboard feedback */}
    </div>
    </div>
  )
}
