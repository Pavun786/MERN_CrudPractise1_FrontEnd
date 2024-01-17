import { children } from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = () =>{

  const isAuth = localStorage.getItem("token")

    return(
      <div>
        {isAuth ? children : <Navigate replace to ="/"/>}
      </div>
    )
}
export default ProtectedRoute;