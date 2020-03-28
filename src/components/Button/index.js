import React from "react";

function Button(props) {
  return <button onClick={() => props.searchName(props.name)}>Sort By Name</button>;
  
};
// function Button(props) {
//   return <button onClick={() => props.sortEmployeeByLocation(props.location)}>Search By Location</button>;
// }

export default Button; 
