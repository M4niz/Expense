import React, { useContext } from 'react'
import AuthenticateUser from './pages/AuthenticateUser'

import Layout from './pages/Layout'
import RoleSelection from './pages/RoleSelectionBoard'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeeReports from './pages/reports/EmployeeReports'
// import useGlobalContext from './config/GlobalStateContext'

 localStorage.setItem("login","false");

const getLoggedIn = localStorage.getItem("login");


const App = () => {
  
  return (
   
  <>

    <Routes>
      <Route path="/" element={<RoleSelection/>}/>
      <Route path="/login" element={<AuthenticateUser/>}/>
      <Route path="/employee" element={<Layout/>}/>
      <Route path="/employee/reports" element={<EmployeeReports/>}/>
    
      
      </Routes>
      </>
  )
}

export default App