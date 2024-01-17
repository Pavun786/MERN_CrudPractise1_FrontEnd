import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheState } from "./Context";

const EditData = () => {
  const { id } = useParams();
 
  const[singleId,setSingleId] = useState("")

  //this is come from context
  const[updateloading,setUpdateLoading] = useTheState()

  const navigate = useNavigate()
  
  const getSingleData =()=>{
     fetch(`https://mern-crud-practise1-back-end.vercel.app/${id}`)
    .then((dt) => dt.json())
    .then((val) => setSingleId(val))
   }  

   useEffect(() => {
       
    getSingleData()
    
    setSingleId("")
       
    }, [id]);
    
    
   
  return (
    <div>
      <h3>Edit Form</h3>
      {singleId ? (
        <EditFormData singleId={singleId} setSingleId={setSingleId} updateloading={updateloading} setUpdateLoading={setUpdateLoading}/>
      ) : (
        "Loading..."
      )}
     
    </div>
  );
};

const EditFormData = ({ singleId, setSingleId,updateloading,setUpdateLoading }) => {
  // console.log("sing", singleId.name);
  const [name, setName] = useState(singleId.name);
  const [age, setAge] = useState(singleId.age);
  const [place, setPlace] = useState(singleId.place);

  const navigate = useNavigate();

 
  

  const handleSubmit = (e) => {
    
    e.preventDefault();

    setUpdateLoading(true)

    const addData = {
      name: name,
      age: age,
      place: place,
    };
    
 
    upDateData(addData);
    
};
  // setResult([...result,addData])

  const upDateData = async(addData) => {

    

  const updatedData = await fetch(`https://mern-crud-practise1-back-end.vercel.app/${singleId._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        AuthToken : localStorage.getItem("token")
      },
      body: JSON.stringify(addData),
    })

    console.log(updatedData)
    
    if(updatedData.status == 401){
       console.log("error")
       alert("UnAuthorized")
    }
    else{
       const result = await updatedData.json()
       console.log("success")
       alert(result.message)
       navigate("/container/create")
    }
    
};

  return (
    <form onSubmit={handleSubmit}>
      <lable for="name">Name:</lable>
      <input id="name" onChange={(e) => setName(e.target.value)} value={name} />
      <br />
      <label for="age">Age:</label>
      <input id="age" onChange={(e) => setAge(e.target.value)} value={age} />
      <br />
      <lable for="place">Place:</lable>
      <input
        id="place"
        onChange={(e) => setPlace(e.target.value)}
        value={place}
      />
      <br />

      <button type="submit" className="formBtn">
        Update
      </button>
    </form>
  );
};
export default EditData;
