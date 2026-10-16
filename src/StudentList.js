import React from 'react'
import StudentCard from './StudentCard'
const StudentList = ({data}) => {

    console.log(data)
  return (
    <div>
      <StudentCard data={data}/>
    </div>
  )
}

export default StudentList
