package mx.edu.utez.sicae.controllers.Asistence.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.asistence.Asistence;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AsistenceDto {
    @NotEmpty(message = "Campo Obligatorio")
    private Long id;
    private String date;

    public Asistence castToAsistence(){
        //return  new Asistence(getId(),getDate(),getStatus(), null,null);
        return  new Asistence(getId(),getDate(), null,null);
    }

}
