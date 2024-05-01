import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import React, {useEffect, useState} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Nav from "./Nav";

function MainEdit(){
    const formState = {
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    };

    const[employees, setEmployees] = useState(formState);
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        if(id !== 'new'){
            fetch(`api/${id}`)
            .then(response => response.json())
            .then(data => setEmployees(data))
        }
    }, [id, setEmployees]);

     const handleChange = (event) => {
        const { name, value } = event.target

        setEmployees({ ...employees, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`/api${employees.employeeId ? `/${employees.employeeId}` : ''}`, {
            method: (employees.employeeId) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employees),
        });
        setEmployees(formState);
        history.push('/');
    }
    const title = <h2>{employees.employeeId ? 'Edit Employee' : 'Add Employee'}</h2>;

    return (<div>
          <Nav/>
          <Container>
            {title}
            <Form onSubmit={handleSubmit}>
              <div className="row">
                  <FormGroup className="col-md-4 mb-3">
                    <Label for="firstName">FirstName</Label>
                    <Input type="text" name="firstName" id="firstName" value={employees.firstName || ''}
                           onChange={handleChange} autoComplete="firstName"/>
                  </FormGroup>
                  <FormGroup className="col-md-4 mb-3">
                    <Label for="lastName">LastName</Label>
                    <Input type="text" name="lastName" id="lastName" value={employees.lastName || ''}
                           onChange={handleChange} autoComplete="lastName"/>
                  </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col-md-4 mb-3">
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" value={employees.email || ''}
                           onChange={handleChange} autoComplete="email"/>
                </FormGroup>
                <FormGroup className="col-md-4 mb-3">
                    <Label for="role">Role</Label>
                    <Input type="text" name="role" id="role" value={employees.role || ''}
                         onChange={handleChange} autoComplete="role"/>
                </FormGroup>
              </div>
              <FormGroup>
                <Button outline color="primary" type="submit">Save</Button>{' '}
                <Button outline color="secondary" tag={Link} to="/">Cancel</Button>
              </FormGroup>
            </Form>
          </Container>
        </div>
      )
};

export default MainEdit;

