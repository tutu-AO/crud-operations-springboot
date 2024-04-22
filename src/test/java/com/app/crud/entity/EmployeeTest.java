package com.app.crud.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class EmployeeTest {

    private Employee employee = new Employee("Jane", "Doe", "janedoe@gmail.com", "Engineer");

    @Test
    public void NoArgsConstructorTest(){
        Employee employee = new Employee();
        employee.setEmployeeId((long) 1);
        employee.setFirstName("John");
        employee.setLastName("Doe");
        employee.setEmail("johndoe@gmail.com");
        employee.setRole("Engineer");

        assertEquals("Engineer", employee.getRole());
    }

    @Test
    public void allArgsConstructorTest(){
        assertEquals("Jane", employee.getFirstName());
        assertEquals("Doe", employee.getLastName());
        assertEquals("janedoe@gmail.com", employee.getEmail());
        assertEquals("Engineer", employee.getRole());
    }

    @Test
    public void toStringTest(){
        String expected = "Employee{employeeId=null, firstName='Jane', lastName='Doe', email='janedoe@gmail.com', role='Engineer'}";
        assertEquals(expected, employee.toString());
    }
}
