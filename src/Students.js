import React from 'react'
function Students(student) {

  return (
    <>
    
     <div>
      <h2>Student Information</h2>
      <p>Name:{student.name}</p>
      <p>Department:{student.department}</p>
    </div>
    
    </>
  )
}

export default Students;