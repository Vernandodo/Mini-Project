import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = (props) => {
  if (props.keranjangDetail) {
    return (
      <div>
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.keranjangDetail.product.nama} <strong>Rp. {numberWithCommas(props.keranjangDetail.product.harga)}</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={props.handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h5>
                  <u>Total Harga</u>
                </h5>
                <p>
                  <strong>Rp. {numberWithCommas(props.totalHarga)}</strong>
                </p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h5>Jumlah :</h5>
                <Button variant="primary" size="sm" className="me-2">
                  <FontAwesomeIcon icon={faMinus} onClick={() => {props.kurang()}} />
                </Button>
                <strong>{props.jumlah}</strong>
                <Button variant="primary" size="sm" className="ms-2">
                  <FontAwesomeIcon icon={faPlus} onClick={() => {props.tambah()}} />
                </Button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Keterangan : </Form.Label>
                <Form.Control as="textarea" rows={3} name="keterangan" placeholder="Contoh = Pedes, Manis, DLL" value={props.keterangan} onChange={(event) => {props.changeHandler(event)}} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Simpan
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => {props.handleDelete(props.keranjangDetail.id)}}>
               <FontAwesomeIcon icon={faTrash} /> Hapus pesanan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Kosong</Modal.Title>
          </Modal.Header>
          <Modal.Body>Kosong</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default ModalKeranjang;
