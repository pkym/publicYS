import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import homeActiveImg from "../assets/icon/home-fill.svg"
import homeImg from "../assets/icon/home-line.svg"
import safeTextImg from "../assets/icon/archive-stack-line.svg"
import safeTextActiveImg from "../assets/icon/archive-stack-fill.svg"
import runImg from "../assets/icon/run-line.svg"
import runActiveImg from "../assets/icon/run-fill.svg"
import alarmImg from "../assets/icon/alarm-warning-line.svg"
import alarmActiveImg from "../assets/icon/alarm-warning-fill.svg"
import peopleImg from "../assets/icon/group-line.svg"
import peopleActiveImg from "../assets/icon/group-fill.svg"

export default function MainNavigation() {
  const [isActive, setIsActive] = useState("home");

  return (
    <nav className="dockbar">
      <NavLink to="/" onClick={() => setIsActive("home")}>
        <img src={isActive === "home" ? homeActiveImg : homeImg} alt=""/>
        <span>메인</span>
      </NavLink>
      <NavLink to="/safeText" onClick={() => setIsActive("safeText")}>
        <img src={isActive === "safeText" ? safeTextActiveImg : safeTextImg} alt=""/>
        <span>재난 문자</span>
      </NavLink>
      <NavLink to="/shelterInfo" onClick={() => setIsActive("shelterInfo")}>
        <img src={isActive === "shelterInfo" ? runActiveImg : runImg} alt=""/>
        <span>대피소 정보</span>
      </NavLink>
      <NavLink to="/escapeTip" onClick={() => setIsActive("escapeTip")}>
        <img src={isActive === "escapeTip" ? alarmActiveImg : alarmImg} alt=""/>
        <span>대피 요령</span>
      </NavLink>
      <NavLink to="/liveChat" onClick={() => setIsActive("liveChat")}>
        <img src={isActive === "liveChat" ? peopleActiveImg : peopleImg} alt=""/>
        <span>실시간 대화</span>
      </NavLink>
    </nav>
  )
}