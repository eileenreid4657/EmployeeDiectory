import React from "react";

function Button(props) {
  return <button onClick={() => props.searchName(props.name)}>Search By Name</button>;

}

export default Button;