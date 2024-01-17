import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";



const Register = () =>{

  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()


  const handleSubmit =(e)=>{

    e.preventDefault()

    const data ={
        username : userName,
        email : email,
        password : password
    }
      fetch("https://mern-crud-practise1-back-end.vercel.app/register",{
        method:"POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(data)
      })
      .then(()=> alert("Register completed"))
      .then(()=> navigate("/"))
  }


    return(
        <div className="register">
        <h2>Register</h2>    
        <form onSubmit={handleSubmit}>
          
        <label for="username">UserName:</label>
        <br/>
        <input 
         id="username"
         type="text"
         onChange={(e)=>setUserName(e.target.value)} 
        /> 
        <br/>
        <label for="email">Email:</label>
        <br/>
        <input 
         id="email"
         type="email"
         onChange={(e)=>setEmail(e.target.value)} 
        />
        <br/>
        <label for="password">Password</label>
        <br/>
        <input 
         id="password"
         type="password"
         onChange={(e)=>setPassword(e.target.value)} 
        />
        <br/>
        <button className="registerBtn" type="submit">Register</button>
            
        </form>  
        <p>Already have an account?<Link to="/">Login</Link></p>  
       
        </div>
    )
}
export default Register;