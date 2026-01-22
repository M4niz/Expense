import { DollarSign, 
  LayoutDashboardIcon, //nav icons
  ReceiptIndianRupee,
  ChartColumnBig,
  History,
  CircleCheckBig,
  ShieldCheck,
  Settings2, 
  PowerIcon, 
  User, 
  User2, 
  ShieldUser, 
  UserCheck,
  Icon,
  LogOut,} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useGlobalContext from '../config/GlobalStateContext';
import { adminNavLink, employeeNavLink, validatorNavLink } from '../data/NavLinks';

const Sidebar = () => {
  const navigate = useNavigate();
  
      // const getRole = localStorage.getItem("role");
   const {selectedrole, localSelectedRole,userData, setLocalSelectedRole, setUserData} = useGlobalContext();
      const [isActive, setIsActive] = useState(useLocation().pathname)

      // useEffect(()=>{

      //   setIsActive(lo)

      // },[localSelectedRole, selectedrole])



let selectedRoleFields;

switch (selectedrole ){
  case "employee":
    selectedRoleFields = employeeNavLink;
    break;

  case "admin":
    selectedRoleFields = adminNavLink;
    break;

  case "validator":
    selectedRoleFields = validatorNavLink;
    break;
}



function changeRoute (elink){
  setIsActive(elink);
  navigate(elink)

}


function logout(){
  fetch(`${import.meta.env.VITE_BACKEND_URL}user/logout`,
    {
      credentials:"include",
      method:"GET"
    }
  )
  .then((e)=> console.log(e.json()))
  .then((e)=> console.log(e))
  localStorage.clear("login")
  setUserData("")
  navigate('/')
}
 
  return (
     <aside className="hidden lg:flex flex-col w-[20vw] h-screen bg-orange-50 border-r border-[#d9770633]">

        {/* TOP */}
        <div className="p-3 space-y-4 border-b border-[#d9770633]">
          <div className="flex gap-2 items-center">
            <span className="bg-white rounded-full p-1 border border-orange-300">
              <DollarSign className="size-5" />
            </span>
            <div>
              <h1 className="font-bold text-xl">Expense Tracker</h1>
              <p className="text-xs text-gray-500">Enterprise Suite</p>
            </div>
          </div>

       
        </div>

        {/* NAV Links */}
        <nav className="p-6 flex-1 border-b border-orange-200">
          <ul className="space-y-2 text-xs font-medium">
            {
            selectedRoleFields && selectedRoleFields.map((e) => {
              const Icon = e.Icon
              return (
                <li
                  key={e.link}
                  onClick={() => changeRoute(e.link)}
                  className={`${isActive == e.link ? "bg-orange-400 p-2 text-white":"bg-none hover:bg-orange-100"} text-xs font-medium flex items-center gap-2  p-2 rounded-lg cursor-pointer`}
                 >
                  {Icon && <Icon className="size-4" />}
                  {e.nav}
                </li>
              )
            })
          }


        
          </ul>
        </nav>

        {/* BOTTOM */}
    <div className=" w-full px-4 py-6">
           <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-between gap-3">
             <div className="flex items-center gap-2">
              <div className="bg-orange-400 p-2 rounded-full">
               <User2 className="text-white" size={16} />
             </div>
             <div>
               <p className="text-xs font-medium">{userData?.profile?.full_name}</p>
               <p className="text-[10px]">{userData?.dept_name} • {userData?.roles_name}</p>
             </div>
             </div>

               <button 
    onClick={logout}
    className="group cursor-pointer w-fit p-1 bg-white hover:bg-red-50 hover:text-red-600 rounded-full transition-all duration-200"
  >
    <LogOut className="size-4" />
   
  </button>
           </div>

</div>
      </aside>

  )
}

export default Sidebar