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

import com.stagiaire.springboot.model.User;
import com.stagiaire.springboot.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	
		private final UserService userService;
		
		public UserController(UserService userService)
		{
			this.userService=userService;
		}
		@GetMapping("/finduser")
		public List<User> findAllUser()
		{
			return userService.findallUsers();
		}
		@GetMapping("/{id}")
		public Optional<User> findUserById(@PathVariable("id") Long id)
		{
			return userService.findById(id);
		}

		@PostMapping
		public User saveUser(@RequestBody User user)
		{
			return userService.saveUser(user);
		}
		@PutMapping
		public User updateUser(@RequestBody User user)
		{
			return userService.updateUser(user);
		}
		@DeleteMapping("/{id}")
		public void deleteUser(@PathVariable("id") Long id)
		{
			userService.deleteUser(id);
		}
}
