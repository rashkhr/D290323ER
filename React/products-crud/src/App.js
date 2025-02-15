import logo from "./logo.svg";
import "./App.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [products, setProducts] = useState([]);

  const handleAdd = () => {
    setShowFormModal(true);
  };

  return (
    <>
      <h1>My Products</h1>
      <Table striped bordered hover>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>In Stock</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Category</td>
            <td>In Stock</td>
            <td>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleAdd}>
        Add Product
      </Button>
      <Modal show={showDeleteModal}>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showFormModal}>
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFormModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
