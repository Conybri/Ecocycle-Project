package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.example.demo.model", "com.example.usuarios.model"})
@EnableJpaRepositories(basePackages = {"com.example.demo.repository", "com.example.usuarios.repository"})
@ComponentScan(basePackages = {"com.example.demo", "com.example.usuarios"})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}