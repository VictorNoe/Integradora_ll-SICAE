package mx.edu.utez.sicae.models.security;

import jakarta.servlet.Filter;
import mx.edu.utez.sicae.jwt.JwtEntryPoint;
import mx.edu.utez.sicae.jwt.JwtTokenFilter;
import mx.edu.utez.sicae.services.security.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MainSecurity /*extends WebSecurityConfigurerAdapter*/{
/*
    @Autowired
    private AuthService service;
    @Autowired
    private JwtEntryPoint entryPoint;
    @Bean
    public JwtTokenFilter jwtTokenFilter(){
        return new JwtTokenFilter();
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public void configure(AuthenticationManagerBuilder auth)throws Exception{
        auth.userDetailsService(service).passwordEncoder(passwordEncoder());
    }

    //esto de de las anotaciones
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeRequests()
                .antMatchers("/api-market/auth/**","/api-market/contact/**")
                .permitAll().antMatchers("/api-market/category/*")
                .permitAll().antMatchers(HttpMethod.POST,"/api-market/user")
                .permitAll().antMatchers(HttpMethod.GET,"/api-market/product")
                .permitAll().antMatchers(HttpMethod.POST,"/api-markey/person")
                .permitAll().anyRequest().authenticated().and().exceptionHandling()
                .authenticationEntryPoint(entryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore((Filter) jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        //        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
*/
}
