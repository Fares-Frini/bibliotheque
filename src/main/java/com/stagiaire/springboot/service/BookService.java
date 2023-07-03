package com.stagiaire.springboot.service;

import java.util.List;
import java.util.Optional;

import com.stagiaire.springboot.model.Book;

public interface BookService {

	List<Book> findallBooks();
	Optional<Book> findById(Long id);
	Book updateBook(Book book);
	void deleteBook(Long id);
	Book saveBook(Book book);
	
 }
