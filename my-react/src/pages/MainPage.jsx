import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IconList from "../components/IconList";
import SafeTextList from "../components/SafeText/SafeTextList";
import EmergencyShelterList from "../components/EmergencyShelter/EmergencyShelterList";
import { DataContext } from "../context/shelter-context";

export default function MainPage(props) {
  const [shelterMoreBtn, setShelterMoreBtn] = useState(false);
  const [safeTextMoreBtn, setSafeTextMoreBtn] = useState(false);
  const [shelterMoreData, setShelterMoreData] = useState(null);
  const navigate = useNavigate();
  const { setData } = useContext(DataContext); // context 파일에서 설정한 변수/함수명과 다르면 안됨

  // 오늘 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const todayDate = `${year}${month}${day}`;

  function shelterMoreHandler() {
    setData(shelterMoreData);
    navigate("/shelterInfo");
  }

  return (
    <>
      <h4>대피 요령</h4>
      <IconList />
      <h4>최근 재난 문자</h4>
      <div className="box">
        <ul className="safe-text-ul">
          <SafeTextList
            setSafeTextMoreBtn={setSafeTextMoreBtn}
            pageNo="1"
            numOfRows="3"
            date={todayDate}
          />
        </ul>
        {safeTextMoreBtn && (
          <button
            type="button"
            className="btn-more"
            onClick={() => navigate("/safeText")}
          >
            더보기
          </button>
        )}
      </div>
      <h4>긴급 대피소</h4>
      <p className="tip">
        * 3개까지만 표시됩니다. 자세한 정보는 '대피소 정보'를 확인해주세요.
      </p>
      <div className="box">
        <div className="emergency-shelter-wrap">
          <EmergencyShelterList
            numOfRows="3"
            setShelterMoreBtn={setShelterMoreBtn}
            setShelterMoreData={setShelterMoreData}
          />
        </div>
        {shelterMoreBtn && (
          <button
            type="button"
            className="btn-more"
            onClick={shelterMoreHandler}
          >
            더보기
          </button>
        )}
      </div>
    </>
  );
}
