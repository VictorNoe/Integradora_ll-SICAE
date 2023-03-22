package mx.edu.utez.sicae.controllers.User.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.clas.Clas;
import mx.edu.utez.sicae.models.user.User;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDto {
    private List<Clas> clases;
    private String lastname;
    @NotEmpty(message = "Campo obligatorio")
    private String email;
    private String name;
    private String password;
    private int status;
    private int role;

    public User castToUser(){
        return new User(
                getEmail(),
                getName(),
                getLastname(),
                getPassword(),
                getRole(),
                getStatus(),
                getClases()
        );
    }
}
