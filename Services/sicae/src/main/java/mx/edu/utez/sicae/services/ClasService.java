package mx.edu.utez.sicae.services;

import mx.edu.utez.sicae.models.clas.Clas;
import mx.edu.utez.sicae.models.clas.ClasRepository;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;

@Service
@Transactional
public class ClasService {
    @Autowired
    private ClasRepository repository;
    @Transactional(readOnly = true)
    public CustomResponse<List<Clas>> getAll(){
        return new CustomResponse<>(this.repository.findAll(),false,200, "OK");
    }

    @Transactional(readOnly = true)
    public  CustomResponse<Clas> getOne(Long id){
        return new CustomResponse<>(this.repository.findById(id).get(),false,200,"OK");
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Clas> insert(Clas clas){
        /*if(this.repository.existsById(clas.getId()))
            return new CustomResponse<>(null,true,400,"Error Clase ya registrada");
         */
        return new CustomResponse<>(this.repository.saveAndFlush(clas),false,200,"Clase creada con exito!");
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Clas>update(Clas clas){
        if(!this.repository.existsById(clas.getId()))
            return new CustomResponse<>(null,true,400,"Error clase no encontrada");
        return new CustomResponse<>(this.repository.saveAndFlush(clas),false,200,"Clase actualizada con exito!");
    }
    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Boolean>changeStatus(Clas clas){
        if(!this.repository.existsById(clas.getId()))
            return new CustomResponse<>(null,true,400,"Error Qr no encontrado");
        return new CustomResponse<>(this.repository.updateById(clas.getStatus(),clas.getId()),false,200,"Status actualizado");
    }
}
