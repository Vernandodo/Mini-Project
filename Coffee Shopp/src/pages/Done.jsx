import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarCoffee } from "../components";
import axios from "axios";
import { API_URL } from "../utils/constants";

const Done = () => {
  useEffect(() => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  }, []);

  return (
    <>
      <NavbarCoffee />
      <div className="mt-4 text-center bg-light">
        <Image src="src/assets/tq.jpg" width={500} />
        <h2>
          <strong>Yeayyyy</strong> Pesanan Sudah Di terima
        </h2>
        <h4>Silahkan memesan Kembali pada bagian Order hehe</h4>
        <br />
        <Button variant="primary" as={Link} to="/">
          Back To Order
        </Button>
      </div>
    </>
  );
};

export default Done;
