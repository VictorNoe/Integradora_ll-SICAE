package mx.edu.utez.sicae.services.security;

//import mx.edu.utez.sicae.models.security.AuthUser;
import mx.edu.utez.sicae.models.user.User;
import mx.edu.utez.sicae.services.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
/*
public class AuthService implements UserDetailsService {
    UserService userService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=userService.getByUsername(username).get();
        return AuthUser.build(user);


    }
}*/
