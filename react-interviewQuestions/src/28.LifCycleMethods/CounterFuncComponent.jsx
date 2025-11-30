import React, { useEffect, useState } from 'react'

const CounterFuncComponent = () => {

    const [ count, setCount] = useState(0);
    console.log("render")


    useEffect(()=>{
        console.log("ComponentDidMount")
    }, []);

    useEffect(()=>{
        console.log("ComponentDidUpdate", {count})
    },[count])

    useEffect(()=>{
        return()=>{
            console.log("Component Will Unmount-cleanup")
        }
    }, [])


  return (
    <div>
        <h2>CounterFuncComponent</h2>
        <h2>Count: {count}</h2>
        <button onClick={()=> setCount(count + 1)}>+</button>

    </div>
  )
}

export default CounterFuncComponent