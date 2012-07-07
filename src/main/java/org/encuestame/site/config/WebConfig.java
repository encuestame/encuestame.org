package org.encuestame.site.config;

import java.util.List;
import java.util.Properties;

import javax.inject.Inject;

import org.encuestame.site.web.interceptor.DeviceHandlerMethodArgumentResolver;
import org.encuestame.site.web.interceptor.UserLocationHandlerInterceptor;
import org.joda.time.DateTimeZone;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.MethodParameter;
import org.springframework.core.env.Environment;
import org.springframework.format.datetime.joda.JodaTimeContextHolder;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mobile.device.DeviceResolverHandlerInterceptor;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.servlet.view.tiles2.TilesConfigurer;
import org.springframework.web.servlet.view.tiles2.TilesView;

/**
 * Spring MVC Configuration.
 * Implements {@link WebMvcConfigurer}, which provides convenient callbacks that allow us to customize aspects of the Spring Web MVC framework.
 * These callbacks allow us to register custom interceptors, message converters, argument resovlers, a validator, resource handling, and other things.
 * @see WebMvcConfigurer
 */
@Configuration
@EnableWebMvc
@ImportResource("classpath:org/encuestame/site/config/applicationContext.xml")
public class WebConfig extends WebMvcConfigurerAdapter {

	/**
	 * 
	 */
    @Inject
    private Environment environment;

    // implementing WebMvcConfigurer
    
    /*
     * (non-Javadoc)
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#addInterceptors(org.springframework.web.servlet.config.annotation.InterceptorRegistry)
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new DeviceResolverHandlerInterceptor());
        LocaleChangeInterceptor locale = new LocaleChangeInterceptor();
        locale.setParamName("lang");
        registry.addInterceptor(locale);
    }
    
    /*
     * (non-Javadoc)
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#addArgumentResolvers(java.util.List)
     */
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        //argumentResolvers.add(new AccountHandlerMethodArgumentResolver());
        //argumentResolvers.add(new DateTimeZoneHandlerMethodArgumentResolver());
        argumentResolvers.add(new LocationHandlerMethodArgumentResolver());
        //argumentResolvers.add(new FacebookHandlerMethodArgumentResolver(environment.getProperty("facebook.appId"), environment.getProperty("facebook.appSecret")));
        argumentResolvers.add(new DeviceHandlerMethodArgumentResolver());
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#addResourceHandlers(org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry)
     */
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resource/");
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#configureMessageConverters(java.util.List)
     */
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(new MappingJacksonHttpMessageConverter());
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#getValidator()
     */
    public Validator getValidator() {
        LocalValidatorFactoryBean factory = new LocalValidatorFactoryBean();
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("/WEB-INF/messages/validation");
        if (environment.acceptsProfiles("development")) {
            messageSource.setCacheSeconds(0);
        }
        factory.setValidationMessageSource(messageSource);
        return factory;
    }

    // additional webmvc-related beans

    /**
     * ViewResolver configuration required to work with Tiles2-based views.
     */
    @Bean
    public ViewResolver viewResolver() {
        UrlBasedViewResolver viewResolver = new UrlBasedViewResolver();
        viewResolver.setViewClass(TilesView.class);
        return viewResolver;
    }

    @Bean
    public SessionLocaleResolver localeResolver(){
        return new SessionLocaleResolver();
    }

    /**
     * Configures Tiles at application startup.
     */
    @Bean
    public TilesConfigurer tilesConfigurer() {
        TilesConfigurer configurer = new TilesConfigurer();
        configurer.setDefinitions(new String[] {
            "/WEB-INF/layouts/tiles.xml",
            "/WEB-INF/views/**/tiles.xml"
        });
        configurer.setCheckRefresh(true);
        return configurer;
    }

    /**
     * Messages to support internationalization/localization.
     */
    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setDefaultEncoding("UTF-8");
        messageSource.setBasename("/WEB-INF/messages/messages");
        if (environment.acceptsProfiles("development")) {
            messageSource.setCacheSeconds(0);
        }
        return messageSource;
    }

    /**
     * Supports FileUploads.
     */
    @Bean
    public MultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(500000);
        return multipartResolver;
    }

    /**
     * The Java Mail sender.
     * It's not generally expected for mail sending to work in embedded mode.
     * Since this mail sender is always invoked asynchronously, this won't cause problems for the developer.
     */
    //@Bean
    public JavaMailSender mailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(environment.getProperty("mail.host"));
        mailSender.setPort(environment.getProperty("mail.port", Integer.class, 25));
        mailSender.setUsername(environment.getProperty("mail.username"));
        mailSender.setPassword(environment.getProperty("mail.password"));
        mailSender.setProtocol(environment.getProperty("mail.transport.protocol"));
        mailSender.setDefaultEncoding("UTF-8");
        Properties properties = new Properties();
        /*
         *             <props>
                <prop key="mail.smtps.auth">true</prop>
                <prop key="mail.smtps.debug">true</prop>
                <prop key="mail.smtps.starttls.enable">false</prop>
            </props>
         */
        properties.put("mail.smtp.auth", environment.getProperty("mail.smtp.auth", Boolean.class, true));
        properties.put("mail.smtp.debug", environment.getProperty("mail.smtp.debug", Boolean.class, true));
        properties.put("mail.smtp.starttls.enable", environment.getProperty("mail.smtp.starttls.enable", Boolean.class, false));
        properties.put("mail.smtp.timeout", environment.getProperty("mail.smtp.timeout", Integer.class, 10000));
        properties.put("mail.smtps.timeout", environment.getProperty("mail.smtps.timeout", Integer.class, 10000));
        mailSender.setJavaMailProperties(properties);
        return mailSender;
    }

    
    private static class DateTimeZoneHandlerMethodArgumentResolver implements HandlerMethodArgumentResolver {

        public boolean supportsParameter(MethodParameter parameter) {
            return DateTimeZone.class.isAssignableFrom(parameter.getParameterType());
        }

        public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer modelAndViewContainer, NativeWebRequest webRequest,
                WebDataBinderFactory binderFactory) throws Exception {
            return JodaTimeContextHolder.getJodaTimeContext().getTimeZone();
        }

    }

    private static class LocationHandlerMethodArgumentResolver implements HandlerMethodArgumentResolver {

        public boolean supportsParameter(MethodParameter parameter) {
            return org.encuestame.site.web.util.Location.class.isAssignableFrom(parameter.getParameterType());
        }

        public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer modelAndViewContainer, NativeWebRequest webRequest,
                WebDataBinderFactory binderFactory) throws Exception {
            return webRequest.getAttribute(UserLocationHandlerInterceptor.USER_LOCATION_ATTRIBUTE, WebRequest.SCOPE_REQUEST);
        }

    }

}