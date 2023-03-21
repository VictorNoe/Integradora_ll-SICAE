package mx.edu.utez.sicae.controllers.Clas;

import mx.edu.utez.sicae.controllers.Clas.dtos.ClasDto;
import mx.edu.utez.sicae.controllers.Clas.dtos.ClasResponse;
import mx.edu.utez.sicae.models.clas.Clas;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import mx.edu.utez.sicae.services.ClasService;
import mx.edu.utez.sicae.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clas")
@CrossOrigin(origins = {"*"})

public class ClasController {
    @Autowired
    private ClasService clasService;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<CustomResponse<List<ClasResponse>>> getAll(){
        return new ResponseEntity<>(this.clasService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CustomResponse<ClasResponse>> getOne(@PathVariable Long id){
        return new ResponseEntity<>(this.clasService.getOne(id),HttpStatus.OK);
    }
    @PostMapping("/")
    public ResponseEntity<CustomResponse<Clas>> insert(@Valid @RequestBody Clas clas){
        ResponseEntity<CustomResponse<Clas>>result= new ResponseEntity<>(this.clasService.insert(clas),HttpStatus.CREATED);
        userService.updateClases(clas.getId(),clas.getUser().getEmail());
        return result;
    }

    @PutMapping("/")
    public  ResponseEntity<CustomResponse<Clas>>update(@Valid @RequestBody Clas clas){
        return new ResponseEntity<>(this.clasService.update(clas),HttpStatus.CREATED);
    }

    @PatchMapping("/")
    public ResponseEntity<CustomResponse<Boolean>> changeStatus(@RequestBody ClasDto clasDto){
        return new ResponseEntity<>(this.clasService.changeStatus(clasDto.castToClas()),HttpStatus.OK);
    }
    @PatchMapping("/filter")
    public ResponseEntity<CustomResponse<List<Clas>>> getFilter(@RequestBody ClasDto clasDto){
        return new ResponseEntity<>(this.clasService.getFilter(clasDto.castToClas()),HttpStatus.OK);
    }
}
