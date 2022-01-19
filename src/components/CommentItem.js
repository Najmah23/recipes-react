import { useState } from "react"
import { Card, Col, Image, Row, Button } from "react-bootstrap"
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import DeleteComment from "./DeleteComment"
import EditComment from "./EditComment"

function CommentItem(props) {
  const { comment, recipe } = props
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <>
      <Card style={{ margin: 30, maxWidth: 400, marginTop: 25, backgroundColor:"rgba(216, 218, 219, 0.418)"}}>
        <Row>
          <Col md="2" style={{ marginLeft: "15px" }}>
            <Image src={comment.owner.avatar} width="80px" className="mt-3 " />
          </Col>
          <Col className="mt-4 ms-5">
            {comment.owner.firstName} {comment.owner.lastName}
          </Col>
        </Row>

        <Row>
          <Col md={{ offset: 4 }}>{comment.comment}</Col>
        </Row>

        <Card.Footer style={{margin:"auto" ,backgroundColor:"rgba(216, 218, 219, 0.418)"}}>
          <Button variant="outline-success"  className="me-2  " onClick={() => setEditShow(true)}>
            <FiEdit />
          </Button>
          <Button variant="outline-danger" className="me-2" onClick={() => setDeleteShow(true)}>
            <AiOutlineDelete />
          </Button>
        </Card.Footer>
        <EditComment show={editShow} setShow={setEditShow} comment={comment} recipe={recipe} />
        <DeleteComment show={deleteShow} setShow={setDeleteShow} comment={comment} recipe={recipe} />
      </Card>
    </>
  )
}

export default CommentItem
