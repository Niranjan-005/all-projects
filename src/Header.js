import {React,useState} from 'react'

function Header(){
    const [value ,setValue] = useState(0)
   
     
    
    
    return(

        <>
      
         {value}<br/>
         <button onClick={()=>setValue(value+1) }>increment</button>
         <button onClick={()=>setValue(value-1) }>decrement</button>

        
       

        
        </>
    )
}
export default Header