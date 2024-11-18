import React, { useState } from 'react';
import data from "../db.json";
import earthquakeImg from "../assets/img/img_escape_earthquake.png";
import floodImg from "../assets/img/img_escape_th.jpg"

export default function EscapeTipPage() {
  const [activeTab, setActiveTab] = useState('지진');
  const [escapeImg, setEscapeImg] = useState(earthquakeImg);

  function activeTabHandler(title) {
    setActiveTab(title);
    switch(title) {
      case '지진': setEscapeImg(earthquakeImg); break;
      case '홍수': setEscapeImg(floodImg); break;
      default: break;
    }
  }

  return (
    <>
      <h2>대피 요령</h2>
      <div className="tab-btns">
        {data.map((tab, idx) => (
          <button key={idx} onClick={() => activeTabHandler(tab.title)}>{tab.title}</button>
        ))}
      </div>
      <div className="tab-content">
        <img src={escapeImg} alt={`${activeTab} 대피 요령`}/>
      </div>
    </>
    
  )
}