import {React,useState} from 'react'

const Toggle=()=>{

    const[open, setOpen] = useState(false)
    const[name, setName] = useState(
        {name:"Niru"}
    )
    const[dup, setDup] = useState(
         {name:""}
    )

    function change(event){
        setName({name:event.target.value})

    }

    function button(event){
        setDup({...dup,name:name.name})
    }

    console.log(dup)
    console.log(name)

    // const accor= [
    //     {id:1, acc:"accoerion 1", para:"paragraph 1"},
    //     {id:2, acc:"accoerion 2", para:"paragraph 2"}
    // ]

    // function click(id){
    //     setOpen(open === id ? null : id)
    // }


    return(
        <>

           {/* {accor.map((i)=>{
            return(

            <>
               <p onClick={()=>click(i.id)}>{i.acc}</p>
               {open == i.id ? <p>{i.para}</p> : ""}
            
            </>
            )
           })} */}

           <div style={{backgroundColor:open ? 'black' : 'white', height:'100vh'}}>
           <button onClick={()=>setOpen(!open)}>light/dark</button>

           <form>

                 <input onChange={change} type='name' placeholder='Name' name='name'/>
                 <button onClick={button}>Submit</button>

           </form>

           {dup.name}
           {name.name}

           </div>
           
        
        </>
    )
}

export default Toggle