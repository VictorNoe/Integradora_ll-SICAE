package mx.edu.utez.sicae.models.asistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AsistenceRepository extends JpaRepository<Asistence,Long> {
    boolean existsById(long id);

    @Modifying
    @Query(value = "INSERT INTO students_asistences(student_id,asistences_id) VALUES(:student,:asistence)",nativeQuery = true)
    void insert(@Param("student")String student, @Param("asistence")Long id);
}
