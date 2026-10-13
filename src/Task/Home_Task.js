import React from "react"

const Home_Task =()=>{

    // const data =[
    //     {
    //         id: 1,
    //         name : "Niranjan",
    //         user_name:"Niranjan_005",
    //         role: "Frontend Developer",
    //         contact:"9876543210",
    //         email:"niranjan@gmail.com",
    //         skills:["Java","Python","HTML5"],
    //         location:"Rasipuiram",
    //         about:"",
    //         projects:[ 
    //             {  
    //               title:"Task Management System",
    //               description:"organize the data"
    //             },
    //             {  
    //               title:"Student Management System",
    //               description:"manages students data"
    //             },
    //             {  
    //               title:"Shopping App",
    //               description:"online shopping website"
    //             }
    //          ],
    //         social:[ {

    //             github:"https://github.com/Niranjan-005",
    //             linkedin:"https://www.linkedin.com/in/niranjan-b"

    //               } ],
    //         accordion:[
    //             {
    //                 title:"Accordion 1",
    //                 para:"this is accordion 1"
    //             }
    //         ]

    //     }
    // ]

    

    const home={
        color:"lightGreen",
        backgroundColor:"#212529",
        height:"88vh",
        paddingTop:"1px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        paddingLeft:"300px",
        fontSize:"30px"
    }
    const role={
        fontSize:"40px"
    }

    return(
        <>
        <div style={home}>
        <h1>Hi, I'm Niranjan.</h1>
        <div style={role}><h1>Frontend <br/>Developer</h1></div>
        </div>
        
        </>
    )
}

export default Home_Task