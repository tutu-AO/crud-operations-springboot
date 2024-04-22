//package com.app.crud.entity;
//
//
//import com.app.crud.repository.EmployeeRepository;
//import com.app.crud.service.SequenceGeneratorService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
//
//@Configuration
//@EnableMongoRepositories
//public class LoadDatabase {
//    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
//
//    @Autowired
//    private SequenceGeneratorService sequenceGenerator;
//    @Autowired
//    private EmployeeRepository repository;
//    @Bean
//    CommandLineRunner run(){
//        Employee emp = new Employee();
//        emp.setEmployeeId(sequenceGenerator.generateSequence(Employee.SEQUENCE_NAME));
//        emp.setFirstName("John");
//        emp.setLastName("Doe");
//        emp.setEmail("johndoe@gmail.com");
//        emp.setRole("Engineer");
//
//        Employee emp1 = new Employee();
//        emp1.setEmployeeId(sequenceGenerator.generateSequence(Employee.SEQUENCE_NAME));
//        emp1.setFirstName("Jane");
//        emp1.setLastName("Doe");
//        emp1.setEmail("janedoe@gmail.com");
//        emp1.setRole("Engineer");
//        return args -> {
//            log.info("Preloading " + repository.save(emp));
//            log.info("Preloading " + repository.save(emp1));
//        };
//    }
//}
