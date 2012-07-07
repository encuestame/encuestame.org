package org.encuestame.site.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


/**
 * Spring Security Configuration.
 */
@Configuration
@ImportResource("classpath:org/encuestame/site/config/security.xml")
public class SecurityConfig {

    /**
     * Embedded Security configuration (not secure).
     * @author 
     */
    @Configuration
    @Profile("development")
    static class Development {

        @Bean
        public PasswordEncoder passwordEncoder() {
            return NoOpPasswordEncoder.getInstance();
        }

        @Bean
        public TextEncryptor textEncryptor() {
            return Encryptors.noOpText();
        }


    }

    /**
     * Standard security configuration (secure).
     * @author 
     */
    @Configuration
    @Profile("standard")
    static class Standard {

        @Bean
        public PasswordEncoder passwordEncoder() {
            return NoOpPasswordEncoder.getInstance();
        }

        @Bean
        public TextEncryptor textEncryptor() {
            return Encryptors.noOpText();
        }
    }

}