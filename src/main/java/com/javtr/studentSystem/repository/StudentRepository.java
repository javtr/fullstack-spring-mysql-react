package com.javtr.studentSystem.repository;

import com.javtr.studentSystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer> {

}
