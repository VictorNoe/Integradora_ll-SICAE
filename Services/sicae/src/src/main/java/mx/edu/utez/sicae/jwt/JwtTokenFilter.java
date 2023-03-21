package mx.edu.utez.sicae.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
//import mx.edu.utez.sicae.services.security.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.IOException;

public class JwtTokenFilter {
  /*  private final static Logger LOGGER= LoggerFactory.getLogger(JwtTokenFilter.class);
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    AuthService authService;

    //esto lo tenemos que solucionar en clase(ni a PP le quedo)
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            String token= getToken(request);
            if(token!=null && jwtProvider.validateToken(token)){
                String username=jwtProvider.getUsernameFromToken(token);
                UserDetails userDetails=authService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken auth= new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);

            }
        }catch (Exception e){
            LOGGER.error("Error filtrando"+ e.getMessage());
        }
    }
    public String getToken(HttpServletRequest request){
        String header=request.getHeader("Authorization");
        if(header != null && header.startsWith("Bearer"))
            return header.replace("Bearer","");
        return null;
    }*/
}
