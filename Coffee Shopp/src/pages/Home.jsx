import React, { useState, useEffect } from "react";
import { ListCategories, Hasil, DaftarMenu, NavbarCoffee } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

const Home = (props) => {
  const [daftarMenu, setDaftarMenu] = useState([]);
  const [categoriYangDipilih, setCategoriYangDipilih] = useState(
    "Minuman (Coffee dan Non-Coffee)"
  );
  const [keranjangs, setKeranjangs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const getListKeranjang = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        setKeranjangs(keranjangs);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  useEffect(() => {
    axios
      .get(
        API_URL +
          "products?category.nama=" +
          categoriYangDipilih +
          "&nama_like=" +
          searchQuery
      ) // Include search query parameter in the API request
      .then((res) => {
        const daftarMenu = res.data;
        setDaftarMenu(daftarMenu);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
    getListKeranjang();
  }, [categoriYangDipilih, searchQuery]);

  const changeCategory = (value) => {
    setCategoriYangDipilih(value);
    setDaftarMenu([]);
    axios
      .get(
        API_URL +
          "products?category.nama=" +
          value +
          "&nama_like=" +
          searchQuery
      ) // Include search query parameter in the API request
      .then((res) => {
        const daftarMenu = res.data;
        setDaftarMenu(daftarMenu);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  const masukKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              getListKeranjang();
              swal({
                title: "Apalagi Yang Mau Dipesan Kak !",
                text:
                  "Apalagi Yang Mau Dipesan Kak ! " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 2000,
              });
            })
            .catch((error) => {
              console.log("Error ya", error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: "Apalagi Yang Mau Dipesan Kak !",
                text:
                  "Apalagi Yang Mau Dipesan Kak ! " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 2000,
              });
            })
            .catch((error) => {
              console.log("Error ya", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  };

  return (
    <div>
      <NavbarCoffee />
      <Container fluid className="mt-3">
        <Row>
          <ListCategories
            changeCategory={changeCategory}
            categoriYangDipilih={categoriYangDipilih}
          />
          <Col className="mt-3">
            <h4>
              <strong>Makanan Dan Minuman</strong>
            </h4>
            <hr />
            <input
              className="float-right"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name..." // Input field for search
            />
            <Row className="overflow-auto menu">
              {daftarMenu
                .filter((item) =>
                  item.nama.toLowerCase().includes(searchQuery.toLowerCase())
                ) // Filter menu items based on search query
                .map((item) => (
                  <DaftarMenu
                    key={item.id}
                    menu={item}
                    masukKeranjang={masukKeranjang}
                  />
                ))}
            </Row>
          </Col>
          <Hasil
            keranjangs={keranjangs}
            {...props}
            getListKeranjang={getListKeranjang}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
