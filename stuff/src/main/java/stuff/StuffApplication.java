package stuff;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableJpaRepositories("stuff.repository")
@EnableTransactionManagement
public class StuffApplication {
    public static void main(String[] args) {
        SpringApplication.run(StuffApplication.class, args);
    }
}