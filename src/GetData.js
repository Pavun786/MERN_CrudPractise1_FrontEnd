import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheState } from "./Context"


 const GetData =()=>{

    const[data,SetData] = useState([])
    const navigate = useNavigate()

    //The bellow states are come from context
    //we handle two components saparatly in single page.its very difficult to maintain. i.e: connecting two components 
    //so,we use additionaly context method.here we have a state.so,which component need that state,then easily use it from context
    const[loading,setLoading,updateloading,setUpdateLoading] = useTheState()


   // Get All Datas
   const fetchData = ()=>{
      fetch("https://mern-crud-practise1-back-end.vercel.app/all",{
         method:"GET"
     
     })
     .then((dt)=> dt.json())
     .then((dts)=> SetData(dts))
   }
   
    useEffect(()=>{
     
      fetchData()

    // after fetch the data,the states are became false
     setLoading(false)
     setUpdateLoading(false)
   
   },[loading,updateloading])

  
   // Delete single data:   
     const deleteData = async(_id) =>{


      const data = await fetch(`https://mern-crud-practise1-back-end.vercel.app/${_id}`,{
         method:"DELETE",
         headers:{
            "content-type": "application/json",
            AuthToken : localStorage.getItem("token")
         }
     
     })

     if(data.status == 401){
       alert("UnAuthorized")
     }else{
       const result = await data.json();
       
       console.log("The data was delete..!")
       fetchData()
       alert(result.message)
       
     }

   //   .then(()=> console.log("The data was delete..!"))
   //    .then(()=> alert("The data deleted"))
   //    .then(()=> fetchData())
     } 
    

   return(
        <div>
            
        <table>
          <tr>
             <th>S.no</th>
             <th>Name</th>
             <th>Age</th>
             <th>Place</th>
             <th>Actions</th>
            </tr>  
         {data.map((ele,index)=>{
            return(
               
                <tr>
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.place}</td>
                    <td><button className="viewBtn" onClick={()=>navigate(`/container/get/${ele._id}`)}>View</button></td>
                    <td><button className="editBtn" onClick={()=>navigate(`/container/edit/${ele._id}`)}>Edit</button></td>
                   
                    <td><button className="deleteBtn" onClick={()=>deleteData(`${ele._id}`)}>Delete</button></td>
                   
                </tr>
               
            )
         })}
         </table>
       
        </div>
    )
 }
 export default GetData;