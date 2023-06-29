package com.stagiaire.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stagiaire.springboot.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
