import React from "react";

function ButtonName(props) {
  return <button onClick={() => props.searchName(props.name)}>Sort By Name</button>;
  
};


export default ButtonName; 
