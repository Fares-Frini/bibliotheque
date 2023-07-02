package com.stagiaire.springboot.controller;

 
import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 @Controller
public class AddController {
	
 	
	 
	@GetMapping("/login")
	public String loginUser() {
		return"login";
	}
	@GetMapping("/userManagement")
	public String addUser() {
		return"adminUser";
	}
	@GetMapping("/admin")
	public String adminDash() {
		return"admin";
	}
	@GetMapping("/bookManagement")
	public String bookManagement() {
		return"adminBook.html";
	}
	
	
	/*@PostMapping("/addUser")
	public String userAdd(@ModelAttribute User user,Model model)
	{
		userService.saveUser(user);
		System.out.println(user.toString());
		model.addAttribute("valide","L'utilisateur a été ajouté avec succés ");
		return("adminUser");
	}
	*/
}
