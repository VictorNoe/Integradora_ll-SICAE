package mx.edu.utez.sicae.services;

import mx.edu.utez.sicae.controllers.Clas.dtos.ClasResponse;
import mx.edu.utez.sicae.models.clas.Clas;
import mx.edu.utez.sicae.models.clas.ClasRepository;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ClasService {
    @Autowired
    private ClasRepository repository;
    @Transactional(readOnly = true)
    public CustomResponse<List<ClasResponse>> getAll(){
        List<Clas> listClases=this.repository.findAll();
        List<ClasResponse> list=new ArrayList<>();
        for(int i=0;i<listClases.size();i++){
            ClasResponse clas= new ClasResponse().castToResponse(listClases.get(i));
            list.add(clas);
        }
        return new CustomResponse<>(list,false,200, "OK");
    }

    @Transactional(readOnly = true)
    public  CustomResponse<ClasResponse> getOne(Long id){
        Clas oldClas= this.repository.findById(id).get();
        ClasResponse clas= new ClasResponse().castToResponse(oldClas);
        return new CustomResponse<>(clas,false,200,"OK");
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
    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<List<Clas>>getFilter(Clas clas){
        List<Clas> listClases=this.repository.getFilter(clas.getGroup().getYear(),clas.getId(),clas.getGroup().getDegree());
        return new CustomResponse<>(listClases,false,200, "OK");
    }

}
