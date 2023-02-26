package mx.edu.utez.sicae.services;

import mx.edu.utez.sicae.models.group.Group;
import mx.edu.utez.sicae.models.qr.Qr;
import mx.edu.utez.sicae.models.qr.QrRepository;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

@Service
@Transactional
public class QrService {
    private QrRepository repository;

   /* @Transactional(readOnly = true)
    public CustomResponse<Qr> delete(Long id){
        return new CustomResponse<>(this.repository.findById(id).get(),false,200,"OK");
    }*/
   @Transactional(readOnly = true)
   public CustomResponse<Qr> getOne(Long id){
       return new CustomResponse<>(this.repository.findById(id).get(),false,200,"OK");
   }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Qr>insert(Qr qr){
        if(this.repository.existsById(qr.getId())){
            return new CustomResponse<>(null,true,400,"Grupo ya registrado");
        }
        return  new CustomResponse<>(this.repository.saveAndFlush(qr),false,200,"Qr registrado coreectamente");
    }

    /*@Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Qr> update(Qr qr){
        if(this.repository.existsById(qr.getId()))
            return new CustomResponse<>(null,true,400,"Qr no existe");

        return new CustomResponse<>(
                this.repository.saveAndFlush(qr),false,200,"Qr registrado coreectamente"
        );
    }*/

   @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Boolean> changeStatus(Qr qr){
        if(this.repository.existsById(qr.getId()))
            return new CustomResponse<>(null,true,400,"La subcategoria no existe");
        return new CustomResponse<>(
                this.repository.findById(qr.getStatus(),qr.getId()),false,200,"Qr actualizada correctamente"
        );
    }
}
