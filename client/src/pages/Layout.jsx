import { DollarSign, User2, PowerIcon, LayoutDashboardIcon, BadgeIndianRupee, ChartSpline } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import EmployeeDashboard from "./Dashboard/EmployeeDashboard"
import EmployeeReports from "./reports/EmployeeReports"

const Layout = () => {
  const navigate = useNavigate()

  return (
    <div className="flex w-screen h-screen">

      {/* LEFT SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-[20vw] h-screen bg-orange-50 border-r border-[#d9770633]">

        {/* TOP */}
        <div className="p-6 space-y-4 border-b border-[#d9770633]">
          <div className="flex gap-2 items-center">
            <span className="bg-white rounded-full p-1 border border-orange-300">
              <DollarSign className="size-5" />
            </span>
            <div>
              <h1 className="font-bold text-xl">Expense Tracker</h1>
              <p className="text-xs text-gray-500">Enterprise Suite</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-1 border border-orange-200">
            <div className="bg-[#ff7f35] rounded-xl h-20 flex flex-col items-center justify-center">
              <User2 className="text-white size-6" />
              <p className="text-white text-sm">Employee</p>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="p-6 flex-1">
          <ul className="space-y-2 text-xs font-medium">
            <li
              onClick={() => navigate("/employee")}
              className="cursor-pointer flex items-center gap-2 hover:bg-yellow-200 p-3 rounded-lg"
            >
              <LayoutDashboardIcon className="size-4" />
              Dashboard
            </li>

            <li
              onClick={() => navigate("/employee/submit")}
              className="cursor-pointer flex items-center gap-2 hover:bg-yellow-200 p-3 rounded-lg"
            >
              <BadgeIndianRupee className="size-4" />
              Submit
            </li>

            <li
              onClick={() => navigate("/employee/reports")}
              className="cursor-pointer flex items-center gap-2 hover:bg-yellow-200 p-3 rounded-lg"
            >
              <ChartSpline className="size-4" />
              Expense Reports
            </li>
          </ul>
        </nav>

        {/* BOTTOM */}
        <div className="p-6 border-t border-[#d9770633]">
          <div className="bg-white p-3 flex items-center gap-2 rounded-xl">
            <div className="bg-orange-300 rounded-full p-1">
              <User2 className="size-5 text-white" />
            </div>
            <div>
              <p className="text-xs">Employee</p>
              <p className="text-[10px]">Marketing • employee</p>
            </div>
          </div>

          <button className="mt-3 text-xs flex gap-2 items-center">
            <PowerIcon className="size-3" />
            Sign out
          </button>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 h-screen overflow-y-auto bg-white">
        <Navbar />
        <Outlet />
      </main>

    </div>
  )
}

export default Layout
