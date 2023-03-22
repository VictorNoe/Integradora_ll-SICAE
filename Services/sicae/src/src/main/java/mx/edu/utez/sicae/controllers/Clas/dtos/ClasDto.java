package mx.edu.utez.sicae.controllers.Clas.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.clas.Clas;
import mx.edu.utez.sicae.models.group.Group;
import mx.edu.utez.sicae.models.subject.Subject;
import mx.edu.utez.sicae.models.user.User;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ClasDto {
    @NotEmpty(message = "Campo obligatorio")
    private Long id;
    private int status;
    private Group group;
    private User teacher;
    private Subject subject;

    public Clas castToClas(){
        return new Clas(
                getId(),
                getStatus(),
                getGroup(),
                getTeacher(),
                getSubject()
        );
    }
}
