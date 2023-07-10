package com.stagiaire.springboot.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.stagiaire.springboot.model.BookFile;
import com.stagiaire.springboot.service.StorageService;

@SpringBootApplication
@RestController
@RequestMapping("/upload")
public class DataBookController {

	@Autowired
	private StorageService storageService;
	

	@PostMapping
	public BookFile uploadPdf(@RequestParam("pdf")MultipartFile file)throws IOException
	{
		return storageService.uploadPdf(file);
	}
	
	
}
