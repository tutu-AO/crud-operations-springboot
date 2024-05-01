package com.app.crud.controller;

import com.app.crud.entity.Employee;
import com.app.crud.exception.EmployeeNotFoundException;
import com.app.crud.repository.EmployeeRepository;
import com.app.crud.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private SequenceGeneratorService sequenceGenerator;
    @Autowired
    private EmployeeRepository employeeRepository;
    @GetMapping
    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }
    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
    }
    @PostMapping
    public List<Employee> addEmployee(@RequestBody Employee employee){
        employee.setEmployeeId(sequenceGenerator.generateSequence(Employee.SEQUENCE_NAME));
        employeeRepository.save(employee);
        return employeeRepository.findAll();
    }
    @PutMapping("/{id}")
    public Employee updateEmployee(@RequestBody Employee theEmployee, @PathVariable Long id){
        return employeeRepository.findById(id).map(
                employee -> {
                    employee.setFirstName(theEmployee.getFirstName());
                    employee.setLastName(theEmployee.getLastName());
                    employee.setEmail(theEmployee.getEmail());
                    employee.setRole(theEmployee.getRole());
                    return employeeRepository.save(employee);
                }).orElseGet(() -> {
                    theEmployee.setEmployeeId(id);
                    return employeeRepository.save(theEmployee);
        });
    }
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeRepository.deleteById(id);
    }
}
