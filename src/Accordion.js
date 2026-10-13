import {React, useState} from 'react'
import './Accordion.css'

const Accordion=()=> {

    const [open, setOpen] = useState(null)
    
    const accor = [
        {id: 1, title : "accordion 1", para : "paragraph 1"},
        {id: 2, title : "accordion 2", para : "paragraph 2"}
    ]

    function handleId(id) {
        setOpen(open === id ? null : id)
    }

    return(

        <>
        
           {/* <p onClick={()=>setOpen1(!open1)} className='head'>Accoridion 1</p>
           {open1 ? <p>This is the Accoridion 1</p> : "" }
        
           <p onClick={()=>setOpen2(!open2)} className='head'>Accoridion 2</p>
           {open2 ? <p>This is the Accoridion 2</p> : "" } */}

           {
            accor.map((res)=> {
                return(
                    <>

                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                    <p className='parag'>{open == res.id ? <p>{res.para}</p> : "" } </p>

                    </>
                )
            })
           }

        </>
    )
}

export default Accordion