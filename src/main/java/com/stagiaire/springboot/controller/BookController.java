package com.stagiaire.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stagiaire.springboot.model.Book;
import com.stagiaire.springboot.service.BookService;

@RestController
@RequestMapping("/book")
public class BookController {

	private final BookService bookService;
	
	public BookController(BookService bookService)
	{
		this.bookService=bookService;
	}
	@GetMapping("/findbook")
	public List<Book> findAllBook()
	{
		return bookService.findallBooks();
	}
	@GetMapping("/{id}")
	public Optional<Book> findBookById(@PathVariable("id") Long id)
	{
		return bookService.findById(id);
	}
	@PostMapping
	public Book saveBook(@RequestBody Book book)
	{
		return bookService.updateBook(book);
	}
	@PutMapping
	public Book updateBook(@RequestBody Book book)
	{
		return bookService.updateBook(book);
	}
	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable("id") Long id)
	{
		bookService.deleteBook(id);
	}
}
