import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div id="top" className="bg-background font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      <Header />
      <main className="w-full pt-20 bg-background min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
