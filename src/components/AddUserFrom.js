
export default function AddUserForm({name, email, address, className, phone, imgURL, handleAdd, isUpdate, updateData, setName, setEmail, setAddress, setClassName, setPhone, setImgURL}){
    return(
        <div className="top">
        <form >
          <input type="text" value={name} placeholder="Enter the name" onChange={(e)=>setName(e.target.value)} required/>
          <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <input type="text" value={address} placeholder="Address" onChange={(e)=>setAddress(e.target.value)} required/>
          <input type="text" value={className} placeholder="Class" onChange={(e)=>setClassName(e.target.value)} />
          <input type="text" value={phone} placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} required/>
          <input type="text" value={imgURL} placeholder="Image URL" onChange={(e)=>setImgURL(e.target.value)} />

          {isUpdate?<button onClick={(e)=>updateData(e)}> Update User</button>:<button onClick={(e)=>handleAdd(e)}> Add User</button>}

        </form>
      </div>
    )
}