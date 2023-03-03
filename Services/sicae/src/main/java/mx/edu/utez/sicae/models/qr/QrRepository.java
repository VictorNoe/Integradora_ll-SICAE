package mx.edu.utez.sicae.models.qr;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QrRepository extends JpaRepository<Qr,Long> {
//---------------------CORREGIR-------------------
    Boolean findById(Boolean status, long id);
}
