import { Col, Row } from "react-bootstrap";
import vid2 from "../img/ved1.mp4"


function Video() {
    return ( <>
    <Row>
        <Col md="8" className="mx-auto mt-4 w-200">
        <video className="d-block w-100 mx-auto" src={vid2} autoPlay muted loop />
        </Col>
    </Row>
    </> );
}

export default Video;