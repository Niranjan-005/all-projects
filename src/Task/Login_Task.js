import React from "react"
import './Login_Task.css'

const Login_Task =()=>{
    return(
        <>
        <div className="login">

        

        <form>
            <h1>Login</h1>
            <input type="email" placeholder="Enter your email" name="email"/>
            <input type="password" placeholder="Enter ypur password" name="password"/>
            <p>forgot password ?</p>
            <button type="submit">Login</button>

        </form>

        </div>
        
        </>
    )
}

export default Login_Task