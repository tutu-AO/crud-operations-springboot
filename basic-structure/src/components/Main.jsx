import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import React, {useEffect, useState, useReducer} from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
// import ModalEdit from "./ModalEdit";

function Main(){
    const[employees, setEmployees] = useState([]);
    const[reducerVal, forceUpdate] = useReducer(x => x + 1, 0);
//     const [modal, setModal] = useState();

    useEffect(() => {
        fetch('/employees')
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error fetching user: ', error));
    }, [reducerVal]);

    //for the delete button
    const remove = async (id) => {
        await fetch(`/employees/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(() => {
                forceUpdate();
        });
    }

//     const toggle = () => { setModal(!modal) }

    //populating all the employees into a table
    const empList = employees.map(employee => {
        return <tr key={employee.employeeId}>
            <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.role}</td>
            <td>
                <ButtonGroup>
{/*                     <Button size="sm" outline onClick={toggle}>Edit</Button> */}
                    <Button size="sm" outline tag={Link} to={"/employees/" + employee.employeeId}>Edit</Button>
                    <Button size="sm" outline color="danger" onClick={() => remove(employee.employeeId)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });
    return (
        <div>
            <Nav/>
            <Container fluid="xl">
                <div className="float-end">
                    <Button outline tag={Link} to="/employees/new">Add Employee</Button>
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
{/*                     {modal && <ModalEdit modalIsOpen={modal} />} */}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
export default Main;
