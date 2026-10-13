import {React,useState} from 'react'

const ErrorHandling=({data})=>{

    console.log(data)

    const[value,setValue] = useState(
        {
            name:"",
            email:"",
            mobile:""
        }
    )

    const [error, setError] = useState(
        {
            nameError:"",
            emailError:"",
            mobileError:""
        }
    )

    function change(event){
        setValue(

           { ...value,
            [event.target.name]: event.target.value
           }
        )

    }

    function handleSubmit(event){
      
        event.preventDefault();

        if(value.name == "")
            setError({
              ...error,
              nameError:"field is required"
            })
        else if(value.name.length < 3)
            setError({
              ...error,
              nameError:"characters must contain more than 3"
            })
            

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' name='name' onChange={change}/><br/>
        <span style={{color:'red'}}>{error.nameError}</span><br/>
        <input type='email' placeholder='Email' name='email' onChange={change}/><br/>
        <input type='mobile' placeholder='Mobile' name='mobile' onChange={change}/><br/>
        <button type='submit'>Submit</button>
        </form>

        </>
    )
}

export default ErrorHandling