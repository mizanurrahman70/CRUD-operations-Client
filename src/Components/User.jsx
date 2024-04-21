
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loaderdata=useLoaderData()
    const[User,setUser]=useState(loaderdata)
    const btnHandle=(_id)=>{
        
        fetch(`http://localhost:5000/user/${_id}`,{
          method:"DELETE",
          
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('delete your data')
                const remaining=User.filter(data=>data._id !== _id)
                setUser(remaining)
            }

            console.log(data)
        })
    }
    return (
        <div>
            THis is your user{User.length}
            <div>
                {
                    User.map((users)=><p key={users._id}>{users.name}:{users.email}:{users._id}<Link to={`/user/${users._id}`}><button>Update</button></Link> <button onClick={()=>btnHandle(users._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;