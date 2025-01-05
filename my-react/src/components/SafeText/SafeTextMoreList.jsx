import { useState, useEffect } from "react";
import SafeTextItem from "./SafeTextItem";

const apiKey = "ST9W4WW508Z6XV06";

export default function SafeTextMoreList(props) {
  const [sidoData, setSidoData] = useState([]);
  const [sidoName, setSidoName] = useState("");
  const [data, setData] = useState([]);

  // 전체 지역 조회 url
  const url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${props.pageNo}&crtDt=${props.date}`;

  // 발송 지역별 url
  const sendingAreaUrl = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=1&crtDt=${props.date}&rgnNm=${sidoName}`;

  function selectSidoHandler() {
    const sidoUrl =
      "shelter/idsiSFK/neo/ext/json/arcd/bd/bd_sido.json?_=1728528610168";
    fetch(sidoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setSidoData(data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function setSidoNameHandler(e) {
    setSidoName(e.target.selectedOptions[0].text);
  }

  function searchSafeTextHandler() {
    sidoName !== "발송 지역" ? fetchByRegionData() : fetchData();
  }

  function fetchData() {
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
        ) {
          setData(data.header.resultMsg);
        } else {
          setData(data.body);
        }
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function fetchByRegionData() {
    fetch(sendingAreaUrl)
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
        ) {
          setData(data.header.resultMsg);
        } else {
          setData(data.body);
        }
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  useEffect(() => {
    fetchData();
    selectSidoHandler(); // 초기 렌더링 시 전체 시,도 데이터 불러오기
  }, []);

  return (
    <>
      <div className="form-wrap">
        <div className="form-selects">
          <select
            className="form-select"
            name="sido"
            id="sido"
            onChange={setSidoNameHandler}
            onClick={(e) => (e.target.options[0].text = "발송 지역")}
          >
            <option value="1">발송 지역</option>
            {sidoData.map((data) => (
              <option key={data.SIDO_CD} value={data.SIDO_CD}>
                {data.SIDO_NM}
              </option>
            ))}
          </select>
          <select className="form-select" name="disasterCtg" id="disasterCtg">
            <option value="1">재난 유형</option>
          </select>
        </div>
        <button
          type="button"
          className="btn-search"
          onClick={searchSafeTextHandler}
        >
          검색
        </button>
      </div>
      <ul className="safe-text-ul">
        {/* {data === "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR" ? (
          <p>API 요청 일일 제한 횟수를 초과했습니다.</p>
        ) : !emptyData ? (
          Object.values(data).map((values) => (
            <SafeTextItem params={values} key={values.SN} />
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )} */}
        {data ? (
          Object.values(data)
            .sort((a, b) => b.SN - a.SN) // 가장 최근 문자부터
            .map((values) => <SafeTextItem props={values} key={values.SN} />)
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </ul>
    </>
  );
}
