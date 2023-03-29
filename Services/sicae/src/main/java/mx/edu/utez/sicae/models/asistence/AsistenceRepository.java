package mx.edu.utez.sicae.models.asistence;

import mx.edu.utez.sicae.controllers.Asistence.dtos.AsistenceResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AsistenceRepository extends CrudRepository<Asistence, Long>, JpaRepository<Asistence,Long> {
    boolean existsById(long id);

    @Modifying
    @Query(value = "INSERT INTO students_asistences(student_id,asistences_id) VALUES(:student,:asistence)",nativeQuery = true)
    void insert(@Param("student")String student, @Param("asistence")Long id);

    //@Query(value = "SELECT a.id, a.`date`, a.`status`, a.qr_id, a.student_id, s.`name`, s.lastname  from asistences a INNER JOIN students s INNER JOIN qrs q on q.id=a.qr_id INNER JOIN clases c on c.id=q.class_id WHERE c.id=:id", nativeQuery = true)
    @Query(value = "SELECT id from asistences",nativeQuery = true)
    List<AsistenceResponse> getByClas();
}
