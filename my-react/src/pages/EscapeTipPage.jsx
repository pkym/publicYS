import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import data from "../db.json";
import earthquakeImg from "../assets/img/img_escape_earthquake.png";
import floodImg from "../assets/img/img_escape_flood.png";
import typoonImg from "../assets/img/img_escape_th.jpg";
import tsunamiImg from "../assets/img/img_escape_tsunami.jpg";
import fireImg from "../assets/img/img_escape_fire.png";
import avalancheImg from "../assets/img/img_escape_avalanche.jpg";
import explosionImg from "../assets/img/img_escape_explosion.png";
import heavysnowImg from "../assets/img/img_escape_heavySnow.png";
import breakdownImg from "../assets/img/img_escape_breakdown.jpg";

export default function EscapeTipPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState();
  const [escapeImg, setEscapeImg] = useState(earthquakeImg);
  const pathname = location.pathname;
  const pathId = pathname.substring(pathname.lastIndexOf('/')+1)*1;

  function activeTabHandler(title, id) {
    setActiveTab(title);
    navigate(`/escapeTip/${id}`);
    switch(title) {
      case '지진': setEscapeImg(earthquakeImg); break;
      case '홍수': setEscapeImg(floodImg); break;
      case '해일': setEscapeImg(tsunamiImg); break;
      case '태풍': case '호우': setEscapeImg(typoonImg); break;
      case '화재': setEscapeImg(fireImg); break;
      case '산사태': setEscapeImg(avalancheImg); break;
      case '폭발': setEscapeImg(explosionImg); break;
      case '대설': setEscapeImg(heavysnowImg); break;
      case '붕괴': setEscapeImg(breakdownImg); break;
      default: break;
    }
  }

  return (
    <>
      <h2>대피 요령</h2>
      <div className="tab-btns">
        {[...data].map((tab, idx) => (
          <button 
            key={idx}
            className={pathId === tab.id ? 'active' : undefined} 
            onClick={() => activeTabHandler(tab.title, tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <img src={escapeImg} alt={`${activeTab} 대피 요령`}/>
      </div>
    </>
  )
}