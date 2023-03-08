import {Card} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {URLSERVIS} from "../../plugins/Axios";
export const Cards = () => {

    const [salones, setSalones] = useState([]);

    useEffect(() => {
        const getSalon = async () => {
            const res = await URLSERVIS("");
            setSalones(res.data);
        }
        getSalon();
    },[]);

    if(!salones.length) return <h1>Loading....</h1>;
    console.log(salones)

    return (
        <div>
                <div className="container-lg">
                    <div className="row">
                        {
                            salones.map((clases) => (
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
                                                        <p className="text-start">{clases.name}</p>
                                                        <p className="text-start">{clases.email}</p>
                                                        <p className="text-end">{clases.address.suite}</p>
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