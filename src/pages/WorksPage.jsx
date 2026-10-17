import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { bindWorksInteractions } from "../interactions"

export default function WorksPage() {
  const rootRef = useRef(null)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    return bindWorksInteractions(root)
  }, [])

  return (
    <div ref={rootRef}>
    <div className="flex flex-col w-full">
      {/* Top Breathing Space & Ambient Light Scrim */}
      <div className="relative w-full px-margin-mobile md:px-margin pt-10 md:pt-16 pb-12 overflow-hidden">
        {/* Subtle Ambient Grain & Diffused Light Spheres (Contained) */}
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-surface-container/60 blur-3xl pointer-events-none" />
        {/* Editorial Header Block */}
        <div className="relative z-10 max-w-5xl flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-sm text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            <span className="font-label-sm text-label-sm tracking-widest uppercase">
              EXHIBITION ARCHIVE / 01 — 28
            </span>
            <span className="hidden sm:inline-block w-8 h-[1px] bg-outline-variant" />
            <span className="hidden sm:inline-block font-label-sm text-label-sm text-outline">
              SHANGHAI • TOKYO • ONLINE
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
             精选作品展厅 
            <span className="font-display italic text-secondary font-normal block sm:inline sm:ml-3">
              Selected Works &amp; Archive
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-2 leading-relaxed">
             跨越品牌系统、手工书籍装帧、空间装置与数字感官界面的系列探索。每一份作品皆是对自然质感、微风留白与克制物性的实体投射。 
          </p>
        </div>
        <div className="relative z-10 mt-12 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" id="filter-container">
            <button className="filter-pill group inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-secondary-container text-on-secondary-container shadow-sm" data-filter="all" type="button">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span>
                全部 (All)
              </span>
              <span className="font-label-sm text-label-sm opacity-70 ml-1">
                28
              </span>
            </button>
            <button className="filter-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-filter="brand" type="button">
              <span>
                品牌系统 (Brand)
              </span>
              <span className="font-label-sm text-label-sm opacity-60 ml-0.5">
                08
              </span>
            </button>
            <button className="filter-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-filter="editorial" type="button">
              <span>
                书籍装帧 (Editorial)
              </span>
              <span className="font-label-sm text-label-sm opacity-60 ml-0.5">
                06
              </span>
            </button>
            <button className="filter-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-filter="spatial" type="button">
              <span>
                空间装置 (Spatial)
              </span>
              <span className="font-label-sm text-label-sm opacity-60 ml-0.5">
                05
              </span>
            </button>
            <button className="filter-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-filter="digital" type="button">
              <span>
                数字感官 (Digital UI)
              </span>
              <span className="font-label-sm text-label-sm opacity-60 ml-0.5">
                04
              </span>
            </button>
            <button className="filter-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-filter="lab" type="button">
              <span>
                个人实验 (Specimen)
              </span>
              <span className="font-label-sm text-label-sm opacity-60 ml-0.5">
                05
              </span>
            </button>
          </div>
          {/* Layout View Mode Switcher */}
          <div className="flex items-center self-start md:self-auto p-1 rounded-full bg-surface-container-low shadow-sm">
            <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-surface text-on-surface shadow-sm transition-all duration-300" id="view-grid-btn" title="画册大图网格" type="button">
              <span className="material-symbols-outlined text-base">
                grid_view
              </span>
              <span>
                画册大图
              </span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all duration-300" id="view-list-btn" title="列表归档视图" type="button">
              <span className="material-symbols-outlined text-base">
                format_list_bulleted
              </span>
              <span>
                归档清单
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Main Showcase Container: Editorial Grid View */}
      <div className="w-full px-margin-mobile md:px-margin pb-space-xl" id="works-grid-view">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10 items-start">
          {/* Project 01: Vessels of Solitude (Span 7 - Asymmetric Anchor) */}
          <article className="work-item md:col-span-7 flex flex-col group cursor-pointer" data-category="brand">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" data-alt="Editorial photograph of minimalist unglazed rough stoneware ceramic vessels placed on soft fibrous mulberry washi paper. Soft diffused morning window light, delicate cast shadows, tranquil earthy tones, raw beige and warm muted moss greens, art gallery monograph aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtJungBAT0KI85Z2J3bZkdCZ7cCZCADWW670X3ksPaNiNExsl1yopYpY7BRFdhQGfStg3eS0e3dfgo7aLvz6IJVXqIfuh_MkzvyESoM275H4ZcH6JIpaGkLRJOQ1-LABKaau4mihVoa8l9QRBKLSvYqLPzgZkIniFijonf6TpCUHrYLgixcU6b62x84szXsKP74uaPwUKMMyfuUb7OlpYbWM3zGdpZMw06l9lHrIF3JE7Z28pBCwkl" alt="Editorial photograph of minimalist unglazed rough stoneware ceramic vessels placed on soft fibrous mulberry washi paper. Soft diffused morning window light, delicate cast shadows, tranquil earthy tones, raw beige and warm muted moss greens, art gallery monograph aesthetics." />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-on-surface shadow-sm">
                     Tokyo TDC Annual 2024 
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  01 / BRAND IDENTITY • PACKAGING
                </span>
                <span className="font-label-sm text-label-sm">
                  2024
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                 《器之呼吸》
                <span className="font-display italic text-secondary font-normal">
                  Vessels of Solitude
                </span>
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 max-w-xl">
                 景德镇传统柴烧陶艺品牌全案，从矿泥选土、窑变色谱归纳到由手工桑皮纸与木盒构成的多感官礼盒包装系统。 
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  特种纸触感
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  凹凸烫透
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  陶土色标
                </span>
              </div>
            </div>
          </article>
          {/* Project 02: Hamburger Specimen (Span 5 - Offset Rhythm) */}
          <article className="work-item md:col-span-5 flex flex-col group cursor-pointer md:mt-16" data-category="lab">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" data-alt="Avant-garde organic sculpture inspired by a hamburger dissected into textured compressed soil slabs, porous sea sponges, raw cedar wood blocks, and dried botanical lichens. Museum pedestal display, calm ambient gallery lighting, tactile wabi-sabi minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1OEIu_4sWNxzxDJnofO6_OkLV9lFdY9Ltjel9lYS3OSi4_BHKHQq6Jk7zhvMpd4wPb0--tfnjFO7xPOsnuL_i6Q2B2ZDBay19SoCy_0gIK4sjt679ZE03xvdjClOI2aH3fW5f-nmqeFY_5u3zREXYYgCIItHH_nKKjLCB0TW4nBdW_vt94fup1M4KuxIHrjsMiECzVbbQOLuB6OXPMz3rYISzq7EB2blVEo_ix-qixDc_fkfWPJwy" alt="Avant-garde organic sculpture inspired by a hamburger dissected into textured compressed soil slabs, porous sea sponges, raw cedar wood blocks, and dried botanical lichens. Museum pedestal display, calm ambient gallery lighting, tactile wabi-sabi minimalist aesthetic." />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-primary font-medium shadow-sm">
                     Solo Specimen 
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  02 / EXPERIMENTAL SCULPTURE
                </span>
                <span className="font-label-sm text-label-sm">
                  2024
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                 《汉堡肉实验室》
                <span className="font-display italic text-secondary font-normal">
                  Hamburger Specimen
                </span>
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                 拆解快餐文化中标准化的几何形态，重构为泥土、木块与海绵状呼吸标本，对工业消费品与自然生命力的物质反思。 
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  有机材质
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  解构标本
                </span>
              </div>
            </div>
          </article>
          {/* Project 03: Mist & Moss (Span 5 - Editorial Book) */}
          <article className="work-item md:col-span-5 flex flex-col group cursor-pointer" data-category="editorial">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" data-alt="Exquisite open-spine Smyth-sewn publication with exposed cotton green binding threads, unbleached heavy deckle-edge paper, botanical ink plant prints, shot flat on a pale raw stone slab with subtle herbal sprigs nearby. Editorial publication design photograph." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_zlxLppqN7dxoPrWwpXJP8JQ-hbqGxCKX33ZCPeTfNoFOT8kc23rWrm5xenAxIrBXyKox0p6ei7hsQPNOIq25JYlTmLBehTknRy-KQaRIoJqwguHhcQf0q--iyJsBa3t9PLaUb1r9wsXC1-sFF0PF38RCZJLvt-6RAeuYzmJXIB4SkHV1H-Sd501DA_gpsZOKOndkU0rc8ApqAviK40iUJ_BMM104CaOrRmADBnDJwqWs54Hj5df" alt="Exquisite open-spine Smyth-sewn publication with exposed cotton green binding threads, unbleached heavy deckle-edge paper, botanical ink plant prints, shot flat on a pale raw stone slab with subtle herbal sprigs nearby. Editorial publication design photograph." />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  03 / EDITORIAL DESIGN
                </span>
                <span className="font-label-sm text-label-sm">
                  2023
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                 《云雾与苔》
                <span className="font-display italic text-secondary font-normal">
                  Mist &amp; Moss
                </span>
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                 自然观察季刊裸背手工锁线装帧。采用未漂白棉浆纸与野生苔藓提取植物墨水印制，保留纸页撕边毛口与呼吸感。 
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  裸脊锁线
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  毛边手工纸
                </span>
              </div>
            </div>
          </article>
          {/* Project 04: Raw Timber Pavilion (Span 7 - Spatial Installation) */}
          <article className="work-item md:col-span-7 flex flex-col group cursor-pointer md:-mt-8" data-category="spatial">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" data-alt="Architectural micro installation inside a quiet gallery space featuring interlocking raw cedar timber mortise-and-tenon joints, dappled sunlight casting soft geometric shadows on smooth lime plaster walls, subtle signage carved into solid wood blocks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVhPqWgL2aoqKH65MLgkSnRtTqjl883iDa4Eep-JpstYiJ7B9nkE96e4pya4_lW9zq7BknjjrTOpF10jkBpQg5Tkew1mBZAavgNyledGHytN9xM_p9onNtWtCicUKjtAmIfnV8uNE6ZS0_vCa9a7YLimbcYc3Vwbe303IqBRoXJsagH81DHu4eohHdTOXxQSWH1uTWvDsnd1MmJdP5qLOVfuLcRYXSpRlHMiCcAnTQX5HRc_PZ0BH5" alt="Architectural micro installation inside a quiet gallery space featuring interlocking raw cedar timber mortise-and-tenon joints, dappled sunlight casting soft geometric shadows on smooth lime plaster walls, subtle signage carved into solid wood blocks." />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-on-surface shadow-sm">
                     Site Exhibition • West Bund 
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  04 / SPATIAL &amp; WAYFINDING
                </span>
                <span className="font-label-sm text-label-sm">
                  2023
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                 《素生木构》
                <span className="font-display italic text-secondary font-normal">
                  Raw Timber Pavilion
                </span>
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 max-w-xl">
                 西岸艺术区临时茶室导示系统与结构试验，以完全无需钉合的传统榫卯结构与光影时序对话，重塑空间叙事。 
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  榫卯节点
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  微缩导视
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  空间装置
                </span>
              </div>
            </div>
          </article>
          {/* Project 05: Still Life Sound (Span 6 - Digital Sensorial UI) */}
          <article className="work-item md:col-span-6 flex flex-col group cursor-pointer" data-category="digital">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-container p-6 flex items-center justify-center">
                {/* Simulated High-End Tactile UI Canvas */}
                <div className="w-full h-full rounded-DEFAULT bg-surface shadow-md p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary">
                      00:48 / NATURAL FIELD RECORDING
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
                  </div>
                  {/* Subtle Audio Waveform Visual (Inline SVG) */}
                  <div className="my-auto py-4 flex flex-col gap-3">
                    <div className="flex items-end gap-1.5 h-16 w-full justify-center">
                      <span className="w-1 bg-outline-variant/60 rounded-full h-6 transition-all duration-500" />
                      <span className="w-1 bg-primary/40 rounded-full h-10 transition-all duration-500" />
                      <span className="w-1 bg-primary-container rounded-full h-14 transition-all duration-500" />
                      <span className="w-1 bg-primary rounded-full h-8 transition-all duration-500" />
                      <span className="w-1 bg-primary-container rounded-full h-16 transition-all duration-500" />
                      <span className="w-1 bg-outline-variant rounded-full h-12 transition-all duration-500" />
                      <span className="w-1 bg-secondary rounded-full h-7 transition-all duration-500" />
                      <span className="w-1 bg-primary/60 rounded-full h-11 transition-all duration-500" />
                      <span className="w-1 bg-primary-container rounded-full h-15 transition-all duration-500" />
                      <span className="w-1 bg-outline-variant/80 rounded-full h-5 transition-all duration-500" />
                    </div>
                    <p className="text-center font-display italic text-secondary text-base">
                      "Wind rustling through mountain bamboo grove — Anji, Zhejiang"
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-2">
                    <span>
                      48kHz • 24bit Hi-Res
                    </span>
                    <span className="font-semibold text-primary">
                      PLAYING TRACK IV
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  05 / SENSORY UI &amp; SOUND DESIGN
                </span>
                <span className="font-label-sm text-label-sm">
                  2024
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                 《静止的时光》
                <span className="font-display italic text-secondary font-normal">
                  Still Life Sound
                </span>
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                 采集雨落灰瓦、竹梢低啸与旧木回响的拟物声效装置。以克制的减法界面，探索数字屏幕中的静默与心流陪伴。 
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  感官交互
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  声景采集
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  微动效研究
                </span>
              </div>
            </div>
          </article>
          {/* Project 06: Grain Rain Ink (Span 6 - Botanical Ink Study) */}
          <article className="work-item md:col-span-6 flex flex-col group cursor-pointer" data-category="brand">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" data-alt="Artisan glass dropper bottles filled with natural handcrafted dark indigo and walnut plant ink standing on rough linen cloth, with ink test swatches dried on textured raw cotton paper. Minimal studio lighting, Japanese craft aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfY8180kSGwWdPqnfW0c5UmeQNUwohcFz5hPpu2snk3UbgkaY99PS5d08CWtXWoHc6XkHbs077FrQmKOl4EOGjza7x3Ax6yBLlSgn4fS9COA9EI01n8jsez_8Gamb_arygzTl_tik28tm0P1su25kH2ntJAao-mQt0kOa7aWsoximmiYYISWz1hqbDIzXkN7Yxf-Yf1nmCMW7GaOo8oV1IJixw9kkhkRxT2ZZu5sQKK3T7Z3_srXtY" alt="Artisan glass dropper bottles filled with natural handcrafted dark indigo and walnut plant ink standing on rough linen cloth, with ink test swatches dried on textured raw cotton paper. Minimal studio lighting, Japanese craft aesthetic." />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  06 / BOTANICAL INK RESEARCH
                </span>
                <span className="font-label-sm text-label-sm">
                  2023
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                 《谷雨研墨》
                <span className="font-display italic text-secondary font-normal">
                  Grain Rain Ink
                </span>
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                 源自核桃青皮、五倍子与古树红茶的纯天然手工植物墨系列。建立包含 16 种随季节光照自然氧化的视觉系统。 
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  天然矿植墨
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  色谱实验
                </span>
              </div>
            </div>
          </article>
          {/* Project 07: Paper & Breath (Span 12 - Wide Panoromic Study) */}
          <article className="work-item md:col-span-12 flex flex-col group cursor-pointer mt-4" data-category="spatial">
            <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-700 ease-out group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" data-alt="Wide serene panoramic view of an art gallery exhibition room where long rolls of translucent handmade Xuan and Kozo paper hang gracefully suspended from high timber beams, gently floating in subtle air currents, warm natural daylight glowing through paper fibers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUVrfViu9MvYq57Acjq5ynRCcObUFEjsX6D4-5AU9SN2jtrwHMsJ4U-Low_kY6zy4ji-JbdUEFZB8f_pu4zXM7FAAEVeRu5Ruuf2LinIV3kJ19R4BxAaUT8leRfyKBGIqsPGe0XNTRzx-SXQ5G7FjSqNbi6zBAXSaaSqnhlHt8C_CTRmvp2vHWnMUh4Mt4-mZlWhBGsDgaNEd_wP3YyPe7L7KbUu7Q8HHWHj7z2Y7Wodrxs8TdD_n1" alt="Wide serene panoramic view of an art gallery exhibition room where long rolls of translucent handmade Xuan and Kozo paper hang gracefully suspended from high timber beams, gently floating in subtle air currents, warm natural daylight glowing through paper fibers." />
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-on-surface shadow-sm">
                     Exhibition Scenography • 2022 
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-base">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="flex flex-col gap-1 max-w-2xl">
                <div className="flex items-center gap-4 text-secondary">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase">
                    07 / MATERIAL INSTALLATION &amp; SCENOGRAPHY
                  </span>
                  <span className="font-label-sm text-label-sm">
                    2022
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                   《纸与呼吸》
                  <span className="font-display italic text-secondary font-normal">
                    Paper &amp; Breath
                  </span>
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                   汇集 36 种手工土法造纸样本的触感展陈设计。观众在微风拂动的长卷缝隙间穿行，感知纸张纤维中蕴藏的植物骨骼与时间留痕。 
                </p>
              </div>
              <div className="flex flex-wrap gap-2 self-start md:self-auto">
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  非遗宣纸
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  拓印工艺
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  空气动力悬挂
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* Alternative View: Archival Inventory List View (Initially Hidden) */}
      <div className="hidden w-full px-margin-mobile md:px-margin pb-space-xl" id="works-list-view">
        <div className="flex flex-col w-full rounded-lg bg-surface-container-lowest/70 backdrop-blur-sm shadow-sm overflow-hidden p-4 md:p-8">
          {/* List Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-4 px-4 text-secondary font-label-sm text-label-sm tracking-wider uppercase">
            <span className="col-span-1">
              NO.
            </span>
            <span className="col-span-5 md:col-span-4">
              PROJECT &amp; TITLE
            </span>
            <span className="hidden md:block col-span-3">
              DISCIPLINE
            </span>
            <span className="col-span-4 md:col-span-3">
              RECOGNITION / CLIENT
            </span>
            <span className="col-span-2 md:col-span-1 text-right">
              YEAR
            </span>
          </div>
          {/* Rows */}
          <div className="flex flex-col divide-y-0" id="list-rows-container">
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="brand">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                01
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《器之呼吸》 Vessels of Solitude
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  陶瓷品牌全案与触感包装
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Brand Identity • Packaging
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                Tokyo TDC Annual • 柴窑手作
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2024
              </span>
            </div>
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="lab">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                02
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《汉堡肉实验室》 Organic Specimen
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  快餐形态有机解构雕塑
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Specimen • Material Lab
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                Solo Lab Project • HANBAOROU
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2024
              </span>
            </div>
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="editorial">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                03
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《云雾与苔》 Mist &amp; Moss
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  自然季刊裸背手工锁线装帧
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Editorial • Bookbinding
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                野地出版联合会 • 特别发行
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2023
              </span>
            </div>
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="spatial">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                04
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《素生木构》 Raw Timber Pavilion
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  传统榫卯微缩导示与装置
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Spatial • Signage Installation
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                西岸艺术中心临时展亭
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2023
              </span>
            </div>
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="digital">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                05
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《静止的时光》 Still Life Sound
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  风吹竹梢与环境音交互界面
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Sensory UI/UX • Audio System
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                独立数字发布 • App Store
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2024
              </span>
            </div>
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="brand">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                06
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《谷雨研墨》 Grain Rain Ink
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  传统手工植物墨与水墨视觉
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Material Study • Visual Identity
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                谷雨文房研究社
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2023
              </span>
            </div>
            <div className="archive-row grid grid-cols-12 gap-4 py-4 px-4 rounded-DEFAULT items-center hover:bg-secondary-container/40 transition-colors cursor-pointer group" data-category="spatial">
              <span className="col-span-1 font-label-sm text-label-sm text-secondary font-mono">
                07
              </span>
              <div className="col-span-5 md:col-span-4 flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  《纸与呼吸》 Paper &amp; Breath
                </span>
                <span className="font-body-sm text-label-sm text-on-surface-variant md:hidden">
                  特种纸触感与手工拓印展陈
                </span>
              </div>
              <span className="hidden md:block col-span-3 font-body-sm text-body-sm text-on-surface-variant">
                Exhibition Scenography
              </span>
              <span className="col-span-4 md:col-span-3 font-body-sm text-body-sm text-secondary truncate">
                东京纸之博物馆特展
              </span>
              <span className="col-span-2 md:col-span-1 text-right font-label-sm text-label-sm text-on-surface-variant font-mono">
                2022
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Download PDF Monograph / Project Inquiries Banner */}
      <section className="w-full px-margin-mobile md:px-margin my-12">
        <div className="relative w-full rounded-xl bg-surface-container p-8 md:p-14 overflow-hidden shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Subtle Decorative Rice Texture SVG Watermark in Corner */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 text-outline-variant/20 pointer-events-none">
            <svg className="w-full h-full stroke-current stroke-[0.75]" fill="none" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" strokeDasharray="4 6" />
              <circle cx="100" cy="100" r="55" />
              <circle cx="100" cy="100" r="30" strokeDasharray="2 4" />
              <path d="M100 20 L100 180 M20 100 L180 100" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">
                menu_book
              </span>
              <span>
                COMPREHENSIVE ARCHIVE COMPENDIUM (2020 — 2024)
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
               索取完整纸质/数字作品集精选册 
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
               作品展厅仅公开部分代表案例。全本 PDF 档案包含更详尽的设计推导手稿、材质工艺打样规范以及 28 件委托项目的现场摄影记录（约 142 页，210MB）。 
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md tracking-wide hover:bg-primary transition-all duration-300 shadow-sm hover:scale-[1.015]">
              <span>
                索取完整 PDF 作品册
              </span>
              <span className="material-symbols-outlined text-base">
                arrow_outward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
