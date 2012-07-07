package org.encuestame.site.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;

/**
 * Configuration for application @Components such as @Services, @Repositories, and @Controllers.
 * Loads externalized property values required to configure the various application properties.
 * Not much else here, as we rely on @Component scanning in conjunction with @Inject by-type autowiring.
 */
@Configuration
@ComponentScan(basePackages="org.encuestame.site")
public class ComponentConfig {

    /**
     * Properties to support the 'embedded' mode of operation.
     */
    @Configuration
    @Profile("development")
    @PropertySource("classpath:org/encuestame/site/config/development.properties")
    static class Development {
    }

    /**
     * Properties to support the 'standard' mode of operation.
     */
    @Configuration
    @Profile("standard")
    @PropertySource("classpath:org/encuestame/site/config/application.properties")
    static class Standard {
    }

}