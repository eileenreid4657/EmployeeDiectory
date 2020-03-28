import React from "react";

function ButtonLocation(props) {
  return <button onClick={() => props.sortEmployeeByLocation(props.location)}>Search By Location</button>;
}

export default ButtonLocation; 
