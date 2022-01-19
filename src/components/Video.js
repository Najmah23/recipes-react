import { Col, Row } from "react-bootstrap";
import vid1 from "../img/ved1.mp4"


function Video() {
    return ( <>
    <Row>
        <Col md="8" className="mx-auto mt-5 w-200">
        <video className="d-block w-100 mx-auto" src={vid1} autoPlay muted loop />
        </Col>
    </Row>
    </> );
}

export default Video;