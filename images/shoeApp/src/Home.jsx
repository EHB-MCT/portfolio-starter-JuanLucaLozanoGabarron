import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./home.css";
import "./collection.css";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <div>
        <h1>SNEACAT</h1>
        <Modal id="modal" show={show} onHide={handleClose}>
          <Modal.Title>
            {" "}
            <h2>Add new shoes to your catalogue</h2>{" "}
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Label>Brand</Form.Label>
              <br />
              <Form.Control
                className="controls"
                type="text"
                placeholder="Nike"
                name="brand"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                autoFocus
              />
              <hr />
              <br />
              <Form.Label>Model</Form.Label>
              <br />
              <Form.Control
                className="controls"
                type="text"
                placeholder="Air Force 1"
                name="model"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <hr />
              <br />
              <Form.Label>Image</Form.Label>
              <br />
              <Form.Control
                className="controls"
                type="text"
                placeholder="Direct link of your image"
                name="img"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <hr />
              <br />
              <div id="footer">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add shoes
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <Button id="buttonForm" variant="primary" onClick={handleShow}>
          Add new shoes
        </Button>

        <div className="list">
    
            return (
              <div className="card">
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="info">
                  <h2>Brand</h2>
                  <p>Model</p>
                  <br />
                  <br />
                  <button id="delete" >
                    Delete sneakers
                  </button>
                </div>
              </div>
            );
        
        </div>
      </div>
    </>
  );
}
