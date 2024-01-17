import { Outlet } from "react-router-dom";
import GetData from "./GetData";


const Container = () =>{
    return(
        <div className="container1">
        
          <Outlet/>
          <GetData/>
        </div>
    )
}
export default Container;