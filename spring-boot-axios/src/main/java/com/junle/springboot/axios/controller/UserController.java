package com.junle.springboot.axios.controller;

import com.junle.springboot.axios.domain.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class UserController {

    @GetMapping(value = "/user")
    public User user() {
        User user = new User();
        user.setUsername("小王");

        return user;
    }
}
