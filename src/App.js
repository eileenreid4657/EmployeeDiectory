import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Button from "./components/Button";
import employees from "./employees.json";

class App extends Component {
  
  state = {
    employees
  };

  removeEmployee = id => {
    
    const employees = this.state.employees.filter(employee => employee.id !== id);
  
    this.setState({ employees });
  };
  searchName = name => {
    
    const employee = this.state.employees.sort();
    console.log(employee);
   
    this.setState({ employee });
  };
  sortEmployeeByOccupation = occupation => {
    
    const employees = this.state.employees.filter(employee => employee.occupation);
    
    this.setState({ employees });
  };
  sortEmployeeByLocation = location => {
    
    const employees = this.state.employees.filter(employee => employee.location);

    this.setState({ employees });
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper> 
        <Button searchName={this.searchName}></Button> 
        <Title>Employee List</Title>
        
        {this.state.employees.sort(this.state.employees.name).map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            phone = {employee.phone}
            email = {employee.email}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
