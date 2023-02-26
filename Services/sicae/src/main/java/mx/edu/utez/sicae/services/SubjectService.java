package mx.edu.utez.sicae.services;

import mx.edu.utez.sicae.models.asistence.AsistenceRepository;
import mx.edu.utez.sicae.models.group.Group;
import mx.edu.utez.sicae.models.subject.Subject;
import mx.edu.utez.sicae.models.subject.SubjectRepository;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;

@Service
@Transactional
public class SubjectService {
    private SubjectRepository repository;

    @Transactional(readOnly = true)
    public CustomResponse<List<Subject>> getAll(){
        return new CustomResponse<>(this.repository.findAll(),false,200,"Ok");
    }

    @Transactional(readOnly = true)
    public CustomResponse<Subject> getOne(Long id){
        return new CustomResponse<>(this.repository.findById(id).get(),false,200,"OK");
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Subject>insert(Subject subject){
        if(this.repository.existsById(subject.getId())){
            return new CustomResponse<>(null,true,400,"Materia ya registrado");
        }
        return  new CustomResponse<>(this.repository.saveAndFlush(subject),false,200,"Materia registrado coreectamente");
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Subject> update(Subject subject){
        if(this.repository.existsById(subject.getId()))
            return new CustomResponse<>(null,true,400,"Materia no existe");

        return new CustomResponse<>(
                this.repository.saveAndFlush(subject),false,200,"Materia actualizado coreectamente"
        );
    }

}
