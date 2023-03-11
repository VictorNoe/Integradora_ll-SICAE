import {Card} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {URLSERVIS} from "../../plugins/Axios";
import {Loading} from "../Loading";
export const Cards = () => {

    const [clase, setClase] = useState([]);

    useEffect(() => {
        const getSalon = async () => {
            const res = await URLSERVIS("career/");
            setClase(res.data.data);
        }
        getSalon();
    },[]);

    console.log(clase)
    if(!clase.length) return <Loading/>;

    return (
        <div>
            <div className="container-lg">
                <div className="row">
                    {
                        clase.map((clases) => (
                            <div className="col-4 mb-5" key={clases.id}>
                                <Card className="text-center" style={{borderRadius: 20}}>
                                    <Card.Body style={{height: '10rem'}}>
                                        <div className="row">
                                            <div className="col-10"></div>
                                            <div className="col-2 d-grid gap-2 al">
                                                <center>
                                                    <div style={{
                                                        borderColor: "black",
                                                        height: "20px",
                                                        width: "20px",
                                                        borderRadius: 100,
                                                        backgroundColor: "red"
                                                    }}></div>
                                                </center>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer style={{
                                        backgroundColor: "#109175",
                                        color: "#fff",
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20
                                    }}>
                                        <div className="row">
                                            <div className="col-12 text-">
                                                <p className="text-start">{clases.id}</p>
                                                <p className="text-start">{clases.acronim}</p>
                                                <p className="text-end">{clases.name}</p>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Outlet/>
        </div>
    )
}