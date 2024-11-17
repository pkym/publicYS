import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import data from "../db.json";

export default function EscapeTipPage() {
  const {id} = useParams();

  return (
    <>
      <h2>대피 요령</h2>
      <ul className="tab-btns">
        {[...data].map((tab, idx) => (
          <li key={idx} isFocused={String(idx) === id}>
            <Link to={`/escapeTip/${idx+1}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <img src={data[id-1].imgUrl} alt={data[id-1].alt}/>
      </div>
    </>
    
  )
}