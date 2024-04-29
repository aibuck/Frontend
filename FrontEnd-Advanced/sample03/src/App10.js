// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-bootstrap";
// import axios from "axios";

// //https://dog.ceo/api/breeds/image/random

// async function getDogData() {
//   return await axios.get(`https://dog.ceo/api/breeds/image/random`);
// }

// export default function App() {
//   const [dogList, setDogList] = useState([]);
//   return (
//     <>
//       <button
//         onClick={() => {
//           getDogData()
//             .then((response) => {
//               setDogList(response.data);
//             })
//             .catch((error) => {
//               alert(error.message);
//             });
//         }}
//       >
//         이미지 가져오기
//       </button>

//       <Carousel className="w-50">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="http://via.placeholder.com/1280x960"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>첫 번째 슬라이드</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="http://via.placeholder.com/1280x960"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>두 번째 슬라이드</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="http://via.placeholder.com/1280x960"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>세 번째 슬라이드</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// }

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

// Dog API URL
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

export default function App() {
  // useState를 사용하여 dogList 상태와 setDogList 함수를 생성합니다.
  const [dogList, setDogList] = useState(Array(3).fill(null));

  // Dog API에서 데이터를 가져오는 비동기 함수를 정의합니다.
  async function getDogData() {
    try {
      const response = await axios.get(DOG_API_URL);
      return response.data.message; // 이미지 URL 반환
    } catch (error) {
      console.error("Error fetching dog data:", error);
      throw new Error("Failed to fetch dog data");
    }
  }

  // 이미지 가져오기 버튼을 클릭했을 때 호출되는 함수입니다.
  async function handleGetImages() {
    try {
      const newDogList = await Promise.all(
        // 새 이미지를 가져오는 비동기 요청을 실행합니다.
        Array(3)
          .fill()
          .map(async () => await getDogData())
      );
      setDogList(newDogList); // 가져온 이미지들을 상태에 업데이트합니다.
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {/* 이미지 가져오기 버튼 */}
      <button onClick={handleGetImages}>이미지 가져오기</button>

      {/* Carousel 컴포넌트 */}
      <Carousel className="w-50">
        {/* dogList 상태에 있는 각 이미지를 캐러셀 아이템으로 렌더링합니다. */}
        {dogList.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imageUrl || "http://via.placeholder.com/1280x960"}
              alt={`Slide ${index + 1}`}
              style={{ width: "300px", height: "300px" }}
            />
            <Carousel.Caption>
              <h3>{`Slide ${index + 1}`}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
