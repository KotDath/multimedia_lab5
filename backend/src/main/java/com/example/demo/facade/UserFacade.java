package com.example.demo.facade;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserFacade {

    public UserDTO userToUserDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setEmail(user.getEmail());
        dto.setFirstname(user.getName());
        dto.setLastname(user.getLastname());
        dto.setBio(user.getBio());
        dto.setPassword(user.getPassword());
        dto.setUsername(user.getUsername());
        dto.setId(user.getId());
        return dto;
    }
}
