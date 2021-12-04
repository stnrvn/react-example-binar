import { useState } from "react"
import {
  Modal,
  Button,
  Form
} from "react-bootstrap"

const AddModal = ({
  show,
  handleAddModal,
  handleSubmitAdd
}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [level, setLevel] = useState(1)

  return(
    <>
      <Modal show={show} onHide={handleAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Tambah Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" placeholder="Enter experience" onChange={(e) => setExperience(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Level</Form.Label>
                <Form.Control type="number" placeholder="Enter level" onChange={(e) => setLevel(e.target.value)}/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitAdd(username, email, experience, level)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const EditModal = () => {

}

export {
  AddModal,
  EditModal
}