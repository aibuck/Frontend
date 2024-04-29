import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

async function getDogData(number) {
  return await axios.get(`https://dog.ceo/api/breeds/image/random/${number}`);
}

export default function App() {
  const [dogList, setDogList] = useState([]);
  return (
    <>
      <button
        onClick={() => {
          getDogData(3)
            .then((response) => {
              setDogList(response.data.message);
            })
            .catch((error) => {
              alert(error.message);
            });
        }}
      >
        요청
      </button>
      {dogList.length !== 0 && (
        <Carousel className="w-50">
          {dogList.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item}
                  alt={item}
                  width="100%"
                  height="200"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
}
