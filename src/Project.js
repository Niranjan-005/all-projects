import {React,useState} from 'react'
import './Project.css'

const Project =()=> {

    const [form,setForm] = useState(
        {
        id:null,
        name:"",
        age:null,
        department:"",
        marks:null
    }
    )

    const [value,setValue] = useState(
        {
        id:1,
        name:"",
        age:"",
        department:"",
        marks:"90"
    }
    )

    function change(event){  //name
       setValue({...value,
        [event.target.name]:event.target.value})
       
    }

    console.log()

    // function chage(event){  //age
    //     setValue({...value, age:event.target.value})
    // }

    // function chdept(event){  //dept
    //     setValue({...value, department:event.target.value})
    // }

    function submit(event){   //button
       event.preventDefault();
       setForm({...form, name:value.name, age:value.age, department:value.department})
       
    }

    

       

    return(
        <>
    
          {form.name}
          {form.age}
          {form.department}
          

          <form>

            <label> Name:</label><input onChange={change} name={"name"} placeholder='Enter your name'/><br/>
            <label> Age:</label><input onChange={change} name={"age"} placeholder='Enter your age'/><br/>
            <label> Dept:</label><input onChange={change} name={"department"} placeholder='Enter your dept'/><br/>

              <button type="submit" onClick={submit}>submit</button>

          </form>
         

          

        </>
    )
}
export default Project