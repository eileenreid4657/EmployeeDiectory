import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ButtonName from "./components/ButtonName";
import ButtonOccupation from "./components/ButtonOccupation";
import ButtonLocation from "./components/ButtonLocation";
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

    const temp = [];

    for(var i=0;i<this.state.employees.length;i++){
      temp.push(this.state.employees[i].occupation);
    }
    
    const employee = temp.sort();
    const employees = [];
    for(let i=0;i<this.state.employees.length;i++){
      for(let j=0;j<employee.length;j++)
      {
        console.log(this.state.employees[j].occupation);
        if(employee[i]===this.state.employees[j].occupation){
            employees.push(this.state.employees[j]);
        }
      }
      
    }
    console.log(employees);
   
    this.setState({ employees });
  };

  sortEmployeeByLocation = location => {

    const temp = [];

    for(var i=0;i<this.state.employees.length;i++){
      temp.push(this.state.employees[i].location);
    }
    
    const employee = temp.sort();
    const employees = [];
    for(let i=0;i<this.state.employees.length;i++){
      for(let j=0;j<employee.length;j++)
      {
        console.log(this.state.employees[j].location);
        if(employee[i]===this.state.employees[j].location){
            employees.push(this.state.employees[j]);
        }
      }
      
    }
    console.log(employees);
   
    this.setState({ employees });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper> 
        <ButtonName searchName={this.searchName}></ButtonName>
        <ButtonOccupation sortEmployeeByOccupation={this.sortEmployeeByOccupation}></ButtonOccupation>
        <ButtonLocation sortEmployeeByLocation={this.sortEmployeeByLocation}></ButtonLocation> 
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
        ))};
      </Wrapper>
    );
  };
}

export default App;
