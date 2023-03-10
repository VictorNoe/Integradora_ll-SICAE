import {Card} from "react-bootstrap";
import {Outlet} from "react-router-dom";

export const Cards = () => {
    return (
        <div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-4 mb-5">
                        <Card className="text-center" style={{borderRadius: 20}}>
                            <Card.Body style={{height: '10rem'}}>
                                <div className="row">
                                    <div className="col-11"></div>
                                    <div className="col-1 d-grid gap-2">
                                        <div
                                            style={{
                                                borderColor: "black",
                                                height: "20px",
                                                width: "20px",
                                                borderRadius: 100,
                                                backgroundColor: "green",
                                                alignItems:"center"
                                            }}></div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: "#109175", color: "#fff", borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                                <div className="row">
                                    <div className="col-12 text-">
                                        <p className="text-start">EOE I</p>
                                        <p className="text-start">5.-B</p>
                                        <p className="text-end">status : activo</p>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>


    )
}