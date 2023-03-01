import React, {useState} from "react";
import {Button, Form, Image} from "react-bootstrap";
import LogoUtez from "../../../assets/img/LogoMiniUtez.jpg"

export const Login = () => {
    const [validated, setValidated] = useState(false);

    //validacion form
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="container " style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            minHeight: 100,
        }}>
            <div className="row abs-vemter border position-absolute top-50 start-50 translate-middle rounded-4" style={{backgroundColor:"#109175"}}>
                <div className="row rounded mx-auto d-block " style={{
                    height:200,
                    width:200,
                    borderRadius:100,

                }}>
                    <Image
                        src={LogoUtez}
                        roundedCircle
                        class="rounded mx-auto d-block"
                    />
                </div>
                <div className="row rounded mx-auto d-block">
                    <div className="col-12">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label required type="text">Matricula</Form.Label>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control type="text" placeholder="Matricula" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" required/>
                            </Form.Group>

                                <div className="col-12 text-center d-grid gap-2">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                        style={{
                                            background: "#1E3D74",
                                            borderColor: "#1E3D74"
                                        }}

                                    >
                                        Iniciar Sesión
                                    </Button>
                                </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}