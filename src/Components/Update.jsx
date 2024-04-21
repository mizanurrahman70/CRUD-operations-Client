import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const useloader=useLoaderData()
    const btnHandle=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value 
        const email=form.email.value
        const user={name,email}
        console.log(user)
        fetch(`http://localhost:5000/user/${useloader._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            id(data.modifiedCount>0){
                alert('u')
            }
        })
    }
    return (
        <div>
            <h1>Update information{useloader.name}</h1>
            <form onSubmit={btnHandle} >
                <input type="text" name='name' defaultValue={useloader.name} /><br />
                <input type="email" name="email" id="" defaultValue={useloader.email} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;