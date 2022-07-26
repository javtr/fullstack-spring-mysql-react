package com.javtr.studentSystem.service;
import com.javtr.studentSystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudents();

}
