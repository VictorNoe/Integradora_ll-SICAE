package mx.edu.utez.sicae.models.clas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasRepository extends JpaRepository<Clas,Long> {
    @Query(value = "UPDATE clases SET status=:status WHERE id=:id",nativeQuery = true)
    boolean updateById(@Param("status")int status, @Param("id") Long id);

}
