package mx.edu.utez.sicae.models.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query (value = "UPDATE users SET status=:status WHERE email=:email",nativeQuery = true)
    boolean updateSById(@Param("status")int status, @Param("email")String email);

    boolean existsByName(Long id);
}
