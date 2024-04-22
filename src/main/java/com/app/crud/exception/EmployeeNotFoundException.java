package com.app.crud.exception;

public class EmployeeNotFoundException extends RuntimeException {
    public EmployeeNotFoundException(Long id){
        super("employee not found " + id);
    }
}
