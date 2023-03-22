package mx.edu.utez.sicae.models.asistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AsistenceRepository extends JpaRepository<Asistence,Long> {
    boolean existsById(long id);
    boolean existsByStudentIdAndQrId(String id_student, long id_qr);
}
