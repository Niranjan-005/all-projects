import {React,useState,useEffect} from 'react'
import axios from 'axios'

const GetData=()=>{

    const[data,setData]=useState([])

    useEffect(()=>{
       axios.get("https://dummyjson.com/c/d066-8276-439b-87c8")
        .then((res)=>{setData(res.data)})
    },[] )

console.log(data)
    
    return(
        <>
        <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                    </tr>
                </thead>
        

         {data.map((i)=>{
            return(
                <>
                   
                 <tbody>
                    <tr>
                    <td>{i.Name}</td>
                    <td>{i.Email}</td>
                    <td>{i.ID}</td>
                    </tr>
                </tbody>
                </>
                
            )
        })} 
        </table>
        
        
        </>
    )
}

export default GetData