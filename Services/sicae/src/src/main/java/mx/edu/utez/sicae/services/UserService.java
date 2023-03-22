package mx.edu.utez.sicae.services;

import mx.edu.utez.sicae.models.user.User;
import mx.edu.utez.sicae.models.user.UserRepository;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository repository;
    @Transactional(readOnly = true)
    public CustomResponse<List<User>>getAll(){
        return new CustomResponse<>(this.repository.findAll(),false,200,"OK");
    }
    @Transactional(readOnly = true)
    public CustomResponse<User> getOne(String email){return new CustomResponse<>(this.repository.findById(email).get(),false,200,"OK");}
    @Transactional(rollbackFor ={SQLException.class} )
    public CustomResponse<User> insert(User user){
        if (this.repository.existsById(user.getEmail()))
            return new CustomResponse<>(null,true,400,"Error usuario ya registrado");

        return new CustomResponse<>(this.repository.saveAndFlush(user),false,200,"Usuario Registrado");
    }
    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<User>update(User user){
        if(!this.repository.existsById(user.getEmail()))
            return new CustomResponse<>(null,true,400,"Error usuario no encontrado");
        return new CustomResponse<>(this.repository.saveAndFlush(user),false,200,"Usuario Actualizado");
    }
    @Transactional(rollbackFor = {SQLException.class})
    public void updateClases(Long clas, String email){
        this.repository.insertUserClas(email,clas);
    }
    @Transactional(rollbackFor = {SQLException.class})
    public  CustomResponse<Boolean> changeStatus(User user){
        if (!this.repository.existsById(user.getEmail()))
            return new CustomResponse<>(null,true,400,"Error Usuario no encontrado");
        return new CustomResponse<>(this.repository.updateByEmail(user.getStatus(), user.getEmail()),false,200,"Estado actualizado!");
    }




    //--------------------------------------------
    @Transactional(readOnly = true)
    public Optional<User> getByUsername(String username){
        return repository.findByUsername(username);
    }

}
