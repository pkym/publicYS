import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconList from "../components/IconList";
import SafeTextList from "../components/SafeText/SafeTextList"
import EmergencyShelterList from "../components/EmergencyShelter/EmergencyShelterList";

export default function MainPage() {
  const [shelterMoreBtn, setShelterMoreBtn] = useState(false);
  const [safeTextMoreBtn, setSafeTextMoreBtn] = useState(false);
  const navigate = useNavigate();

  // 오늘 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const todayDate = `${year}${month}${day}`;

  return (
    <>
      <h4>대피 요령</h4>
      <IconList />
      <h4>최근 재난 문자</h4>
      <div className="box">
        <ul className="safe-text-ul">
          <SafeTextList setSafeTextMoreBtn={setSafeTextMoreBtn} pageNo='1' numOfRows='3' date={todayDate}/>
        </ul>
        {safeTextMoreBtn && <button type="button" className="btn-more" onClick={() => navigate('/safeText')}>더보기</button>}
      </div>
      <h4>긴급 대피소</h4>
      <p className='tip'>* 3개까지만 표시됩니다. 자세한 정보는 '대피소 정보'를 확인해주세요.</p>
      <div className="box">
        <ul className="emergency-shelter-ul">
          <EmergencyShelterList setShelterMoreBtn={setShelterMoreBtn}/>
        </ul>
        {shelterMoreBtn && <button type="button" className="btn-more" onClick={() => navigate('/shelterInfo')}>더보기</button>}
      </div>
    </>
  );
}
