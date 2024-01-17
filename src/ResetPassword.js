import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { id, token } = useParams();


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPass = {
            "newPassword": newPassword
        }

        console.log(newPass)

        if (newPassword != confirmPassword) {
            alert("Passwords not match..!")
        } else {
            fetch(`https://mern-crud-practise1-back-end.vercel.app/${id}/resetPassword`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newPass)
            })
                .then((dt) => dt.json())
                .then(() => navigate("/"))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <lable for="newpass">New Password:</lable>
                <input
                    id="newpass"
                    onChange={(e) => setNewPassword(e.target.value)}

                /><br />
                <label for="pass">Cofirm Password:</label>
                <input
                    id="pass"
                    onChange={(e) => setConfirmPassword(e.target.value)}

                /><br />
                 
                 <button >submit</button>
            </form>
        </div>
    )
}
export default ResetPassword;