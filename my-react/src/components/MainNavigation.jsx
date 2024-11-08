import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImg from "../assets/icon/home-active.svg"
import archiveImg from "../assets/icon/archive-stack-line.svg"
import runImg from "../assets/icon/run-fill.svg"
import alarmImg from "../assets/icon/alarm-warning-line.svg"
import peopleImg from "../assets/icon/group-line.svg"

export default function MainNavigation() {
  const navigate = useNavigate();
  return (
    <nav className="dockbar">
      <button type="button" className="active" onClick={() => navigate('/')}>
        <img src={homeImg} alt=""/>
        <span>메인</span>
      </button>
      <button type="button" onClick={() => navigate('/safeText')}>
        <img src={archiveImg} alt=""/>
        <span>재난 문자</span>
      </button>
      <button type="button" onClick={() => navigate('/shelterInfo')}>
        <img src={runImg} alt=""/>
        <span>대피소 정보</span>
      </button>
      <button type="button" onClick={() => navigate('/escapeTip')}>
        <img src={alarmImg} alt=""/>
        <span>대피 요령</span>
      </button>
      <button type="button" onClick={() => navigate('/liveChat')}>
        <img src={peopleImg} alt=""/>
        <span>커뮤니티</span>
      </button>
    </nav>
  )
}