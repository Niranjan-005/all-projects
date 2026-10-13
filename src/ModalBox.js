import {React, useState} from 'react'
import './ModalBox.css'
import img from './asset/lap-img2.png'
const ModalBox=()=> {

    const[modal, setModal] = useState(false)
    return(
        <>
    <div className='box'>
        <div className='m'>ModalBox</div>

        {modal ? <div className='modal'>
            <span>Are you sure, Do you want to continue</span><br/>
            <button onClick={()=>setModal(false)}>OK</button>
        </div> : "" }  

        <button onClick={()=>setModal(true)}>Confirm</button> 

        
        <div className='modal-box'>
            <button id="close-btn">x</button>
            <img src={img} alt="Image"/>
            <h1>Secure all your devices</h1>
            <p>Ensure your mobile phone, laptop and other <br/>devices are protected online.</p>
            <button id="purchase-btn">Purchase premium</button>
        </div>


    </div>    
        </>
    )
}

export default ModalBox