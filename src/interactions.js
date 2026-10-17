function on(element, type, handler) {
  if (!element) return () => {}
  element.addEventListener(type, handler)
  return () => element.removeEventListener(type, handler)
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const field = document.createElement("textarea")
    field.value = text
    document.body.appendChild(field)
    field.select()
    document.execCommand("copy")
    document.body.removeChild(field)
  }
}

function showTemporarily(element, addClasses, removeClasses, delay = 2400) {
  element.classList.remove(...removeClasses)
  element.classList.add(...addClasses)
  const timer = window.setTimeout(() => {
    element.classList.add(...removeClasses)
    element.classList.remove(...addClasses)
  }, delay)
  return () => window.clearTimeout(timer)
}

export function bindHomeInteractions(root) {
  const copyBtn = root.querySelector("#copy-email-button")
  const feedback = root.querySelector("#copy-feedback")
  let clearTimer = () => {}
  const stop = on(copyBtn, "click", () => {
    copyText("studio@hanbaorou.design")
    if (!feedback) return
    clearTimer()
    clearTimer = showTemporarily(feedback, ["opacity-100"], ["opacity-0"])
  })
  return () => {
    stop()
    clearTimer()
  }
}

export function bindWorksInteractions(root) {
  const filterButtons = [...root.querySelectorAll(".filter-pill")]
  const gridItems = [...root.querySelectorAll(".work-item")]
  const listRows = [...root.querySelectorAll(".archive-row")]
  const gridView = root.querySelector("#works-grid-view")
  const listView = root.querySelector("#works-list-view")
  const viewGridBtn = root.querySelector("#view-grid-btn")
  const viewListBtn = root.querySelector("#view-list-btn")
  const stops = []

  filterButtons.forEach((button) => {
    stops.push(on(button, "click", () => {
      const filter = button.getAttribute("data-filter")
      filterButtons.forEach((item) => {
        item.classList.remove("bg-secondary-container", "text-on-secondary-container", "shadow-sm")
        item.classList.add("bg-surface-container-low", "text-on-surface-variant")
      })
      button.classList.add("bg-secondary-container", "text-on-secondary-container", "shadow-sm")
      button.classList.remove("bg-surface-container-low", "text-on-surface-variant")
      ;[...gridItems, ...listRows].forEach((item) => {
        const category = item.getAttribute("data-category")
        item.style.display = filter === "all" || category === filter ? "" : "none"
      })
    }))
  })

  stops.push(on(viewGridBtn, "click", () => {
    gridView?.classList.remove("hidden")
    listView?.classList.add("hidden")
    viewGridBtn.classList.add("bg-surface", "text-on-surface", "shadow-sm")
    viewGridBtn.classList.remove("text-on-surface-variant")
    viewListBtn?.classList.remove("bg-surface", "text-on-surface", "shadow-sm")
    viewListBtn?.classList.add("text-on-surface-variant")
  }))

  stops.push(on(viewListBtn, "click", () => {
    listView?.classList.remove("hidden")
    gridView?.classList.add("hidden")
    viewListBtn.classList.add("bg-surface", "text-on-surface", "shadow-sm")
    viewListBtn.classList.remove("text-on-surface-variant")
    viewGridBtn?.classList.remove("bg-surface", "text-on-surface", "shadow-sm")
    viewGridBtn?.classList.add("text-on-surface-variant")
  }))

  return () => stops.forEach((stop) => stop())
}

export function bindContactInteractions(root) {
  const copyBtn = root.querySelector("#copy-email-btn")
  const emailText = root.querySelector("#email-address-text")
  const toast = root.querySelector("#copy-toast")
  const modal = root.querySelector("#wechat-modal")
  const modalCard = root.querySelector("#wechat-modal-card")
  const openModalBtn = root.querySelector("#open-wechat-modal-btn")
  const closeModalBtn = root.querySelector("#close-wechat-modal-btn")
  const budgetChips = [...root.querySelectorAll(".budget-chip")]
  const budgetInput = root.querySelector("#selected-budget")
  const form = root.querySelector("#contact-inquiry-form")
  const successOverlay = root.querySelector("#form-success-toast")
  const resetBtn = root.querySelector("#reset-form-btn")
  const stops = []
  let clearTimer = () => {}

  const openModal = () => {
    modal?.classList.remove("opacity-0", "pointer-events-none")
    modal?.classList.add("opacity-100")
    modalCard?.classList.remove("scale-95")
    modalCard?.classList.add("scale-100")
  }
  const closeModal = () => {
    modalCard?.classList.remove("scale-100")
    modalCard?.classList.add("scale-95")
    modal?.classList.remove("opacity-100")
    modal?.classList.add("opacity-0", "pointer-events-none")
  }

  stops.push(on(copyBtn, "click", async () => {
    if (!emailText) return
    await copyText(emailText.textContent.trim())
    if (!toast) return
    clearTimer()
    clearTimer = showTemporarily(
      toast,
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "pointer-events-none", "translate-y-3"],
    )
  }))
  stops.push(on(openModalBtn, "click", openModal))
  stops.push(on(closeModalBtn, "click", closeModal))
  stops.push(on(modal, "click", (event) => {
    if (event.target === modal) closeModal()
  }))

  budgetChips.forEach((chip) => {
    if (chip.getAttribute("data-budget") === "50k-100k") {
      chip.classList.add("bg-primary-container", "text-on-primary")
      chip.classList.remove("bg-surface", "text-on-surface")
    }
    stops.push(on(chip, "click", () => {
      budgetChips.forEach((item) => {
        item.classList.remove("bg-primary-container", "text-on-primary")
        item.classList.add("bg-surface", "text-on-surface")
      })
      chip.classList.remove("bg-surface", "text-on-surface")
      chip.classList.add("bg-primary-container", "text-on-primary")
      if (budgetInput) budgetInput.value = chip.getAttribute("data-budget") || ""
    }))
  })

  stops.push(on(form, "submit", (event) => {
    event.preventDefault()
    const name = root.querySelector("#client-name")?.value
    const email = root.querySelector("#client-email")?.value
    const brief = root.querySelector("#project-brief")?.value
    if (name && email && brief) successOverlay?.classList.remove("hidden")
  }))
  stops.push(on(resetBtn, "click", () => {
    form?.reset()
    successOverlay?.classList.add("hidden")
  }))

  return () => {
    stops.forEach((stop) => stop())
    clearTimer()
  }
}
