import { DollarSign, User2, PowerIcon, LayoutDashboardIcon, BadgeIndianRupee, ChartSpline } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Dashboard from "./Dashboard/Dashboard"
import { useState } from "react"
import Sidebar from "../Layout/Sidebar"


const Layout = () => {
  const navigate = useNavigate()


  return (
    <div className="flex w-screen h-screen">

      {/* LEFT SIDEBAR */}
     <Sidebar/>
      {/* RIGHT CONTENT */}
      <main className="flex-1 h-screen overflow-y-auto bg-white">
        <Navbar/>
        <Outlet/>
      </main>

    </div>
  )
}

export default Layout
