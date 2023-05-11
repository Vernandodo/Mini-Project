import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const TotalBayar = (props) => {
  const navigate = useNavigate();

  const submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      daftarMenu: props.keranjangs,
    };
    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      navigate("/suksespages");
    });
  };

  const dataKeranjangs = props.keranjangs;
  const totalBayar = dataKeranjangs?.reduce(function (result, item) {
    return result + item.total_harga;
  }, 0);

  return (
    <>
      {/* web */}
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total :{" "}
              <strong className="float-end me-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <div className="d-grid gap-2 mb-3 mt-2 me-2">
              <Button onClick={() => submitTotalBayar()}>
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                <strong variant="primary" size="lg">
                  Bayar
                </strong>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      {/* mobile */}
      <div className="d-sm=block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga :{" "}
              <strong className="float-end me-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <div className="d-grid gap-2 mb-3 mt-2 me-2">
              <Button onClick={() => submitTotalBayar()}>
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                <strong variant="primary" size="lg">
                  Bayar
                </strong>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TotalBayar;
