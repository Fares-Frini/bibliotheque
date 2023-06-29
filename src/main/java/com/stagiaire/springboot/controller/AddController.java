package com.stagiaire.springboot.controller;
import com.stagiaire.springboot.model.*;
import com.stagiaire.springboot.service.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
@Controller
public class AddController {
	
	private final UserService userService;
	
	public AddController(UserService userService)
	{
		this.userService=userService;
	}
	@GetMapping("/")
	public String loginUser() {
		return"login";
	}
	@GetMapping("/addUser")
	public String addUser() {
		return"adminUser";
	}
	@GetMapping("/admin")
	public String adminDash() {
		return"admin";
	}
	
	
	@PostMapping("/addUser")
	public String userAdd(@ModelAttribute User user,Model model)
	{
		userService.saveUser(user);
		System.out.println(user.toString());
		model.addAttribute("valide","L'utilisateur a été ajouté avec succés ");
		return("adminUser");
	}
}
