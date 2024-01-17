import { Children} from "react";
import { Navigate } from "react-router-dom";



const ProtectedRoute = () =>{

  const isAuth = localStorage.getItem("token")

    return(
      <div>
        {isAuth ? Children : <Navigate replace to ="/"/>}
      </div>
    )
}
export default ProtectedRoute;