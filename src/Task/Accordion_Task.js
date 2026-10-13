import {React,useState} from "react"

const Accordion_Task =()=>{

    const [open, setOpen] = useState(null)

     const accor = [
        {id: 1, title : "What is your Education ?", para : "I am B.tech IT Student at Muthayammal Engineering College."},
        {id: 2, title : "What are the Skills do you have ?", para : "Java, Python, Javascript, React, HTML, CSS."}
    ]
     function handleId(id) {
        setOpen(open === id ? null : id)
    }

    return(
        <>
        <h1>Accordion</h1>
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

export default Accordion_Task