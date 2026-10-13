import React from 'react';

import './App.css';

import Header from './Header'
import ObjectEx from './ObjectEx'
import Project from './Project'
import Accordion from './Accordion';
import ModalBox from './ModalBox';
import Student from './Student';
import Toggle from './Toggle';
import NewProject from './NewProject';
import ErrorHandling from './ErrorHandling';
import Product from './Product'
import Home from './Home';
import Tshirt from './Tshirt'
import Admission from './Admission'
import {Routes,Route,Link} from 'react-router-dom'
import Home_Task from './Task/Home_Task';
import Login_Task from './Task/Login_Task';
import About_Task from './Task/About_Task'
import Projects_Task from './Task/Projects_Task'
import Skills_Task from './Task/Skills_Task'
import Contact_Task from './Task/Contact_Task'
import Accordion_Task from './Task/Accordion_Task'
import Counter from './Counter';
import GetData from './GetData';
import Assesment2 from './Assesment2';
function App() {

  const productObj=[
          {
              name:"puma",
              price:"2000",
              strikeprice:"3000"
          },
          {
              name:"addidas",
              price:"3000",
              strikeprice:"4000"
          },
          {
              name:"nike",
              price:"4000",
              strikeprice:"5000"
          }
  
      ]

      const tshirtObj=[
          {
              name:"Tees-Black",
              price:"200",
              strikeprice:"500",
              image:"tb"
          },
          {
              name:"Tees-White",
              price:"300",
              strikeprice:"600",
              image:"tw"
          },
          {
              name:"Tees-Brown",
              price:"400",
              strikeprice:"500",
              image:"tbr"  
          }
  
      ]
      

  return (
   <>
   
   <div>
      {/* <Project/> */}
    {/* <Accordion/> */}
    {/* <ModalBox/> */}
    {/* <Student/> */}
    {/* <Toggle/> */}
    {/* <NewProject/> */}
    {/* <ErrorHandling data={obj}/> */}
    {/* <Product productObj={productObj}/> */}
    
    

    {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product productObj={productObj}/>}/>
        <Route path="/tshirts" element={<Tshirt tshirtObj={tshirtObj}/>}/>
        <Route path="/admission" element={<Admission/>}/>
    </Routes>
    

    <Link to='/'>Home</Link>
    <Link to='/product'>Product</Link>
    <Link to='/tshirts'>T-Shirts</Link>
    <Link to='/admission'>admission</Link> */}
    
    <div className='links'>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/skills'>Skills</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/accordion'>Accordion</Link>
    <Link to='/login'>Login</Link>
    </div>

    <Routes>
        <Route path="/" element={<Home_Task/>}/>
        <Route path="/login" element={<Login_Task/>}/>
        <Route path="/about" element={<About_Task/>}/>
        <Route path="/projects" element={<Projects_Task/>}/>
        <Route path="/skills" element={<Skills_Task/>}/>
        <Route path="/contact" element={<Contact_Task/>}/>
        <Route path="/accordion" element={<Accordion_Task/>}/>
        
    </Routes>

    {/* <Counter/> */}
    {/* <GetData/> */}

    {/* <Assesment2/> */}
    {/* <Project/> */}
    
    

    
    
   </div>
   
   </>

  );
}

export default App;
