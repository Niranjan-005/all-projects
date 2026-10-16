import Child from "./Child";

function Parent({student}) {

  return( 
  <>
  
  <Child student={student} />;
  </>
  )
}

export default Parent;