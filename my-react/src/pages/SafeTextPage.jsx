import React, {useState, useEffect} from 'react';
import SafeTextMoreList from "../components/SafeText/SafeTextMoreList";
import getToday from '../components/util/date';

export default function SafeTextPage() {
  const todayDate = getToday();
  const [sidoData, setSidoData] = useState([]);
  const [sidoCode, setSidoCode] = useState("");

  function searchSafeTextHandler() {
    console.log("test")
  }

  // 발송 지역 api
  // const url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${props.pageNo}&numOfRows=${props.numOfRows}&crtDt=${props.date}`;

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.status} ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (
  //         data.header.resultMsg ===
  //         "LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR"
  //       ) {setData(data.header.resultMsg);} 
  //       else {
  //         setData(data.body);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error:" + error);
  //     });
  // }, []);

  return (
    <>
      <h2>재난 문자</h2>
      <div className="safeText-wrap">
        <div className="form-wrap">
          <div className="form-selects">
            <select
              className="form-select"
              name="sido"
              id="sido"
              // onChange={getSidoCodeHandler}
              onClick={e => e.target.options[0].text = "발송 지역"}
            >
              {/* <option value="1">{shelterCtxDataOps ? shelterCtxDataOps[0] : "발송 지역"}</option> */}
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
          <SafeTextMoreList
            pageNo="1"
            numOfRows="30"
            date={todayDate}
          />
        </ul>
      </div>
    </>
  )
}