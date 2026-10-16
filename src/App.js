import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import Paper from '@mui/material/Paper'; 
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Parent from './Parent'
import EmployeePage from "./EmployeePage";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail'
import UserList from "./UserList";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StudentList from './StudentList';


const App=()=> {

  //    const student = {
  //   name: "Arun",
  //   department: "MERN Stack"
  // }
  //  const employee = {
  //   name: "Priya",
  //   role: "Frontend Developer",
  //   salary: 30000,
  //   skills: ["React", "JavaScript", "CSS"]
  // };

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {setProducts(response.data);})
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const[data,setData] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {setData(response.data);})
       
  },[])

 

  const student = [
    {
      name:'Niranjan',
      email:"niranjan@gmail.com",
      address:'Rasipuram'
    },
    {
      name:'Nandha',
      email:"nandha@gmail.com",
      skills:['python','Mern'],
      address:'Attur'
    },
    {
      name:'Saravana',
      email:"saravana@gmail.com",
      skills:['c','java'],
      address:'Salem'
    }
  ]

  
    return(

      //   <>
      //   <Paper elevation={6} style={{width:"40%",margin:"60px 80px",paddingTop:"20px"}}>
      //   <Box  sx={{bgcolor:"#ede9e9",boxShadow:"3" ,width: 60,height: 60,borderRadius: 30,margin:"10px 121px"}}>
      //   <LockIcon sx={{margin:"17px 17px"}} ></LockIcon>
      //   </Box>

      //   <Typography sx={{padding:"0px 60px"}} color='primary' variant="h5">
      //   Welcome User !!
      // </Typography>
      // <Typography sx={{padding:"0px 116px"}} color='grey' variant="h7">
      //   SIGN UP
      // </Typography>


      //   <div style={{display:"flex",flexDirection:"column",gap:"10px",width:"80%",padding:'30px'}}>
      //   <TextField  helperText="Username is required" label="Username" variant="outlined" onChange={(e)=>console.log(e.target.value)} required/><br/>
      //   <TextField  helperText="Password is Required" type='password' label="Password" variant="outlined" onChange={(e)=>console.log(e.target.value)} required/><br/>
      //   <Button variant="contained">SIGN UP</Button>
      //   </div>

      //   </Paper>
      //   </>

      <>
      
      {/* <Parent student={student}/> */}

       {/* <EmployeePage employee={employee} /> */}
      {/* <div style={{margin:"50px"}}>
       <Badge  badgeContent="5" color="secondary"><MailIcon /></Badge>
      </div> */}

      {/* <div>
      <h1>User Directory</h1>
      <UserList/>
    </div> */}

            {/* <Dashboard products={products} /> */}

      {/* <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>       */}
      
       <StudentList data={data}/>

      </>

    )
}

export default App