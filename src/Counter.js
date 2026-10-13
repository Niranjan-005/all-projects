import {React,useState,useEffect} from 'react'

const Counter=()=>{

    const [count,setCount] = useState(0)

    const btn ={
        backgroundColor:"lightgreen",
        borderRadius:"6px"

    }

    //without dependencies - oru time tha varuvan
    useEffect(()=>{
         document.title="counter"
    },[])
    
    //with dependencies - dependency ku mattum varuvan
    // useEffect(()=>{
    //      console.log("count")
    // },[count])
    
    //empty dependencies - ellathukum varuvan
    // useEffect(()=>{
    //      setCount(40)
    // })
    
    function timeout(){
    setTimeout(()=>{
        console.log("test")
    },2000)}

    function interval(){
        setInterval(()=>{
            console.log("interval test")
            
        },1000)
    }

    

    return(
        <>
        <div>
            <h1>Count: {count}</h1>
            <button style={btn} onClick={()=>setCount(count-1)}>-</button>
            <button style={btn} onClick={()=>setCount(0)}>Reset</button>
            <button style={btn} onClick={()=>setCount(count+1)}>+</button>
            
            <button style={btn} onClick={timeout}>time</button>
            <button style={btn} onClick={interval}>Interval</button>
        </div>
        </>
    )
}

export default Counter