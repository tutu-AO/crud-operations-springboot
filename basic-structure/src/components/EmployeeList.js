import React, { Component } from 'react';
import Nav from "./Nav";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.state = {employees:[]};
        this.remove = this.remove.bind(this);
//        this.forceUpdate();
    }

    componentDidMount(){
        fetch('/employees')
        .then(response => response.json())
        .then(data => this.setState({employees:data}))
    }

    async remove(id){
        await fetch(`/employees/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(() => {
            let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
            this.setState({employees:updatedEmployees});
        });

    }

    render(){
        const {employees, isLoading} = this.state;
        if(isLoading){ return <p>Loading...</p>; }

        const empList = employees.map(employee => {
            return <tr key={employee.employeeId}>
                <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" outline tag={Link} to={"/employee/" + employee.employeeId}>Edit</Button>
                        <Button size="sm" outline color="danger" onClick={() => this.remove(employee.employeeId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Nav/>
                <Container fluid="xl">
                    <div className="float-end">
                        <Button outline tag={Link} to="/employee/new">Add Employee</Button>
                    </div>
                    <h3>Employees</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">FirstName</th>
                            <th width="20%">LastName</th>
                            <th width="30%">Email</th>
                            <th width="25%">Role</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {empList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }

}
export default EmployeeList;