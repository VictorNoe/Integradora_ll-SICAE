package mx.edu.utez.sicae.models.asistence;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.student.Student;

import java.util.Set;

@Entity
@Table(name = "asistences")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Asistence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String date;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    @ManyToMany
    @JoinTable(name = "asistence_qr", joinColumns = @JoinColumn(name = "qr_id"),inverseJoinColumns = @JoinColumn(name = "asistence_id"))
    private Set<Asistence> asistences;
}
