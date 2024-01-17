import { useState } from "react";



const ForgetPassword = ()=>{

    const [email,setEmail] = useState("")

   

    const handleSubmit = (e)=>{

     const emailId = {
        email : email
     }

        e.preventDefault();
        
        fetch("https://mern-crud-practise1-back-end.vercel.app/emailSend",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(emailId)
        })
        .then((dt)=>dt.json())
        .then((val)=> console.log(val))
        .then(()=>alert("Reset link sended into the mail"))

    }


    return(
  <div>
      <form onSubmit={handleSubmit}>
    
     <lable for="email">Enter the mail id:</lable><br/>
     <input
     id="email"
     onChange={(e)=> setEmail(e.target.value)}
     value={email}
     required
     /><br/>
     <button >send</button>
    
     </form>

        </div>
    )
}
export default ForgetPassword;