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
    console.log("Test");
    this.setState({ employees });
  };
  searchName = name => {

    const temp = [];

    for(var i=0;i<this.state.employees.length;i++){
      temp.push(this.state.employees[i].name);
    }
    
    const employee = temp.sort();
    const employees = [];
    for(let i=0;i<this.state.employees.length;i++){
      for(let j=0;j<employee.length;j++)
      {
        console.log(this.state.employees[j].name);
        if(employee[i]===this.state.employees[j].name){
            employees.push(this.state.employees[j]);
        }
      }
      
    }
    console.log(employees);
   
    this.setState({ employees });
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
