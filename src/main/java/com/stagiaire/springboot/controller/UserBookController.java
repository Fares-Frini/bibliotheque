package com.stagiaire.springboot.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stagiaire.springboot.model.Book;
import com.stagiaire.springboot.model.User;
import com.stagiaire.springboot.service.UserService;

@RestController
@RequestMapping("/buy")
public class UserBookController {

	private final UserService userService;
	private final UserController userController;
	private final BookController bookController;
	
	public UserBookController(UserService userService,BookController bookController,UserController userController)
	{
		this.userService = userService;
		this.bookController = bookController;
		this.userController = userController;
	}
	
	@PutMapping("/{id_user}/{id_book}")
	public User buyBook(@PathVariable("id_user") Long id_user,@PathVariable("id_book") Long id_book)
	{
		Optional<User> optionalUser = userController.findUserById(id_user);
		Optional<Book> optionalBook = bookController.findBookById(id_book);
		User user = optionalUser.orElseThrow(() -> new RuntimeException("aucun utilisateur trouvé "));
		Book book = optionalBook.orElseThrow(() -> new RuntimeException("aucun livre trouvé "));
		user.getBooks().add(book);
		return userService.updateUser(user);
	}
	
}
