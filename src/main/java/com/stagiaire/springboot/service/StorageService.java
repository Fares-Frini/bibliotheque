package com.stagiaire.springboot.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stagiaire.springboot.model.BookFile;
import com.stagiaire.springboot.repository.StorageRepository;

@Service
public class StorageService {
	
	 @Autowired
	 private StorageRepository repository;

	 public BookFile uploadPdf(MultipartFile file) throws IOException {

	        return repository.save(BookFile.builder()
	                .name(file.getOriginalFilename())
	                .type(file.getContentType())
	                .pdfData(file.getBytes()).build());
	    }
	  //  public byte[] downloadImage(String fileName){
	  //      Optional<ImageData> dbImageData = repository.findByName(fileName);
	   //     byte[] images=ImageUtils.decompressImage(dbImageData.get().getImageData());
	  //      return images;
	  //  }
}
