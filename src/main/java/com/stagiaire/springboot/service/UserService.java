package com.stagiaire.springboot.service;
import java.util.List;
import java.util.Optional;

import com.stagiaire.springboot.model.User;

public interface UserService {

		List<User> findallUsers();
		Optional<User> findById(Long id);
		User updateUser(User user);
		void deleteUser(Long id);
		User saveUser(User user);
}
