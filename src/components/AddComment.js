import { useContext } from "react"
import { Form, Button, Row } from "react-bootstrap"
import { AiOutlineComment } from "react-icons/ai"
import {MdAddComment} from "react-icons/md"

import RecipesContext from "../utils/RecipesContext"

function AddComment(props) {
  const { addComment } = useContext(RecipesContext)
  const { recipeId } = props
  return (
    <div className=" mt-5">
      <Form className="mt-4" onSubmit={e => addComment(e, recipeId)}>
        <Form.Group
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ color: "rgba(241, 160, 37, 0.979)", textAlign: "center",fontFamily:"cursive" }}>Add Comment</h3>
            <Form.Label className="mt-4 " style={{ color: "rgba(241, 160, 37, 0.979)", fontSize: "21px" , marginLeft:"15px"}}>
              Comment <AiOutlineComment/>
            </Form.Label>
            <Form.Control as="textarea" name="comment" style={{ width: "370px",backgroundColor:"rgba(252, 255, 246, 0.603)",fontFamily:"cursive"}} required />
          </div>

          <Button variant="outline-warning" type="submit" className="ms-4 mb-2">
            <MdAddComment/>
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddComment
