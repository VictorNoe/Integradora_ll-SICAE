package mx.edu.utez.sicae.models.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import mx.edu.utez.sicae.models.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class AuthUser implements UserDetails {
    private String username;
    @JsonIgnore
    private String password;



    public Collection<?extends GrantedAuthority> authorities;
    public AuthUser(String username, String password, Collection<?extends GrantedAuthority> authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }
    public static AuthUser build(User user){
        //creo que el error es mpor que intente acceder a una tabla de roles pero no la tenemos (espero no deber modificar la base)
        List<GrantedAuthority> authorities=user.getRole().stream().map(role -> new SimpleGrantedAuthority(role.getDescription())).collect(Collectors.toList());
        return new AuthUser(user.getEmail(),user.getPassword(),authorities);
    }
    @Override
    public Collection<?extends GrantedAuthority> getAuthorities(){
        return authorities;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
