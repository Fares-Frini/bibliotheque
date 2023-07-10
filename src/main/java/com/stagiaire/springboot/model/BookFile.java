package com.stagiaire.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name= "BookData")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookFile {
		
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id ;
	private String name;
    private String type;
	
	@Lob
	@Column(name= "fileDate",length = 91443665)
	private byte[] pdfData;
	}
