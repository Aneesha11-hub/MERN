import React from 'react'
import {useState,useEffect} from 'react'

const State = () => {
    //initialisation of state which must be done above return not inside return
    //syntax: const [var,setvar]=setState(initial value)
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    useEffect(()=>{
      document.title=`Clicked count ${like}
      times`
      console.log("from useeffect")
    },[like])

  return (
    <div>
        <h1>useState example</h1>
        {/*<h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>+</button>*/}
        <h3>Count:{like}</h3>
        <button onClick={()=>setLike(like+1)}>👍</button>
        <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State

/*useContext hook =>to overcome prop drilling(passing prop throughmany nested components)
  1. create context-> declaring data as a global
  2.context provider
  3.useContext-> use global data
*/





//state is the data changes over time
//useState-hook that stores data and manages data