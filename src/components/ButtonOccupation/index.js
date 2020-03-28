import React from "react";

function ButtonOccupation(props) {
  return <button onClick={() => props.sortEmployeeByOccupation(props.occupation)}>Search By Occupation</button>;
};
// function Button(props) {
//   return <button onClick={() => props.sortEmployeeByLocation(props.location)}>Search By Location</button>;
// }

export default ButtonOccupation; 
