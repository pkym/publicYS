import React from 'react';
import SafeTextMoreList from "../components/SafeText/SafeTextMoreList";

export default function SafeTextPage() {
  return (
    <>
      <h2>재난 문자</h2>
      <div className="safeText-wrap">
        <SafeTextMoreList
          numOfRows={undefined}
        />
      </div>
    </>
  )
}