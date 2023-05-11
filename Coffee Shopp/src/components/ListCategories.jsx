import React, { useState, useEffect } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const ICon = ({ nama }) => {
  if (nama === "Minuman (Coffee dan Non-Coffee")
    return <FontAwesomeIcon icon={faCoffee} className="icon" />;
  if (nama === "Makanan Ringan")
    return <FontAwesomeIcon icon={faCheese} className="icon me-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="me-2" />;
};

const ListCategories = ({ changeCategory, categoriYangDipilih }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => {
        const categories = res.data;
        setCategories(categories);
      })
      .catch((error) => {
        console.log("Error ya", error);
      });
  }, []);

  return (
    <Col md={2} className="mt-3">
      <h4>
        <strong>Category </strong>
      </h4>
      <hr />
      <ListGroup className="group">
        {categories.map((category) => (
          <ListGroup.Item
            key={category.id}
            onClick={() => changeCategory(category.nama)}
            className={
              categoriYangDipilih === category.nama && "category-aktif"
            }
          >
            <h5>
              <ICon nama={category.nama} /> {category.nama}
            </h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default ListCategories;
