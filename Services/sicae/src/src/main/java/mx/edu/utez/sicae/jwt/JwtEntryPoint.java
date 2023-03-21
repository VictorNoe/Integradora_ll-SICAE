package mx.edu.utez.sicae.jwt;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import java.io.IOException;
/*
public class JwtEntryPoint implements AuthenticationEntryPoint {
    public final static Logger LOGGER= LoggerFactory.getLogger(JwtEntryPoint.class);

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        LOGGER.error("Error commence method");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED,"No autorizado");
    }
}
*/