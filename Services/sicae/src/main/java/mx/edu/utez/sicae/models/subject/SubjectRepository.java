package mx.edu.utez.sicae.models.subject;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject,Long> {

    boolean findById(long id);

}
