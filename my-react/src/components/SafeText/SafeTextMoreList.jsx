import { useState, useEffect } from "react";
import SafeTextItem from "./SafeTextItem";

const apiKey = "ST9W4WW508Z6XV06";

export default function SafeTextMoreList(props) {
  const [data, setData] = useState([]);
  const [emptyData, setEmptyData] = useState(false);

  const url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${props.pageNo}&numOfRows=${props.numOfRows}&crtDt=${props.date}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (
          data.header.resultMsg ===
          "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR"
        ) {setData(data.header.resultMsg);} 
        else {
          setData(data.body);
          if (data.length === 0) {
            setEmptyData(true);
          } else {
            setEmptyData(false);
          }
        }
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }, []);

  return (
    <>
      {/* {data === "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR" ? (
        <p>API 요청 일일 제한 횟수를 초과했습니다.</p>
      ) : !emptyData ? (
        Object.values(data).map((values) => (
          <SafeTextItem params={values} key={values.SN} />
        ))
      ) : (
        <p>데이터가 없습니다.</p>
      )} */}
      {data ? Object.values(data).map((values) => (
          <SafeTextItem params={values} key={values.SN} />
        ))
       : (
        <p>데이터가 없습니다.</p>
      )}
    </>
  );
}