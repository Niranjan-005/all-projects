import EmployeeSkills from "./EmployeeSkills";

function EmployeeCard({ employee }) {

const card={

    backgroundColor:"#ade8f4",
    width:"40%",
    display:"flex",
    flexDirection:"column",
    borderRadius:"20px",
    margin:"50px 100px",
    padding:"10px 50px"
}

  return (
    <div style={{backgroundColor:"#fefae0",height:"95vh",padding:"20px"}} >
    <div style={card}>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
      </div>
      <EmployeeSkills skills={employee.skills} />
      </div>
    
  );
}

export default EmployeeCard;