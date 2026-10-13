import {React,useState} from "react";
import './NewProject.css'

const NewProject=()=>{


    const[count, setCount] = useState(0)
    const[open, setOpen] = useState(false)
    const[accor, setAccor] = useState(false)
    const[box, setBox] = useState(false)

    return(
        <>
        <div className="container" style={{backgroundColor:open ? 'black' : 'white', height:'100vh', paddingTop:'40px'}}>

        <button className="btn" onClick={()=>setOpen(!open)}>light/dark</button>
   
       <div className="counter" style={{color: open ? 'white' : 'black'}}> {count} </div>

       

        <div className="button">
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        </div>

        <div className="accordion" >

            <p className="accordion-header" onClick={()=>setAccor(!accor)}>What is React ?</p>
            {accor && <p className="accordion-content">⁕ React is a JavaScript library for building user interfaces.</p>}


        </div>

        <div className="delete-confirm" style={{textAlign:'center'}}>

            <p>React</p>
            <button onClick={()=>setBox(true)}>Delete</button>

        </div>
        
        {box ? (<>
             
            <div className="yes">
            <p>Are you sure ?</p>
            <button onClick={()=>setBox(false)}>Cancel</button>
            <button onClick={()=>setBox(false)}>Yes</button>
            </div>

            </>) : ""}
        
        </div>
        </>
    )
}

export default NewProject