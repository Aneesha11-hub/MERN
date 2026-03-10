import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'

const Contact = () => {
 
   // fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>console.log(data))
    //fetch is used to get the data only
  const fecthData=async()=>
  {
    try{
      const res=await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)

    }
    catch(error)
    {
      console.log('Errors:',error)

    }
  }
   const [users,setUsers]=useState([])
  useEffect(()=>{
    fecthData()
  },[])
  return (
    <div>
        <h1 style={{fontWeight:"bold"}}>FOR Contact details:</h1>
        <h1 style={{textAlign:"center",fontWeight:"Bold"}}>Users</h1>

{users.map((user)=>(
  <div key={user.id}>
  <h4>Name :{user.name}</h4>
  <h4>Email :{user.email}</h4>
  <h4>Phone:{user.phone}</h4>
  <h4>website:{user.website}</h4>
  <hr/>
   </div>
))}
</div>
  )
}
   
export default Contact