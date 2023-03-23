import {Modal} from "react-bootstrap";
import QRCode from "react-qr-code";
import Button from "react-bootstrap/Button";
import Countdown from "./Temporizador";

export const MostrarQR = (props) => {

    const {qr} = props

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "35%", width: "35%" }}
                        value={`${qr.id},${qr.date},${qr.status}}`}
                        viewBox={`0 0 256 256`}
                        level='M'
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Countdown/>
                <Button variant="danger" onClick={props.qrCan}>Cancelar QR</Button>
            </Modal.Footer>
        </Modal>
    );
}