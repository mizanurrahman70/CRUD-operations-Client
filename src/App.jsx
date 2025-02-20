
import './App.css'

function App() {
 
 const btnHandle=(e)=>{
  e.preventDefault()
  const form=e.target
  const name=form.name.value
  const email=form.email.value
  const user ={name,email}
  console.log(user)
  fetch('http://localhost:5000/user',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
      alert('add sucessfull')
    }
    form.reset()
  })
 }
  return (
    <>
     
      <h1>Simple CRUD</h1>
      <form onSubmit={btnHandle} >
        <input type="text" name='name' /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="submit" />
      </form>
      
    </>
  )
}

export default App
