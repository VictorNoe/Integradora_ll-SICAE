package mx.edu.utez.sicae.models.asistence;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.qr.Qr;
import mx.edu.utez.sicae.models.student.Student;

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

    @Column(nullable = false)
    private Boolean status;

    @Column(nullable = false)
    private int unidad;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    @ManyToOne
    @JoinColumn(name = "qr_id")
    private Qr qr;
    /*
    @ManyToMany
    @JoinTable(name = "asistence_qr", joinColumns = @JoinColumn(name = "qr_id"),inverseJoinColumns = @JoinColumn(name = "asistence_id"))
    private Set<Asistence> asistences;
     */



}

