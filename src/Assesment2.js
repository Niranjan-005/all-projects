import {React,useState} from 'react'
import './Assesment2.css'

const Assesment2 =()=> {

    const[value,setValue]= useState(false)
    const[res,setRes]= useState([
        {
            res:null
        }
    ])
    const[age,setAge]= useState([
        {
        byear:"",
        cyear:""

    }])
    const[age1,setAge1]= useState([
        {
        byear:"",
        cyear:""

    }])
    
    function change(e){
       setAge({...age,byear:e.target.value,cyear:e.target.value})
    }

    function result(){
       setRes (age1.cyear - age1.byear)
    }
    console.log(res)


    return(
        <>
        <div style={{backgroundColor: value ? 'darkgrey' : 'white',height:'100vh'}}>
        
        <div>
          <button onClick={()=>setValue(!value)}>Light/Dark</button>
        </div>
        <div className='AgeCalculator'>
           <input onChange={change} type='year' placeholder='Enter your DOB year' /><br/>
           <input onChange={change} type='year' placeholder='Enter the Current year' /><br/>
           <button onClick={result}>Calculate</button>
           {res.res}
           
        </div>
        </div>
        
        </>
    )
}

export default Assesment2