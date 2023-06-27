package com.stagiaire.springboot.controller;
import com.stagiaire.springboot.model.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
@Controller
public class AddController {

	@GetMapping("/")
	public String adminUser() {
		return"adminUser";
	} 
	public String login() {
		return"login";
	}
	public String admin() {
		return"admin";
	}
	
	
	@PostMapping("/addUser")
	
	public String userLogin(@ModelAttribute User user,Model model)
	{
		System.out.println(user.toString());
		model.addAttribute("valide","L'utilisateur a été ajouté avec succés ");
		return("adminUser");
	}
}
