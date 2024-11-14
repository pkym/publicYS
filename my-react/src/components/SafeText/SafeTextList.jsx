import { useState, useEffect } from "react";
import SafeTextItem from "./SafeTextItem";

// Provided API key and parameters
const apiKey = "ST9W4WW508Z6XV06";
// const rgnNm = '1'; //지역명

// API endpoint

export default function SafeTextList({ pageNo, numOfRows, date, regNum }) {
  const [data, setData] = useState([]);

  const url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&crtDt=${date}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.body);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }, [url]);

  return (
    <>
      {data ? (
        Object.values(data).map((values) => (
          <SafeTextItem params={values} key={values.SN} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
