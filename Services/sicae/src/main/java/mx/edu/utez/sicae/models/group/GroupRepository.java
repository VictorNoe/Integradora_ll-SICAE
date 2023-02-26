package mx.edu.utez.sicae.models.group;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group,Long> {
    boolean findById(long id);

}
