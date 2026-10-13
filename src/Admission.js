import React from 'react'
import './Admission.css'
import image from './asset/mecbackground.png'

const Admission = () => {
  return (
    <div className='background'>

        <div ><h1 style={{color:'white',fontSize:"50px",padding:'200px 200px'}}>LEARN & <br/> DISCOVER</h1></div>

        <div  className='container'>
        
        <div>
        <h2 style={{color:"#31339c"}}>ONLINE ADMISSION ENQUERY - 2026</h2>
        </div>
        <div>
        <form>

        <div className='formcontainer' >
        
        <div style={{display:"flex",direction:"row",gap:"135px"}}>
        <h5>Name:</h5>
        <h5>Father Name:</h5>
        </div>

        <div style={{display:"flex",direction:"row",gap:"10px"}}>
        <input type="name" placeholder="Name" name="name"/>
        <input type="name" placeholder="Father Name" name="name"/>
        </div>

        <div style={{display:"flex",direction:"row",gap:"135px"}}>
        <h5>Gender:</h5>
        </div>
        <div>
        <select label="Gender" name="gender">
            <option value="selectgender">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        </div>

        <div style={{display:"flex",direction:"row",gap:"40px"}}>
        <h5>Register Number<br/> [+2 / Diploma / UG]:</h5>
        <h5>Email:</h5>
        </div>
        
        <div style={{display:"flex",direction:"row",gap:"10px"}}>
        <input type="registerno" placeholder='Register Number' name="register"/>
        <input type="email" placeholder="Email Id" name="email"/>
        </div>

        <div style={{display:"flex",direction:"row",gap:"67px"}}>
        <h5>Mobile Number:</h5>
        <h5>Parent Mobile Number:</h5>
        </div>

        <div style={{display:"flex",direction:"row",gap:"10px"}}>
        <input type="number" placeholder="Mobile Number" name="mobile"/>
        <input type="number" placeholder="Mobile Number" name="mobile"/>
        </div>

        <div style={{display:"flex",direction:"row",gap:"100px"}}>
        <h5>Community:</h5>
        <h5>First Graduate:</h5>
        </div>

        <div style={{display:"flex",direction:"row",gap:"130px"}}>
        <select label="Community" name="community">
            <option value="selectgender">Select</option>
            <option value="oc">OC</option>
            <option value="bc">BC</option>
            <option value="bcm">BCM</option>
            <option value="mbc">MBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="sca">SCA</option>
            <option value="other">Other</option>
        </select>
        <select label="Graduate" name="graduate">
            <option value="select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
        </div>

        <div style={{display:"flex",direction:"row",gap:"135px"}}>
        <h5>Address:</h5>
        <h5>City / Town:</h5>
        </div>

        <div style={{display:"flex",direction:"row",gap:"10px"}}>
        <input type="address" placeholder="Address" name="address"/>
        <input type="city" placeholder="City/ Town" name="city"/>
        </div>

        <div style={{display:"flex",direction:"row",gap:"135px"}}>
        <h5>District:</h5>
        <h5>State:</h5>
        </div>

        <div style={{display:"flex",direction:"row",gap:"10px"}}>
        <input type="district" placeholder="District" name="district"/>
        <select label="State" name="state">
            <option value="selectgender">Andhra Pradesh</option>
            <option value="oc">Arunachal Pradesh</option>
            <option value="bc">Bihar</option>
            <option value="bcm">Chhattisgarh</option>
            <option value="mbc">Gujarat</option>
            <option value="sc">Kerala</option>
            <option value="st">Sikkim</option>
            <option value="sca">Tamil Nadu</option>
            <option value="other">Uttar Pradesh</option>
        </select>
        </div>

        <div style={{display:"flex",direction:"row",gap:"135px"}}>
        <h5>Course:</h5>
        </div>

        <div>
        <select label="Courses" name="courses">
            <option value="select">Select</option>
            <option value="becse">B.E - Computer Science and Engineering</option>
            <option value="beeee">B.E - Electrical and Electronics Engineering</option>
            <option value="beece">B.E - Electronics and Communication Engineering</option>
            <option value="bece">B.E - Civil Engineering</option>
            <option value="bene">B.E - Mechanical Engineering</option>
            <option value="btechit">B.Tech - Information Technology</option>
            <option value="btechaids">B.Tech - Artificial Intelligence and Data Science</option>
            <option value="btechaiml">B.Tech - Artificial Intelligence and Machine Learning</option>
            <option value="btechcsbs">B.Tech - Computer Science and Business Systems</option>
        </select>
        </div>

        <div style={{display:"flex",direction:"row",gap:"135px"}}>
        <h5>Referred by:</h5>
        </div>

        <div>
        <input type="reference" placeholder="Name & Mobile No." name="reference"/>
        </div>

        <button type="submit">Apply</button>



        </div>

        </form>
        </div>

        

      </div>

    </div>
  )
}

export default Admission