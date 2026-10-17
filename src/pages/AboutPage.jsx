import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <>
    <div className="flex flex-col w-full">
      {/* Monograph Intro / Spatial Editorial Opening */}
      <section className="relative w-full px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
        <div className="relative max-w-7xl mx-auto flex flex-col">
          {/* Decorative Micro Metadata Tag */}
          <div className="flex items-center gap-space-xs mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Archival Monograph / 01 · About
            </span>
            <span className="text-on-surface-variant font-label-sm">
              ·
            </span>
            <span className="font-label-sm text-label-sm text-secondary">
              Shanghai Studio
            </span>
          </div>
          {/* Main Asymmetric Monograph Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-xl">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <p className="font-label-md text-label-md tracking-widest uppercase text-primary-container">
                Design Philosophy &amp; Practice
              </p>
              <h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight tracking-tight">
                 以克制的声音，
                <br />
                 传达未被修饰的温度。 
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-xs pb-1">
              <p className="font-headline-sm text-headline-sm italic text-secondary leading-snug">
                 “In search of organic resonance between form, silence, and human warmth.” 
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                 生活与创作于上海。拒绝工业化流水线的过度光洁，在沉静的呼吸节奏中探寻纸本、器物与数字界面共生的可能。 
              </p>
            </div>
          </div>
          {/* Studio Vignette Collage (Asymmetric 12-col layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">
            {/* Main Primary Studio Plate */}
            <div className="md:col-span-7 flex flex-col gap-space-xs">
              <div className="relative overflow-hidden rounded-lg bg-surface-container shadow-sm group">
                <img className="w-full h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" data-alt="Editorial close-up of a contemplative Shanghai design studio desk filled with handmade book dummies, textured rough ceramic tea bowls, unbleached washi fiber paper samples, dried mountain moss, and a vintage bone folder in natural diffused daylight with soft shadows and tactile warmth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAufEVB5yiUPv4M2m_FswJm4INEvTUHqirwmnmpmYIQAQZCT0lYWIwux2vbe1XEwryMSCYMhcAaYK7yvOq1-ZmIIBN4cvvBDkiNYHndn6C2yEtmnZ32WrYZX5rlTc_HoaScREM4WWRQ0eaXzhfnXtUV4bRwgSbnxDgTUscIXhA_t5X8_HjIjCYqKi4_rTrvhy8KtBtig0LUrvoeSeZ7GA3WgCkX4IygaA5DIPt8qtWPchkgNpG8s7d" alt="Editorial close-up of a contemplative Shanghai design studio desk filled with handmade book dummies, textured rough ceramic tea bowls, unbleached washi fiber paper samples, dried mountain moss, and a vintage bone folder in natural diffused daylight with soft shadows and tactile warmth" />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded-full">
                  <span className="font-label-sm text-label-sm text-on-surface">
                    Figure 01.1 · Studio Desk &amp; Fibers, Xuhui Shanghai
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between px-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Natural light study / 手工样书与陶器
                </span>
                <span className="font-label-sm text-label-sm text-outline">
                  31.2001° N, 121.4333° E
                </span>
              </div>
            </div>
            {/* Secondary Collage Pair */}
            <div className="md:col-span-5 flex flex-col gap-space-md md:-mt-8">
              <div className="relative overflow-hidden rounded-lg bg-surface-container shadow-sm group">
                <img className="w-full h-[280px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" data-alt="Macro tactile photography of raw hand-pressed kozo mulberry bark paper with deckled untrimmed edges, subtle botanical inclusions, and ink test stamps resting under calm afternoon sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC63PURbjpIfYim8HHek7DmP9ik_vqBt1lqUTaGp-QfcDvS0bItfENYtX1g7mOn9xSvm9OKT3_hkMA9cCnXpIckQpU9hw6OHNiXzYF8XUa4Jz82vEuxMEKnDYIwZVQXEz7P-zZrFo41VQJmWKVHciesHQN5TBHwau-WLzh6nfCU2659M1yjx97i_d1kxc8kLdX-0BO68o8n_VQKhYjXZloDwNAKqvX42Guhn3tTsh0tZ8xMzsBAgi8X" alt="Macro tactile photography of raw hand-pressed kozo mulberry bark paper with deckled untrimmed edges, subtle botanical inclusions, and ink test stamps resting under calm afternoon sunlight" />
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-space-sm py-space-xs rounded-full">
                  <span className="font-label-sm text-label-sm text-on-surface">
                    Tactile Texture 02
                  </span>
                </div>
              </div>
              {/* Studio Philosophy Quote Box */}
              <div className="p-space-lg rounded-lg bg-surface-container-low shadow-sm flex flex-col justify-between gap-space-md relative overflow-hidden">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container">
                    Manifesto excerpt
                  </span>
                  <p className="font-display text-headline-sm text-on-surface italic">
                     “用慢下来的触觉体验，抵抗被算法高速催促的浮躁。” 
                  </p>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant pt-space-xs">
                  <span className="font-label-sm text-label-sm">
                    汉堡肉 (HANBAOROU)
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    Est. 2018
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Biography & Core Philosophy Section */}
      <section className="w-full bg-surface-container-low py-space-xl px-margin-mobile md:px-margin">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Tag */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-md">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary-container">
                Biography &amp; Approach
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                独立设计师与艺术指导
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
               在喧嚣的数据浪潮之外，专注于带有手作痕迹的品牌视觉、书籍装帧及充满有机生命力的数字交互系统。 
            </p>
          </div>
          {/* Narrative Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="rounded-lg overflow-hidden bg-surface shadow-sm">
                <img className="w-full h-[420px] object-cover" data-alt="Monochrome portrait photograph of designer Hanbaorou in natural light, sitting beside an unpolished wooden workbench examining a hand-bound editorial monograph with subtle focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZaVziDDnmWrd-nGll1PaFI73eYr2SEUXTPfm-zWwPozlxXPBpS6z5SgPt9Xak6ju2XD531vKZbRy8K5VQqagL0WclsG0qP2m6X0txbMzaaD-jh0OCiN7MTcKv9rZ3I1pFXQR1Rm2G_5Kf2kOcxLPitRlSzotBpiotEnII5gr-Znex_hicPtzMvKW0sTvKn8bYvdQNy9Nkv1W-bCSDfwVeCPO0MogshE3B6Q_uXovcFRMjqBG5SB0z" alt="Monochrome portrait photograph of designer Hanbaorou in natural light, sitting beside an unpolished wooden workbench examining a hand-bound editorial monograph with subtle focused expression" />
              </div>
              <div className="p-space-md rounded-lg bg-surface flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-on-surface">
                  汉堡肉 (HANBAOROU)
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                   独立创作者，现居上海。曾在国际先锋设计事务所历练数年，后创立个人独立工作室。坚持亲力亲为的材料实验，涉足纸张考据、特殊印刷工艺及现代多终端交互体验的平衡表达。 
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  重拾被遗忘的实体温度与呼吸
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                   数字世界的无限复制往往伴随着质感的稀释。我在创作中始终探寻一种“拙”与“润”：偏爱手工纸边缘未修齐的毛边、油墨浸入粗纤维后的微弱晕染，以及自然材料随光阴流转产生的氧化渐变。 
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                   这种东方禅意中的物哀与侘寂哲学，同样被我移植进现代交互屏幕中。通过克制的信息层级、留白的呼吸韵律与富有重力的微动态，构建出如同翻阅手工艺品般沉着优雅的数字化叙事。 
                </p>
              </div>
              {/* Three Core Pillars */}
              <div className="grid grid-cols-1 gap-space-sm pt-space-xs">
                {/* Pillar 01 */}
                <div className="p-space-md rounded-lg bg-surface shadow-sm flex flex-col md:flex-row md:items-baseline justify-between gap-space-xs transition-transform duration-300 hover:translate-y-[-2px]">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-display text-headline-sm text-primary-container">
                      01
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        拙朴自然 · Wabi-Sabi Imprecision
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                         偏爱未被过度打磨的粗粝边缘与手工造纸在指尖留下的微弱阻尼感。接纳非完美的美感。 
                      </p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary self-start md:self-auto shrink-0">
                    Materiality
                  </span>
                </div>
                {/* Pillar 02 */}
                <div className="p-space-md rounded-lg bg-surface shadow-sm flex flex-col md:flex-row md:items-baseline justify-between gap-space-xs transition-transform duration-300 hover:translate-y-[-2px]">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-display text-headline-sm text-primary-container">
                      02
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        静谧叙事 · Quiet Narrative
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                         在充斥着高亮高饱和与极速迭代的信息流中，提供慢节拍与长久陪伴，让观者在沉思中获得安定感。 
                      </p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary self-start md:self-auto shrink-0">
                    Pacing
                  </span>
                </div>
                {/* Pillar 03 */}
                <div className="p-space-md rounded-lg bg-surface shadow-sm flex flex-col md:flex-row md:items-baseline justify-between gap-space-xs transition-transform duration-300 hover:translate-y-[-2px]">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-display text-headline-sm text-primary-container">
                      03
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        跨媒介触感 · Tactile Presence
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                         打通实体器物与屏幕像素的质感壁垒，让数字载体拥有如同触碰厚重棉浆纸般的实体质感与重力。 
                      </p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary self-start md:self-auto shrink-0">
                    Synthesis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Selected Recognition & Exhibitions (精选履历与荣誉列表) */}
      <section className="w-full px-margin-mobile md:px-margin py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-sm">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary-container">
                Archive &amp; Distinctions
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                精选履历与荣誉
              </h2>
            </div>
            <p className="font-label-md text-label-md text-secondary">
               2020 — 2024 Chronological Selection 
            </p>
          </div>
          {/* Archival Index List with Subtle Alternating Flow */}
          <div className="flex flex-col gap-space-xs">
            {/* Row 01 */}
            <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm font-semibold text-primary-container px-space-xs py-0.5 rounded-full bg-secondary-container">
                  2024
                </span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Tokyo TDC Annual Book Selection
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    入选作品：《器之呼吸》(Breathing Vessel) 艺术限定书册装帧与字体试验
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-lg self-start md:self-auto text-on-surface-variant">
                <span className="font-label-sm text-label-sm">
                  Tokyo, Japan
                </span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                  Annual Award
                </span>
              </div>
            </div>
            {/* Row 02 */}
            <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm font-semibold text-primary-container px-space-xs py-0.5 rounded-full bg-secondary-container">
                  2023
                </span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    上海当代艺术博物馆 (PSA) UNFOLD 艺术书展
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    受邀参展单元：独立印行特展《纸与苔的标本室》空间与文献视觉
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-lg self-start md:self-auto text-on-surface-variant">
                <span className="font-label-sm text-label-sm">
                  Shanghai, China
                </span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                  Invited Exhibition
                </span>
              </div>
            </div>
            {/* Row 03 */}
            <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm font-semibold text-primary-container px-space-xs py-0.5 rounded-full bg-secondary-container">
                  2023
                </span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    GDC Award 平面设计在中国 · 入围奖
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    入围项目：《云雾与苔》季刊 (Mists &amp; Moss) 编排与纸本工艺
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-lg self-start md:self-auto text-on-surface-variant">
                <span className="font-label-sm text-label-sm">
                  Shenzhen, China
                </span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                  Nomination
                </span>
              </div>
            </div>
            {/* Row 04 */}
            <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm font-semibold text-primary-container px-space-xs py-0.5 rounded-full bg-secondary-container">
                  2022
                </span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    松美术馆 (Song Art Museum) 驻地视觉设计
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    “静默之物”当代雕塑双年展整体形象与导览系统设计
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-lg self-start md:self-auto text-on-surface-variant">
                <span className="font-label-sm text-label-sm">
                  Beijing, China
                </span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                  Artist-in-Residence
                </span>
              </div>
            </div>
            {/* Row 05 */}
            <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm font-semibold text-primary-container px-space-xs py-0.5 rounded-full bg-secondary-container">
                  2021
                </span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    DFA 亚洲最具影响力设计奖 · Bronze Award
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    传达设计类：手造陶艺家专刊《泥之低语》品牌视觉体系
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-lg self-start md:self-auto text-on-surface-variant">
                <span className="font-label-sm text-label-sm">
                  Hong Kong
                </span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                  Bronze Prize
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Studio & Press Collaborators (合作客户与出版机构) */}
      <section className="w-full bg-surface-container-low py-space-xl px-margin-mobile md:px-margin">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary-container">
              Cultural Clients &amp; Publishers
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              同行者与合作机构
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
               与秉持相近纯粹信念的艺术机构、独立出版社、手工器物工坊与美学生活品牌并肩同行。 
            </p>
          </div>
          {/* Partner Badge Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
            <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                PSA
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                上海当代艺术博物馆
              </span>
            </div>
            <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                SONG
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                松美术馆
              </span>
            </div>
            <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                JIAZAZHI
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                假杂志社
              </span>
            </div>
            <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                YUNWU
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                云雾手作茶器
              </span>
            </div>
            <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                UNFOLD
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                艺术书展委员会
              </span>
            </div>
            <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                MUJI ID
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                无印良品文化项目
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Intimate Bottom CTA Callout */}
      <section className="w-full px-margin-mobile md:px-margin py-space-xl">
        <div className="max-w-5xl mx-auto rounded-lg bg-primary text-on-primary p-space-lg md:p-space-xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          {/* Ambient Decorative Curve Texture via Inline SVG */}
          <svg className="absolute right-0 bottom-0 pointer-events-none opacity-10 w-96 h-96 -mr-12 -mb-12 text-on-primary" fill="none" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="8 8" strokeWidth="2" />
            <path d="M50 200 C150 100, 250 300, 350 200" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="flex flex-col gap-space-xs relative z-10">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed">
              Collaboration &amp; Inquiries
            </span>
            <h3 className="font-headline-lg text-headline-lg font-serif">
              有兴趣开展深入对话或艺术合作？
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container max-w-lg mt-1">
               接受适量的精选书籍装帧、品牌触觉识别、数字化策展及空间视觉委托。期待一同探索材料与思绪的交织。 
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface text-primary font-label-md text-label-md font-semibold shadow-md hover:bg-surface-bright transition-all duration-300 hover:scale-[1.02]">
              <span>
                开启对话
              </span>
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
