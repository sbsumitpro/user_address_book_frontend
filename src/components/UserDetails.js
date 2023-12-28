

export default function UserDetails({users, handleUpdate, handleDelete}){
    return(
        <>
        <div className="bottom">
            <h1>List of all Users</h1>
            {users.map((user,index)=>(
                <div className="userDetail" key={index}>
                    <div className="imgContainer">
                        <img src={user.image} alt="User Image"/>
                    </div>
                    <div className="details">
                        <h4>{user.name}</h4>
                        <h5>{user.email}</h5>
                        <h5>{user.address}</h5>
                        <h5>{user.phone}</h5>
                        <h5>{user.className}</h5>
                    </div>
                    <div className="btns">
                        <img src="https://cdn-icons-png.flaticon.com/128/10747/10747217.png" alt="edit" height="20px" 
                        onClick={()=>handleUpdate(user.name,user.email, user.address,user.className, user.phone, user.image)}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" alt="delete" height="20px" 
                        onClick={()=>handleDelete(user.email)}
                        />
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}