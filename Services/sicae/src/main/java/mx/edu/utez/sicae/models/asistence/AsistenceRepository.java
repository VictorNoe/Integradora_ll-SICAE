package mx.edu.utez.sicae.models.asistence;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AsistenceRepository extends JpaRepository<Asistence,Long> {
    boolean existsById(long id);
}
