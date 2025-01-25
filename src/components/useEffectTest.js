import { useEffect, useState } from "react";

const UseEffectTest =()=>{

    const[count,setCount]=useState()

    useEffect(()=>{
    
       console.log('Hey')
       setCount(2) 

    },[count])

    return(
        <>

        <h2>UseEffect</h2>

        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
     
        </>
    )
}

export default UseEffectTest;