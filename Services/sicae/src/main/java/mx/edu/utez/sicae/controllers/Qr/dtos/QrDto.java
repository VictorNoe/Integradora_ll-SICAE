package mx.edu.utez.sicae.controllers.Qr.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.sicae.models.qr.Qr;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class QrDto {
    private Long id;
    private String date;
    private Boolean status;

    public Qr castToQr(){return new Qr(getId(),getDate(),getStatus(),null);}


}
