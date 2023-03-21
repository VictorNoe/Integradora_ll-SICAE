package mx.edu.utez.sicae.controllers.Asistence;

import jakarta.validation.Valid;
import mx.edu.utez.sicae.controllers.Asistence.dtos.AsistenceDto;
import mx.edu.utez.sicae.models.asistence.Asistence;
import mx.edu.utez.sicae.models.utils.CustomResponse;
import mx.edu.utez.sicae.services.AsistenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/asistence")
@CrossOrigin(origins =  {"*"})
public class AsistenceController {
    @Autowired
    private AsistenceService service;

    @GetMapping("/")
    public ResponseEntity<CustomResponse<List<Asistence>>>getAll(){
        return new ResponseEntity<>(this.service.getAll(),HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<CustomResponse<Asistence>>insert(@Valid @RequestBody AsistenceDto asistenceDto){
        return new ResponseEntity<>(this.service.insert(asistenceDto.castToAsistence()),HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<CustomResponse<Asistence>>update(@Valid @RequestBody AsistenceDto asistenceDto){
        return new ResponseEntity<>(this.service.update(asistenceDto.castToAsistence()),HttpStatus.CREATED);
    }

   /* @PatchMapping("/")
    public ResponseEntity<CustomResponse<Boolean>>
    enableOrDisable(@RequestBody AsistenceDto asistenceDto){
        return new ResponseEntity<>(this.service.chanceStatus(asistenceDto.castToAsistence(),HttpStatus.OK));
    }*/
}
