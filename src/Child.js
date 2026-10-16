

import React from 'react'
import Students from "./Students";

function Child(student) {
  return(
    
    <>
    <Students student={student} />
    
    </> 
  
)
}

export default Child;