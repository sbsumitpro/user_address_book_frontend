import axios from "axios";

const baseUrl = "http://localhost:3100/api/users";

export const getAllUsers = (setUsers)=>{
    axios.get(baseUrl)
    .then((data)=>{
        // console.log("data====>>",data.data)
        setUsers(data.data);
    })
    .catch((err)=>{
        console.log(err);
        alert("There was some problem while loading the page::",err.response.data)
    })
}

function setInputEmpty(setName, setEmail, setAddress, setClassName, setPhone, setImgURL){
    setName("");
    setEmail("");
    setAddress("");
    setClassName("");
    setPhone("");
    setImgURL("");
}

export const addUser = (name, email, address, className, phone, image,setUsers,setName, setEmail, setAddress, setClassName, setPhone, setImgURL)=>{
    
        axios.post(baseUrl,{
            name:name,
            email:email,
            address:address,
            className:className,
            phone:phone,
            image:image
        })
        .then((data)=>{
            // console.log(data)
            setInputEmpty(setName, setEmail, setAddress, setClassName, setPhone, setImgURL);
            alert("User data added successfully")
            getAllUsers(setUsers)
        })
        .catch((error)=>{
            alert("There was some error while adding the data: "+error.response.data)
            // console.log(error)
            // console.log("specific err", error.response.data)
        })
    
}

export const update = (name, email, address, className, phone, image,setUsers,setName, setEmail, setAddress, setClassName, setPhone, setImgURL)=>{
    axios.put(baseUrl,{
        name:name,
        email:email,
        address:address,
        className:className,
        phone:phone,
        image:image
    })
    .then((data)=>{
        // console.log("data====>>",data.data)
        setInputEmpty(setName, setEmail, setAddress, setClassName, setPhone, setImgURL);
        alert("User data updated")
        getAllUsers(setUsers);
    })
    .catch((error)=>{
        // console.log(error.response.data);
        setInputEmpty(setName, setEmail, setAddress, setClassName, setPhone, setImgURL);
        alert(error.response.data)
    })
}

export const deleteUser = (email, setUsers)=>{
    axios.delete(baseUrl,{
        data:{email:email}
    })
    .then(()=>{
        alert("User record has been deleted successfully")
        getAllUsers(setUsers);
    })
    .catch((error)=>{
        alert(error.response.data)
    })
}