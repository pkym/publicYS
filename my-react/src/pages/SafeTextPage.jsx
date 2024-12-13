import React from 'react';
import SafeTextMoreList from "../components/SafeText/SafeTextMoreList";
import getToday from '../components/util/date';

export default function SafeTextPage() {
  const todayDate = getToday();

  function searchSafeTextHandler() {
    console.log("test")
  }

  return (
    <>
      <h2>재난 문자</h2>
      <div className="safeText-wrap">
        <div className="form-wrap">
          <div className="form-selects">
            <select
              className="form-select"
              name="loc"
              id="loc"
              // onChange={getSidoCodeHandler}
              onClick={e => e.target.options[0].text = "발송 지역"}
            >
              <option value="1">발송 지역</option>
              {/* {sidoData.map((data) => (
                <option key={data.SIDO_CD} value={data.SIDO_CD}>
                  {data.SIDO_NM}
                </option>
              ))} */}
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