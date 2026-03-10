//conditional rendering-based on condition it shows different UI
import React from 'react'
import {useState} from 'react'

const Conditional = () => {
    let isLoggedIn=false
    /*if(isLoggedIn)
    {
        return <h1>User LoggedIn</h1>
    }
    else{
        return <h1>Please Log In</h1>
    }
  return (
    <div>Conditional</div>*/

    /*
    //using ternary operator
    return (
        <div>
            {isLoggedIn?<h1>Welcome back</h1>:<h1>Please login into the page</h1>}
        </div>
    )*/

    const [isVisible,setIsVisible]=useState(true)
    return (
        <div>
            <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
            {isVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corporis consequatur, quidem a suscipit obcaecati quos repellendus, nam possimus explicabo ratione, nesciunt odio placeat nobis maxime at excepturi eius. Quae.</p>}
        </div>
    )
   
}

export default Conditional