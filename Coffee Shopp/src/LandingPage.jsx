import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import gambar1 from "./Carosel/CRS1.jpg";
import gambar2 from "./Carosel/CRS2.jpg";
import gambar3 from "./Carosel/CRS3.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand href="#">
            <strong>Nando</strong> Coffee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel style={{ width: "100%" }}>
        <Carousel.Item>
          <img className="d-block w-100 mb-6" src={gambar1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <>
        {/* Start menu Area */}
        <section className="menu-area section-gap" id="coffee">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">
                    What kind of Coffee we serve for you
                  </h1>
                  <Button
                    className="bg-dark text dark justify-content-center"
                    as={Link}
                    to="/home"
                  >
                    Start Order
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-menu">
                  <div className="title-div justify-content-between d-flex">
                    <h4>French Fries</h4>
                    <p className="price float-right">30,000</p>
                  </div>
                  <p>Menggunakan Kentang Pilihan Dari US.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-menu">
                  <div className="title-div justify-content-between d-flex">
                    <h4>Cheesee Burger</h4>
                    <p className="price float-right">59,000</p>
                  </div>
                  <p>
                    Burger dengan Keju slice didalamnya serta menggunakan Roti
                    yang sangat lembut.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-menu">
                  <div className="title-div justify-content-between d-flex">
                    <h4>Hot Tea</h4>
                    <p className="price float-right">15,000</p>
                  </div>
                  <p>
                    Teh manis Hangat dengan Teh yang bersalal dari kebuh nya
                    langsung.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-menu">
                  <div className="title-div justify-content-between d-flex">
                    <h4>Sweet Tea</h4>
                    <p className="price float-right">25,000</p>
                  </div>
                  <p>
                    Es Teh Manis yang dingin dapat membantu menyegarkan
                    tenggorokan dengan daun teh pilihan.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-menu">
                  <div className="title-div justify-content-between d-flex">
                    <h4>Orange Juice</h4>
                    <p className="price float-right">24,000</p>
                  </div>
                  <p>Es Jeruk dengan 100% murni perasan jeruk Sunkist.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-menu">
                  <div className="title-div justify-content-between d-flex">
                    <h4>Coffee Latte</h4>
                    <p className="price float-right">29,000</p>
                  </div>
                  <p>
                    Kopi dengan perpaduan susu fullcream yang dapat menggugah
                    selera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End menu Area */}
      </>
    </div>
  );
};

export default LandingPage;
