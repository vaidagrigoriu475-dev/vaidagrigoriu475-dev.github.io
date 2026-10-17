import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl transition-colors">
      <div className="w-full px-margin-mobile md:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg pb-space-lg border-b border-surface-container-high/60">
          <div className="flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface">
              HANBAOROU / 汉堡肉
            </span>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Currently based in Shanghai, available for selective collaborations
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-lg">
            <Link to="/" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
              HOME
            </Link>
            <Link to="/works" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
              WORKS
            </Link>
            <Link to="/about" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
              ABOUT
            </Link>
            <Link to="/contact" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg text-on-surface-variant">
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm">
              © 2024 HANBAOROU. Crafted with patience.
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-outline-variant" />
            <span className="hidden sm:inline-block font-label-sm text-label-sm">
              UTC+08:00 Shanghai
            </span>
          </div>
          <a className="inline-flex items-center gap-space-xs font-label-md text-label-md hover:text-on-surface transition-colors group" href="#top">
            <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
              Back to Top
            </span>
            <span className="material-symbols-outlined text-base">
              arrow_upward
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
