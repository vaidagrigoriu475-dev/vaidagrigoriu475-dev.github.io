import { useEffect, useRef } from "react"
import { bindContactInteractions } from "../interactions"

export default function ContactPage() {
  const rootRef = useRef(null)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    return bindContactInteractions(root)
  }, [])

  return (
    <div ref={rootRef}>
    <div className="flex flex-col w-full">
      {/* Subtle Background Texture Layer with ambient warm noise & organic glow */}
      <div className="relative w-full overflow-hidden px-margin-mobile md:px-margin py-space-lg md:py-space-xl">
        {/* Organic Ambient Blurred Halo in the background */}
        <div className="absolute -top-24 right-10 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none" />
        {/* Editorial Header Section */}
        <div className="relative z-10 max-w-4xl mb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high/70 mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              COMMUNICATION &amp; INQUIRY
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm tracking-tight">
             发起交流 
            <span className="font-display italic text-secondary">
              / Get in Touch
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
             无论是全新的品牌全案、独立艺术出版物策划，或是纯粹的美学思辨交流，我都期待聆听你的想法。在这个充满速食节奏的世界里，让我们以温润从容的步调，构筑经得起时间摩挲的触感设计。 
          </p>
        </div>
        {/* Main Content Asymmetrical Split Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
          {/* Left Column: Direct Contact & Social Channels (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Profile Identity Pebble Card */}
            <div className="relative overflow-hidden rounded-lg bg-surface-container-low p-space-lg shadow-sm">
              <div className="flex items-center gap-space-md mb-space-md">
                <div className="relative">
                  <img className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-primary-container/20" data-alt="Intimate film-grain portrait of an East Asian independent artist and designer in a sunlit warm minimalist studio filled with tactile paper samples and ceramic pots. Soft natural daylight, muted organic moss and clay tones, fine monograph aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIReQRp_8KTEsDzxL7vFgJQ0JWDYko-EdUWMoC5IO_iQBaFr5EiMj6_x1hSalzMMYKwdpH4ZsOvuFQHiPfKqXoTICtrePpFFiEbHMnvB-2NK-aZg0HAo0ob_PhcPZsppS8bd874uHg5AqSV0oer7Tk4G2O6S-I9erKiF_n0mzqtcViID4rJ2Ch2BhZoUrvf5SsMyIVQfW93P2IbWUBNN8Wpixz3n9QRWkyvLXmyqql4cixA3L5S-up" alt="Intimate film-grain portrait of an East Asian independent artist and designer in a sunlit warm minimalist studio filled with tactile paper samples and ceramic pots. Soft natural daylight, muted organic moss and clay tones, fine monograph aesthetic." />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-primary-container border-2 border-surface-container-low" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-normal">
                    汉堡肉 HANBAOROU
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Independent Visual Artist &amp; Bookmaker
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-sm border-t-0 bg-surface-container/60 rounded-DEFAULT p-space-sm">
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary">
                    distance
                  </span>
                  <span className="font-label-md text-label-md">
                    Studio in Shanghai, UTC+08:00
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary-container" />
                  <span className="font-label-sm text-label-sm text-primary font-medium">
                    接洽进行中
                  </span>
                </div>
              </div>
            </div>
            {/* Direct Channels Card (Email & WeChat) */}
            <div className="flex flex-col gap-space-md rounded-lg bg-surface-container-low p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                  Direct Channels
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  优先线上交流
                </span>
              </div>
              {/* Channel 1: Email */}
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-DEFAULT bg-surface-container hover:bg-surface-variant transition-all duration-300 gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-xl">
                      alternate_email
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      官方联系邮箱 / Primary Mail
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium truncate select-all" id="email-address-text">
                      hanbaorou.design@studio.art
                    </span>
                  </div>
                </div>
                <button className="shrink-0 inline-flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-bright hover:bg-primary-container hover:text-on-primary text-on-surface transition-all duration-300 shadow-sm cursor-pointer group-hover:scale-105 active:scale-95" id="copy-email-btn" type="button">
                  <span className="material-symbols-outlined text-sm">
                    content_copy
                  </span>
                  <span className="font-label-md text-label-md">
                    一键复制
                  </span>
                </button>
              </div>
              {/* Channel 2: WeChat QR */}
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-DEFAULT bg-surface-container hover:bg-surface-variant transition-all duration-300 gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-xl">
                      chat_bubble
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      微信工作联络 / WeChat ID
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium truncate">
                      hanbaorou_art
                    </span>
                  </div>
                </div>
                <button className="shrink-0 inline-flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container hover:bg-primary text-on-primary transition-all duration-300 shadow-sm cursor-pointer group-hover:scale-105 active:scale-95" id="open-wechat-modal-btn" type="button">
                  <span className="material-symbols-outlined text-sm">
                    qr_code_2
                  </span>
                  <span className="font-label-md text-label-md">
                    查看二维码
                  </span>
                </button>
              </div>
              {/* Response Commitment Policy Notice */}
              <div className="flex items-start gap-space-xs p-space-sm bg-surface/80 rounded-DEFAULT text-on-surface-variant">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">
                  schedule
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">
                    工作时间与答复周期
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    GMT+08:00 (上海) 工作日 · 所有正式商务需求通常在 24 小时内亲笔答复。
                  </span>
                </div>
              </div>
            </div>
            {/* Studio Visit Guidelines & Accordion FAQ */}
            <div className="rounded-lg bg-surface-container-low p-space-lg shadow-sm flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase mb-space-xs">
                COLLABORATION FAQ &amp; VISITS
              </span>
              <div className="bg-surface-container rounded-DEFAULT p-space-md">
                <h4 className="font-label-md text-label-md text-on-surface mb-1 flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-primary">
                    location_city
                  </span>
                   工作室参访与纸样触摸 
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                   上海工作室每周四下午接受预约参访。我们备有上百种手工棉纸、和纸样本及特种印艺档案，供实体项目提案现场选定。 
                </p>
              </div>
              <div className="bg-surface-container rounded-DEFAULT p-space-md">
                <h4 className="font-label-md text-label-md text-on-surface mb-1 flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-primary">
                    verified_user
                  </span>
                   委托流程与排期 
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                   为确保深度与细腻度，每季度仅承接 2–3 个核心创意全案。建议在预期交付前 4-6 周提前预约排期沟通。 
                </p>
              </div>
            </div>
            {/* Visual Art Monograph Vignette */}
            <div className="relative overflow-hidden rounded-lg bg-surface-container-high h-48 group shadow-sm">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Calm artistic flatlay photograph of tactile Japanese handmade paper, ceramic ink stone, dried tea leaves, and crafted book mockup on a warm beige linen surface in afternoon soft light." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUSmaSHY9k-9TNUy7gJwhUGkquR7r51cuPWozT0IsfIgQUJ_CXktPdGWT60e9oTZyUvaRhCaq9NouDXN0xcLZhe5scjJej8qWPUvp0u8PSlH5VTFo5UNqL9UQLFjaaxQLGbRWFi1OpIM0Dux1dd9S_bZZJ-FUt5Hi36yHRN9trv16dsAc4D7-6mzXyYnnSMtLbWI2DnWI0ojyAhS6qqK_aNfoeOavzzqBLow-gQOVVBOb-K5Kw-jzp')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent flex flex-col justify-end p-space-md">
                <span className="font-label-sm text-label-sm text-inverse-on-surface uppercase tracking-widest opacity-80">
                  MATTER &amp; MATERIALITY
                </span>
                <span className="font-headline-sm text-headline-sm text-on-primary">
                  “让触感成为思想的注脚。”
                </span>
              </div>
            </div>
          </div>
          {/* Right Column: Collaboration & Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg bg-surface-container-low p-space-lg md:p-space-xl shadow-sm">
              {/* Header for the Form */}
              <div className="flex flex-col gap-1 mb-space-lg">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    交流留言与项目提案
                  </h2>
                  <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                    ENQUIRY FORM
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                   填写以下关键信息，汉堡肉将在 24 小时内查阅并回复初步排期与策划建议。 
                </p>
              </div>
              <form className="flex flex-col gap-space-md" id="contact-inquiry-form">
                {/* Two Col: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="client-name">
                      <span>
                        您的称呼 / Name
                      </span>
                      <span className="font-label-sm text-label-sm text-error/80">
                        *必填
                      </span>
                    </label>
                    <input className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface text-on-surface font-body-md placeholder:text-outline-variant outline-none focus:ring-2 focus:ring-primary-container/40 transition-all shadow-sm" id="client-name" name="name" placeholder="如：林先生 / 叶女士 / Mark" required type="text" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="client-email">
                      <span>
                        联系邮箱 / Email
                      </span>
                      <span className="font-label-sm text-label-sm text-error/80">
                        *必填
                      </span>
                    </label>
                    <input className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface text-on-surface font-body-md placeholder:text-outline-variant outline-none focus:ring-2 focus:ring-primary-container/40 transition-all shadow-sm" id="client-email" name="email" placeholder="your.name@domain.com" required type="email" />
                  </div>
                </div>
                {/* Two Col: Phone / Instant Message & Organization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="client-phone">
                      <span>
                        微信或电话 / WeChat or Tel
                      </span>
                    </label>
                    <input className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface text-on-surface font-body-md placeholder:text-outline-variant outline-none focus:ring-2 focus:ring-primary-container/40 transition-all shadow-sm" id="client-phone" name="phone" placeholder="选填，便于快捷沟通" type="text" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="client-org">
                      <span>
                        所属机构 / Brand or Studio
                      </span>
                    </label>
                    <input className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface text-on-surface font-body-md placeholder:text-outline-variant outline-none focus:ring-2 focus:ring-primary-container/40 transition-all shadow-sm" id="client-org" name="organization" placeholder="公司 / 独立工作室 / 个人委托" type="text" />
                  </div>
                </div>
                {/* Dropdown: Collaboration Scope */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="project-scope">
                    <span>
                      合作意向 / Collaboration Scope
                    </span>
                    <span className="font-label-sm text-label-sm text-error/80">
                      *必填
                    </span>
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none px-space-md py-space-sm rounded-DEFAULT bg-surface text-on-surface font-body-md outline-none focus:ring-2 focus:ring-primary-container/40 transition-all shadow-sm pr-10 cursor-pointer" defaultValue="" id="project-scope" name="scope" required>
                      <option disabled value="">
                        请选择契合的创意领域...
                      </option>
                      <option value="brand">
                        品牌视觉与触感包装识别全案 (Brand Identity &amp; Tactile Packaging)
                      </option>
                      <option value="publishing">
                        独立艺术出版与装帧设计 (Art Publishing, Editorial &amp; Binding)
                      </option>
                      <option value="spatial">
                        空间导示与数字感官装置 (Spatial Signage &amp; Sensory Installations)
                      </option>
                      <option value="curatorial">
                        展览视觉统筹与策展视觉 (Exhibition Identity &amp; Scenography)
                      </option>
                      <option value="other">
                        其它纯粹美学对话与私人艺术委托 (Creative Dialogue / Private Commission)
                      </option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant flex items-center">
                      <span className="material-symbols-outlined text-base">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                {/* Select: Budget Range (Wabi-Sabi pill selector) */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface">
                    <span>
                      预算预期 / Budget Range (CNY)
                    </span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs" id="budget-options">
                    <button className="budget-chip px-space-sm py-2 rounded-DEFAULT bg-surface text-on-surface font-label-sm text-label-sm hover:bg-secondary-container transition-all text-center cursor-pointer shadow-sm" data-budget="20k-50k" type="button">
                       ¥20k - 50k 
                    </button>
                    <button className="budget-chip px-space-sm py-2 rounded-DEFAULT bg-surface text-on-surface font-label-sm text-label-sm hover:bg-secondary-container transition-all text-center cursor-pointer shadow-sm" data-budget="50k-100k" type="button">
                       ¥50k - 100k 
                    </button>
                    <button className="budget-chip px-space-sm py-2 rounded-DEFAULT bg-surface text-on-surface font-label-sm text-label-sm hover:bg-secondary-container transition-all text-center cursor-pointer shadow-sm" data-budget="100k+" type="button">
                       ¥100k + 
                    </button>
                    <button className="budget-chip px-space-sm py-2 rounded-DEFAULT bg-surface text-on-surface font-label-sm text-label-sm hover:bg-secondary-container transition-all text-center cursor-pointer shadow-sm" data-budget="flexible" type="button">
                       待定 / 待沟通 
                    </button>
                  </div>
                  <input id="selected-budget" name="budget" type="hidden" value="50k-100k" />
                </div>
                {/* Textarea: Project Brief */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="project-brief">
                    <span>
                      项目细节描述 / Project Brief &amp; Message
                    </span>
                    <span className="font-label-sm text-label-sm text-error/80">
                      *必填
                    </span>
                  </label>
                  <textarea className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface text-on-surface font-body-md placeholder:text-outline-variant outline-none focus:ring-2 focus:ring-primary-container/40 transition-all shadow-sm resize-none" id="project-brief" name="brief" placeholder="请简述项目背景、时间预期、关键交付物，或任何打动你的艺术触动与设想..." required rows="5" />
                </div>
                {/* Privacy & Security Guarantee */}
                <div className="flex items-center gap-space-xs text-on-surface-variant pt-space-xs">
                  <span className="material-symbols-outlined text-sm text-primary">
                    lock_clock
                  </span>
                  <span className="font-body-sm text-body-sm">
                     汉堡肉重视创意思考的独创性，承诺严格保护所有商业机密与未公开资料。 
                  </span>
                </div>
                {/* Submit Action Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-sm">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-container" />
                    <span>
                      通常在 24 小时内查收
                    </span>
                  </div>
                  <button className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md tracking-wider transition-all duration-300 shadow-md hover:scale-[1.015] active:scale-95 cursor-pointer" id="submit-inquiry-btn" type="submit">
                    <span>
                      发送留言 (Send Message)
                    </span>
                    <span className="material-symbols-outlined text-base">
                      north_east
                    </span>
                  </button>
                </div>
              </form>
              {/* Success Confirmation Notice (Hidden by default) */}
              <div className="hidden absolute inset-0 bg-surface-container/95 backdrop-blur-md rounded-lg flex flex-col items-center justify-center p-space-lg text-center transition-all duration-500" id="form-success-toast">
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container mb-space-md shadow-sm">
                  <span className="material-symbols-outlined text-3xl">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  信件已送达工作室
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg leading-relaxed">
                   感谢你的坦诚与信任。汉堡肉已收到你的留言，将在平静而专注的晨间仔细查阅，并以邮件方式与你展开进一步探讨。 
                </p>
                <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all" id="reset-form-btn" type="button">
                  <span className="material-symbols-outlined text-sm">
                    replay
                  </span>
                  <span>
                    返回表单
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Minimalist Brand Values Ribbon */}
        <div className="mt-space-xl pt-space-lg grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="flex flex-col p-space-md rounded-DEFAULT bg-surface-container-low/70">
            <span className="font-headline-sm text-headline-sm text-primary mb-1">
              01 / 触感物化
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              拒绝千篇一律的数字冷感，每一次装帧均斟酌特种纸纹、压印深度与光泽折射。
            </span>
          </div>
          <div className="flex flex-col p-space-md rounded-DEFAULT bg-surface-container-low/70">
            <span className="font-headline-sm text-headline-sm text-primary mb-1">
              02 / 慢序精造
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              以沉稳而纯粹的节奏对待委托，不为了交付而妥协纸页撕边的粗砺美感。
            </span>
          </div>
          <div className="flex flex-col p-space-md rounded-DEFAULT bg-surface-container-low/70">
            <span className="font-headline-sm text-headline-sm text-primary mb-1">
              03 / 精神共振
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              从概念萌芽到样本打样，我们视委托方为并肩探寻审美边界的共同创作者。
            </span>
          </div>
        </div>
      </div>
      {/* WeChat QR Code Floating Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/40 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="wechat-modal">
        <div className="relative w-full max-w-sm rounded-lg bg-surface-bright p-space-lg shadow-2xl flex flex-col items-center text-center transform scale-95 transition-all duration-300" id="wechat-modal-card">
          {/* Close Button */}
          <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" id="close-wechat-modal-btn" type="button">
            <span className="material-symbols-outlined text-lg">
              close
            </span>
          </button>
          {/* Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider">
              WECHAT DIRECT
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
            扫码添加微信
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
             长按识别或打开微信扫一扫
            <br />
            添加请注明「姓名与合作事项」 
          </p>
          {/* Stylized QR Container */}
          <div className="relative p-space-md rounded-DEFAULT bg-surface-container-low flex flex-col items-center justify-center mb-space-md shadow-inner">
            {/* Organic QR Frame with Corner Accents */}
            <div className="w-48 h-48 rounded-DEFAULT bg-surface-container-lowest p-2 flex items-center justify-center shadow-sm relative overflow-hidden">
              <img className="w-full h-full object-contain" data-alt="Graphic clean monochrome square WeChat QR code for independent design studio with soft rounded organic corner dots, high contrast ink on pure white background, crisp vector styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGM3IbVh6Nv9ARzAlIMDB9LREii9-7QZ8NZz4SFVPaIlRs3G6W3K62Xcu4NADPIw9VdmGDEr3rYISOvcOR_5qCNDxxIQNNFhZpCHKJp_ItJk9S9EijuUxrX1EfjsiyHbN1k4KcpscqInh07ZoR4Wr1V4mOgxYMIW8hE8q0uSVK67f7pL_O5LRnsQvWX8QzLDiT_iQ9mx9vtsJXOVUXMOKjE--tT3F4lGLwTTBRDPaoG0h5KvfZK8v6" alt="Graphic clean monochrome square WeChat QR code for independent design studio with soft rounded organic corner dots, high contrast ink on pure white background, crisp vector styling." />
              {/* Subtle center seal */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-surface-container-lowest p-1 shadow">
                  <div className="w-full h-full rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                    <span className="font-label-sm text-label-sm font-bold">
                      肉
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
              微信号：hanbaorou_art
            </span>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant text-center">
            <span className="material-symbols-outlined text-sm text-primary">
              verified
            </span>
            <span className="font-label-sm text-label-sm">
              汉堡肉官方唯一创作联络端口
            </span>
          </div>
        </div>
      </div>
      {/* Copy Toast Notification */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-inverse-surface text-inverse-on-surface shadow-xl opacity-0 pointer-events-none transition-all duration-300 transform translate-y-3" id="copy-toast">
        <span className="material-symbols-outlined text-base text-primary-fixed">
          check_circle
        </span>
        <span className="font-label-md text-label-md">
          邮箱地址已成功复制到剪贴板
        </span>
      </div>
    </div>
    </div>
  )
}
