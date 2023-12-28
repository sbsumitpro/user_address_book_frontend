import { useEffect, useState } from "react";
import AddUserForm from "./components/AddUserFrom";
import UserDetails from "./components/UserDetails";
import { getAllUsers, addUser,update, deleteUser } from "./utils/handleAPIs";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [className, setClassName] = useState("")
  const [phone, setPhone] = useState("")
  const [imgURL, setImgURL] = useState("")
  const[users, setUsers] = useState([]);
  const[isUpdate, setIsUpdate] = useState(false);

  const handleAdd = (e)=>{
    // console.log(name, email, address, className, phone, imgURL)
    e.preventDefault();
    addUser(name, email, address, className, phone, imgURL,setUsers,setName, setEmail, setAddress, setClassName, setPhone, setImgURL)
  }

  const handleUpdate =(name, email, address, className, phone, imgURL)=>{
    setName(name);
    setEmail(email);
    setAddress(address);
    setClassName(className);
    setPhone(phone);
    setImgURL(imgURL);
    setIsUpdate(true);
  }

  const updateData=(e)=>{
    e.preventDefault();
    update(name, email, address, className, phone, imgURL,setUsers,setName, setEmail, setAddress, setClassName, setPhone, setImgURL)
    setIsUpdate(false)
  }

  const handleDelete= (email)=>{
    deleteUser(email,setUsers)
  }

  useEffect(()=>{
    getAllUsers(setUsers)
  },[])

  return (
    <div className="App">

      <div className="container">
        <h1>User Address Book</h1>
        <AddUserForm 
        name={name} email={email} address={address} className={className} phone={phone} imgURL={imgURL} handleAdd={handleAdd} isUpdate={isUpdate}
        updateData={updateData} setName={setName} setEmail={setEmail} setAddress={setAddress} setClassName={setClassName} setPhone={setPhone} setImgURL={setImgURL}
        />
        <UserDetails users={users} handleUpdate={handleUpdate} handleDelete={handleDelete}/>

      </div>

    </div>
  );
}

export default App;
