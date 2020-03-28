import React from "react";

function ButtonOccupation(props) {
  return <button onClick={() => props.sortEmployeeByOccupation(props.occupation)}>Search By Occupation</button>;
};


export default ButtonOccupation; 
