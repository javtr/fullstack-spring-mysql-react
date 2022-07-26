package com.javtr.studentSystem.controller;

import com.javtr.studentSystem.model.Student;
import com.javtr.studentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){

        studentService.saveStudent(student);

        return "new student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAll(){

        return studentService.getAllStudents();

    }


}

