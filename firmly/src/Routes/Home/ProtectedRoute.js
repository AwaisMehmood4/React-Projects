import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext.component";


const ProtectedRoute = ({ children }) => {
    let  { user } = useUserAuth();
    if(!user) {
       return <Navigate to='/' ></Navigate>
    }

    return children;

}

export default ProtectedRoute;