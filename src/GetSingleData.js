import React ,{ useState,useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom"

const GetSingleData = () =>{

    const{id} = useParams()
    const[getsingleData,setSingleData] = useState("")

    const navigate = useNavigate()

    console.log(getsingleData)


    const singleDataFetch = () =>{
        fetch(`https://mern-crud-practise1-back-end.vercel.app/${id}`,{
        method:"GET"
      })
    .then((data)=> data.json())
    .then((dt)=>setSingleData(dt))
    }

     useEffect(()=>{
     
        singleDataFetch()

        setSingleData("")
       
    },[id])


  
    return(
        <div>
         {getsingleData ?  <div>   
         <h3>Name :<span>{getsingleData.name}</span></h3>
         <h4>Age :<span>{getsingleData.age}</span></h4>
         <h4>Gender :<span>{getsingleData.place}</span></h4>
         </div> : "Loading..." }   
         
         <button className="formBtn"onClick={()=>navigate("/container/create")}>Add New Data</button>

        </div>
    )
}

export default GetSingleData