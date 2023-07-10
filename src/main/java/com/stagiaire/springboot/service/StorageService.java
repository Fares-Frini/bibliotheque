package com.stagiaire.springboot.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stagiaire.springboot.model.BookFile;
import com.stagiaire.springboot.repository.StorageRepository;
import com.stagiaire.springboot.util.PdfUtils;

@Service
public class StorageService {
	
	 @Autowired
	 private StorageRepository repository;

	 public BookFile uploadPdf(MultipartFile file) throws IOException {

		 return repository.save(BookFile.builder()
			               .name(file.getOriginalFilename())
			               .type(file.getContentType())
			               .pdfData(PdfUtils.compressePDF(file.getBytes())).build());

	    }
	   public byte[] downloadPdf(Long id){
	       Optional<BookFile> dbPdfData = repository.findById(id);
	        byte[] pdf=PdfUtils.decompressPdf(dbPdfData.get().getPdfData())	;
	       return pdf;
	    }
}
