import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () =>{

  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()


  const handleSubmit = async(e)=>{

    e.preventDefault();

    const data ={
       
        email : email,
        password : password
    }
    const loginData = await fetch("https://mern-crud-practise1-back-end.vercel.app/login",{
        method:"POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(data)
      })

      
   if(loginData.status == 401){
        alert("UnAuthorized")
        console.log("error")
      }
      
      else {
        
        const result = await loginData.json()
        console.log(result)
         alert(result.message)
         localStorage.setItem("token",result.token)
         navigate("/container/create")
      }

 }


    return(
        <div className="login">
         <h2>Login</h2>   
        <form onSubmit={handleSubmit}>
        
        <label for="email">Email:</label>
        <br/>
        <input 
         id="email"
         type="email"
         onChange={(e)=>setEmail(e.target.value)} 
        />
        <br/>
        <label for="password">Password:</label>
        <br/>
        <input 
         id="password"
         type="password"
         onChange={(e)=>setPassword(e.target.value)} 
        />
        <br/>
        <div className="btns">
        <button className="loginBtn">Login</button>
         <button className="forgetBtn" onClick={()=>navigate("/forgetPassword")}>Forget Password</button>   
         </div>
        </form>    
        <p>Are you new user ..?<Link to="/register">Register</Link></p>
        </div>
    )
}
export default Login;