import React, { useState } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";
import Edit from "./Edit";
import axios from "axios";
import { API_URL } from "../utils/constants";
import swal from "sweetalert";

const Hasil = (props) => {
  const { keranjangs } = props;
  const [show, setShow] = useState();
  const [keranjangDetail, setKeranjangDetail] = useState(null);
  const [jumlah, setJumlah] = useState();
  const [keterangan, setKeterangan] = useState();
  const [totalHarga, setTotalHarga] = useState(0);

  const handleShow = (menuKeranjang) => {
    setShow(true);
    setJumlah(menuKeranjang.jumlah);
    setKeterangan(menuKeranjang.keterangan);
    setKeranjangDetail(menuKeranjang);
    setTotalHarga(menuKeranjang.total_harga);
  };

  const handleClose = () => setShow(false);

  const tambah = () => {
    setJumlah(jumlah + 1);
    setTotalHarga(keranjangDetail.product.harga * (jumlah + 1));
  };

  const kurang = () => {
    if (jumlah !== 1) {
      setJumlah(jumlah - 1);
      setTotalHarga(keranjangDetail.product.harga * (jumlah - 1));
    }
  };

  const changeHandler = (event) => {
    setKeterangan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();

    const data = {
      jumlah: jumlah,
      total_harga: totalHarga,
      product: keranjangDetail.product,
      keterangan: keterangan,
    };
    axios
      .put(API_URL + "keranjangs/" + keranjangDetail.id, data)
      .then((res) => {
        props.getListKeranjang();
        swal({
          title: "Update Pesanan!",
          text: "Update Pesanan " + data.product.nama,
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  const handleDelete = (id) => {
    handleClose();
    axios
      .delete(API_URL + "keranjangs/" + id)
      .then((res) => {
        props.getListKeranjang();
        swal({
          title: "Hapus Pesanan!",
          text: "Sukses Hapus Pesanan " + keranjangDetail.product.nama,
          icon: "error",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  return (
    <Col md={3} className="mt-3">
      <h4>
        <strong>Checkout</strong>
      </h4>
      <hr />
      {keranjangs && keranjangs.length !== 0 && (
        <Card className="overflow-auto shadow hasil">
          <ListGroup className="group1" variant="flush">
            {keranjangs.map((menuKeranjang, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => handleShow(menuKeranjang)}
              >
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill bg="dark">
                        {menuKeranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{menuKeranjang.product.nama}</h5>
                    <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                  </Col>
                  <Col>
                    <strong className="float-end">
                      Rp. {numberWithCommas(menuKeranjang.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}

            <Edit
              handleClose={handleClose}
              show={show}
              keranjangDetail={keranjangDetail}
              jumlah={jumlah}
              keterangan={keterangan}
              tambah={tambah}
              kurang={kurang}
              changeHandler={changeHandler}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              totalHarga={totalHarga}
            />
          </ListGroup>
        </Card>
      )}
      <TotalBayar keranjangs={keranjangs} {...props} />
    </Col>
  );
};

export default Hasil;
