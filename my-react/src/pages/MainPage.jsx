import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconList from "../components/IconList";
import SafeTextList from "../components/SafeText/SafeTextList"
import EmergencyShelterList from "../components/EmergencyShelter/EmergencyShelterList";

export default function MainPage() {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <h4>대피 요령</h4>
      <IconList />
      <h4>최근 재난 문자</h4>
      <div className="box">
        <ul className="safe-text-ul">
          <SafeTextList pageNo='1' numOfRows='3'/>
        </ul>
        <button type="button" className="btn-more">더보기</button>
      </div>
      <h4>긴급 대피소</h4>
      <p className='tip'>* 3개까지만 표시됩니다. 자세한 정보는 '대피소 정보'를 확인해주세요.</p>
      <div className="box">
        <ul className="emergency-shelter-ul">
          <EmergencyShelterList setShowMoreBtn={setShowMoreBtn}/>
        </ul>
        {showMoreBtn && <button type="button" className="btn-more" onClick={() => navigate('/shelterInfo')}>더보기</button>}
      </div>
    </>
  );
}
