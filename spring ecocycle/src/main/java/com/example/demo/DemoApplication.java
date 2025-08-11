package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Clase principal de la aplicación Spring Boot para EcoCycle.
 * Esta clase inicia la aplicación y configura el escaneo de componentes,
 * entidades JPA y repositorios para los módulos 'demo' y 'usuarios'.
 */
@SpringBootApplication
@EntityScan(basePackages = {"com.example.demo.model", "com.example.usuarios.model"}) // Escanea entidades JPA en estos paquetes
@EnableJpaRepositories(basePackages = {"com.example.demo.repository", "com.example.usuarios.repository"}) // Habilita repositorios Spring Data JPA
@ComponentScan(basePackages = {"com.example.demo", "com.example.usuarios", "com.example.security"}) // Escanea componentes Spring en estos paquetes
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}