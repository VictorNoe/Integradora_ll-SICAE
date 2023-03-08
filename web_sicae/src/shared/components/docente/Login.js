import React, {useEffect, useState} from "react";
import LogoUtez from "../../../assets/img/LogoMiniUtez.jpg"
import {useNavigate} from "react-router-dom";
import {URLSERVIS} from "../../plugins/Axios";

export const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    useEffect(() => {
        const getLogin = async () => {
            const res = await URLSERVIS("users/");
            setUser(res.data.data)
        }
        getLogin();
    },[]);

    console.log(user)

    if(!user.length) return (
        <h1>Loading...</h1>
    )

    return (
       <div className="container">
           <div className="row border border-2 position-absolute top-50 start-50 translate-middle" style={{height:"75%", width:"60%",borderRadius:3,backgroundColor:""}}>
               <div className="col-6">
                   <div className="col-8">
                       <form>
                           <div className="mb-3">
                               <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                               <input type="password" className="form-control" id="exampleInputPassword1"/>
                           </div>
                           <div className="d-grid gap-2 col-6 mx-auto">
                               <button type="submit" className="btn" style={{color:"white", backgroundColor:"#109175FF", borderColor:"#109175FF"}} onClick={() => navigate()}>Submit</button>
                           </div>
                       </form>
                   </div>
               </div>
               <div className="col-6" style={{backgroundColor:"#109175FF"}}>
                   <img src={LogoUtez} className="mt-5" alt="LogoUtez" style={{width:200, height:200, borderRadius:"100%"}}/>
               </div>
           </div>
       </div>
    )
}