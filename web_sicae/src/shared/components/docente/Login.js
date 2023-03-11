import React, {useEffect, useState} from "react";
import LogoUtez from "../../../assets/img/LogoMiniUtez.jpg"
import {useNavigate} from "react-router-dom";
import toast from "bootstrap/js/src/toast";

export const Login = () => {

    const navigate = useNavigate();

    //validate user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

   const PreceedLogin = (e) => {
        e.preventDefault();
        if(validate()) {
            console.log('proceed');
            fetch("http://localhost:8080/api/users/"+email).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length===0){
                    toast.error('Por favor de validar el usruario');
                } else {
                    if (resp.data.password === password) {
                        console.log(resp.data.role)
                        if (resp.data.role === 0) {
                            sessionStorage.setItem('email',email);
                            sessionStorage.setItem('password',password);
                            navigate("/loginAdm");
                        } else {
                            navigate("/loginDte");
                            sessionStorage.setItem('email',email);
                            sessionStorage.setItem('password',password);
                        }
                    } else {

                    }
                }
            }).catch((err) => {
                alert(err.message);
            });
        }
   }

   const validate = () => {
        let result = true;
        if (email === ' ' || email === null) {
            result = false;
            toast.warning('Por favor ingrese email');
        }
       if (password === ' ' || password === null) {
           result = false;
           toast.warning('Por favor ingrese contraseña');
       }
       return result;

   }

    return (
       <div className="container">
           <div className="row border border-2 position-absolute top-50 start-50 translate-middle" style={{height:"70%", width:"60%",borderRadius:3,backgroundColor:""}}>
               <div className="col-6 d-flex justify-content-center align-items-center">
                   <div className="col-8 abs-center">
                       <form className="row g-3 needs-validation" onSubmit={PreceedLogin}>
                           <div className="mb-3">
                               <h1>LOGIN</h1>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa E-MAIL" required/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                               <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa Contraseña" required/>
                           </div>
                           <div className="d-grid gap-2 col-6 mx-auto">
                               <button type="submit" className="btn" style={{color:"white", backgroundColor:"#109175FF", borderColor:"#109175FF"}} id="liveAlertBtn">Iniciar</button>
                           </div>
                       </form>
                   </div>
               </div>
               <div className="col-6" style={{backgroundColor:"#109175FF"}}>
                   <div className="d-flex justify-content-center align-items-center">
                       <img src={LogoUtez} className="mt-5" alt="LogoUtez" style={{width:200, height:200, borderRadius:"100%"}}/>
                   </div>
                   <div className="text-center">
                       <a style={{
                           color:"white",
                           fontSize: 90,
                           fontFamily: "serif"
                       }}>
                           SICAE
                       </a>
                   </div>
               </div>
           </div>
       </div>
    )
}