 import {useEffect, useState} from "react"
import { useNavigate,Link} from "react-router-dom"
import { useTheState } from "./Context"


const Form = () =>{

    const [name,setName] = useState("")
    const[age,setAge] = useState("")
    const [place,setPlace] = useState("")
    
    //const[result,setResult] = useState([])

    
    const [status,setStatus] = useState(true)
    

    const[loading,setLoading] = useTheState()

     console.log("loading",loading)

  const navigate = useNavigate()
   
  //This useState is used to avoid multi rendering
   useEffect(()=>{
    if(name.length > 0 && age.length > 0 && place.length > 0){
        setStatus(false)
    }
   },[name,age,place])

  

  const handleSubmit = async(e)=>{
         e.preventDefault();
        
        setLoading(true)

       const addData = {
            name : name,
            age : age,
            place : place
        }
         // setResult([...result,addData])
         const formData = await fetch("https://mern-crud-practise1-back-end.vercel.app/",{
            method:"POST",
            headers: {
                 "content-type": "application/json",
                 AuthToken : localStorage.getItem("token")
            },
            body: JSON.stringify(addData)
        })

       console.log(formData)

        if(formData.status == 401){
            console.log("error")
            alert("UnAuthorized")
           
        }else{
            
            const result = await formData.json()
            console.log("success")
            alert(result.message)
            
        }
       
        //this are become an empty ,when user submit the feilds
          setName("")
          setAge("")
          setPlace("")
         }

return(
   <div>
    <h3 className="heading">Please Enter the Details </h3>
    <div className="getpage">
     <form onSubmit={handleSubmit}>
     <lable for="name">Name:</lable>
     <input
     id="name"
     onChange={(e)=> setName(e.target.value)}
     value={name}
     /><br/>
     <label for="age">Age:</label>
     <input
      id="age"
      onChange={(e)=> setAge(e.target.value)}
      value={age}
     /><br/>
      <lable for="place">Place:</lable>
     <input
     id="place"
     onChange={(e)=> setPlace(e.target.value)}
     value={place}
     /><br/>
     
  <button disabled={status} className="formBtn">submit</button>
     </form>
   
     </div>
   </div>


    
 )
   
}
export default Form;

 

