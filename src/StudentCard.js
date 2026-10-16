import React from 'react'
import './StudentCard.css'
import Paper from '@mui/material/Paper';


const StudentCard = ({data}) => {
    console.log(data)
  return (
    <>
    <div className='box'>


        <form>
            <h3>Welcome!!</h3>
            <input type='text' placeholder='Name' required/>
            <input type='age' placeholder='Age'required/>

            <button>Sign Up</button>
             
        </form>

        <Paper elevation={5} />
        <Paper elevation={3} />
      
    </div>

    </>
  )
}

export default StudentCard
