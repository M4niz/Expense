import { useState } from "react"
import { FileText, DollarSign, Clock, ShieldCheck, Download } from "lucide-react"
import { StatCard } from "../../components/StatCard"
import Row from "../../components/Row"

export default function ValidatorDashboard() {
  const [category, setCategory] = useState("All")
  const [employee, setEmployee] = useState("")
  const [sortBy, setSortBy] = useState("Date Submitted")
  const [minAmount, setMinAmount] = useState(0)
  const [maxAmount, setMaxAmount] = useState(100000)

  const requests = [
    {
      id: "VOU-2024-001",
      type: "Voucher",
      employee: "Sarah Johnson",
      dept: "Marketing",
      details: "Q1 Client Meeting Trip - New York",
      amount: "$1,247.25",
      date: "2024-01-15",
      priority: "Medium",
      compliance: "1 flag",
    },
    {
      id: "VOU-2024-002",
      type: "Voucher",
      employee: "Michael Chen",
      dept: "Engineering",
      details: "Tech Conference 2024 - Las Vegas",
      amount: "$2,150.75",
      date: "2024-01-14",
      priority: "High",
      compliance: "Clean",
    },
    {
      id: "VOU-2024-003",
      type: "Voucher",
      employee: "David Rodriguez",
      dept: "Sales",
      details: "Enterprise Client Visit - Singapore",
      amount: "$3,420.60",
      date: "2024-01-13",
      priority: "High",
      compliance: "Issues",
    },
    {
      id: "EXP-2024-004",
      type: "Expense",
      employee: "Emma Wilson",
      dept: "HR",
      details: "Recruitment Drive Expenses",
      amount: "$860.40",
      date: "2024-01-12",
      priority: "Medium",
      compliance: "Clean",
    },
    {
      id: "EXP-2024-005",
      type: "Expense",
      employee: "Raj Patel",
      dept: "Sales",
      details: "Client Visit - Mumbai",
      amount: "$15,420.00",
      date: "2024-01-11",
      priority: "High",
      compliance: "Clean",
    },
  ]

  const filteredRequests = requests
    .filter((req) => {
      if (category !== "All" && req.type !== category) return false

      if (
        employee &&
        !req.employee.toLowerCase().includes(employee.toLowerCase())
      )
        return false

      const amountNumber = Number(req.amount.replace(/[^0-9.]/g, ""))
      if (amountNumber < minAmount || amountNumber > maxAmount) return false

      return true
    })
    .sort((a, b) => {
      if (sortBy === "Amount") {
        return (
          Number(b.amount.replace(/[^0-9.]/g, "")) -
          Number(a.amount.replace(/[^0-9.]/g, ""))
        )
      }
      return new Date(b.date) - new Date(a.date)
    })

  return (
    <div className="flex-1 bg-[#fefdfc] min-h-screen">
      <main className="p-3">
       
     <section className='py-4  lg:py-7 space-y-3 lg:space-y-0 bg-linear-to-r  borders  rounded-md  lg:flex items-center justify-between '>
             

                <div className="space-y-">
                    <h1 className='text-2xl'>Validator Dashboard</h1>
                    <p className='text-[12px] font- text-[#653600f2]'>Pre-validate employee expense requests before finance review</p>
                </div>
                 
                    {/* buttons for applies */}

                <div className="flex gap-2">

                    <button className='p-1 text-xs border bg-white border-[#d9770633] px-2  rounded-md flex items-center gap-2'><Download className='size-3'/> This Month</button>
                    
                </div>
            </section>
       
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <StatCard
            icon={<FileText />}
            title="Total Pending Items"
            value="8"
            sub="3 vouchers, 5 expenses"
            footer="+3 from yesterday"
            color="orange"
          />

          <StatCard
            icon={<DollarSign />}
            title="Total Expenses"
            value="25"
            sub="Across all items"
            footer="+12 from yesterday"
            color="purple"
          />

          <StatCard
            icon={<Clock />}
            title="Average Review Time"
            value="2.8 hrs"
            sub="Target: < 4 hrs"
            footer="-0.6 hrs from last week"
            color="green"
          />

          <StatCard
            icon={<ShieldCheck />}
            title="Policy Compliance"
            value="50%"
            sub="Overall compliance rate"
            footer="+2.1% from last month"
            color="teal"
          />
        </div>
        <div className="bg-white border border-[#f3d7b6] rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Pending Requests
            </h2>

            <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
              {filteredRequests.length} requests
            </span>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-[#f3d7b6] text-sm"
            >
              <option>All</option>
              <option>Voucher</option>
              <option>Expense</option>
            </select>

            <input
              type="text"
              placeholder="Search employee..."
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              className="px-4 py-2 rounded-lg border border-[#f3d7b6] text-sm"
            />

            <input
              type="date"
              className="px-4 py-2 rounded-lg border border-[#f3d7b6] text-sm"
            />

            <div className="flex items-center gap-2">
              <input
                type="number"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#f3d7b6] text-sm"
              />
              <span className="text-gray-400">–</span>
              <input
                type="number"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="w-full px-1 py-2 rounded-lg border border-[#f3d7b6] text-sm"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-[#f3d7b6] text-sm"
            >
              <option>Date Submitted</option>
              <option>Amount</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#f3d7b6] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#fff7ed]">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Type</th>
                <th className="px-6 py-4 text-left">Employee</th>
                <th className="px-6 py-4 text-left">Details</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Priority</th>
                <th className="px-6 py-4 text-left">Compliance</th>
                <th className="px-6 py-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <Row key={req.id} {...req} />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-8 text-gray-500"
                  >
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
