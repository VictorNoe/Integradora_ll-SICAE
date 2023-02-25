package mx.edu.utez.sicae.models.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query (value = "UPDATE users SET status=:status WHERE id=:id",nativeQuery = true)
    boolean updateById(@Param("status")int status, @Param("id")Long id);

    boolean existsById(Long id);
}
