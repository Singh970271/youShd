import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const Privateauth = ({children}) => {
    const token = useSelector((state)=>state.auth.token);
    const location = useLocation();
    const from = {
    pathname: location.pathname,
  };
    if (token)
     return children;
    return <Navigate to={"/login"}  state={from} replace/>
}