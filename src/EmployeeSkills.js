function EmployeeSkills({ skills }) {

const skill={

    backgroundColor:"#ade8f4",
    width:"40%",
    display:"flex",
    flexDirection:"column",
    borderRadius:"20px",
    margin:"50px 100px",
    padding:"10px 50px",
    
}

  return (
    <div style={skill}>
      <h3>Skills</h3>
      {skills.map((skill) => (
        <p>{skill}</p>
      ))}
    </div>
  );
}

export default EmployeeSkills;