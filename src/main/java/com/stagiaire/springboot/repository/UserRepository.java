package com.stagiaire.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.stagiaire.springboot.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
