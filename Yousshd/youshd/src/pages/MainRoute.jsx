import React from 'react'
import { Route, Routes } from "react-router-dom";
//import { Employee } from '../components/Employee';
//import { EmployeeId } from '../components/EmployeeId';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
//import { Login } from '../components/Login';
//import { Register } from '../components/Register';
import { Privateauth } from '../hoc/Privateauth';
export const MainRoute = () => {
  return (
    <div>
   <Routes>
   <Route path="/" element={<Privateauth><Home/></Privateauth>}/>
   {/* <Route path="/employee" element={<Privateauth><Employee/></Privateauth>}/> */}
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   {/* <Route path="/employee/:id" element={<EmployeeId/>}/> */}
   </Routes>
    </div>
  )
}
