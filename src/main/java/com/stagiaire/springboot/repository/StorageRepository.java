package com.stagiaire.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stagiaire.springboot.model.BookFile;

public interface StorageRepository extends JpaRepository<BookFile, Long> {

	Optional<BookFile> findById(Long id);
}
