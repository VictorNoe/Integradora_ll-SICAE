package mx.edu.utez.sicae.models.clas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClasRepository extends JpaRepository<Clas,Long> {
    @Query(value = "UPDATE clases SET status=:status WHERE id=:id",nativeQuery = true)
    boolean updateById(@Param("status")int status, @Param("id") Long id);

    @Query(value = " select cl.id  ,us.lastname, us.name, sub.acronim,gr.degree,gr.letter from clases as cl inner join sicae.groups as gr on cl.group_id=gr.id inner join subjects as sub  on sub.id=cl.subject_id inner join users as us on us.email=cl.teacher_id where gr.year=:year and gr.career_id=:career_id and gr.degree=:degree; ",nativeQuery = true)
    List<Clas> getFilter(@Param("year")int year, @Param("career_id") Long career_id, @Param("degree")int degree);
}
