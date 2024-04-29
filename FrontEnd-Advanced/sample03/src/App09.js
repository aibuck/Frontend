// import axios from "axios";
// import React, { useState } from "react";

// const App09 = () => {
//   const [image, getimage] = useState(undefined);
//   <form>
//     <input type="number" min={0} max={50} onClick={() => {}}></input>
//     <input
//       type="submit"
//       value="요청"
//       onClick={(e) => {
//         // e.target.value;
//       }}
//     ></input>
//   </form>;
//   return <></>;
// };

// export default App09;

import axios from "axios";
import { useState } from "react";

//https://dog.ceo/api/breeds/image/random

async function getDogData(number) {
  return await axios.get(`https://dog.ceo/api/breeds/image/random/${number}`);
}

function App() {
  const [number, setNumber] = useState(2);
  const [dogList, setDogList] = useState([]);
  return (
    <>
      <input
        type="number"
        min={1}
        value={number}
        max={50}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          getDogData(number)
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
      <div>
        {dogList.map((item, index) => {
          return (
            <img src={item} key={index} style={{ width: 200, height: 200 }} />
          );
        })}
      </div>
    </>
  );
}

export default App;
