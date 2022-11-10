import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [airData, setAirData] = useState([]);

  useEffect(() => {
    /* 언제 useEffect가 실행되는 지를 확인하기 위해서 console을 사용할 수 있음. 
     useEffect에는 async를 직접 사용할 수 없어서 이런 형식으로 만들어야 함. 
     */
    async function fetchAirData() {
      /* arrow function을 하고 싶으면..
        fetchAirData = async() => {} 으로 하면 됨. */
      const response = await axios.get("http://localhost:8000");

      const { location, time, pm10, no2 } = response.data;

      setAirData({ location, time, pm10, no2 });
    }
    fetchAirData();
    /*
     우리 예제의 경우는 component가 처음에 render 된 후 한번만 useEffect를 사용하면 되므로 
     useEffect의 second argument(dependency)를 []으로 하였음. 
     이런 경우가 많지는 않음. 가장 많은 경우는 second argument가 없는 경우임. 
     즉, component가 render 된 후 useEffect가 실행, 그후에 component가 rerender될 때 마다 
    useEffect가 실행됨. */
  }, []); // run the useEffect when the component is rendered first time only

  return (
    <>
      <ul>
        <li>위치: {airData.location}</li>
        <li>시각: {airData.time}</li>
        <li>pm10: {airData.pm10}</li>
        <li>no2: {airData.no2}</li>
      </ul>
    </>
  );
}

export default App;
