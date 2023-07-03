package com.stagiaire.springboot.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.stagiaire.springboot.model.Book;
import com.stagiaire.springboot.repository.BookRepository;
import com.stagiaire.springboot.service.BookService;
@Service
public class BookServiceImpl implements BookService{

	private final BookRepository bookRepository;
	
	public BookServiceImpl(BookRepository bookRepository)
	{
		this.bookRepository=bookRepository;
	}
	@Override
	public List<Book> findallBooks() {
		return bookRepository.findAll();
	}

	@Override
	public Optional<Book> findById(Long id) {
		return bookRepository.findById(id);
	}

	@Override
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}

	@Override
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	
}
