
package mx.edu.utez.sicae.controllers.Group.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.group.Group;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class GroupDto {

    private Long id;
    private int degree;
    private String letter;
    private int year;

    public Group castToGroup(){return new Group(getId(),getDegree(),getLetter(),getYear(),null);}
}

