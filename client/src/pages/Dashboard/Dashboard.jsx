import React, { useState } from 'react'
import EmployeeDashboard from '../Employee/EmployeeDashboard';
import ValidatorDashboard from '../Validator/ValidatorDashboard';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
   const [role , setRole] = useState("employee");
  return (

    <>
    
    {
        role == "employee" ? <EmployeeDashboard/>: role == "validator" ? <ValidatorDashboard/>:<p>Admin</p>

    }
    <Outlet/>
    </>

  )
}

export default Dashboard