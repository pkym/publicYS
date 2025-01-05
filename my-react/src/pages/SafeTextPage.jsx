import React from "react";
import SafeTextMoreList from "../components/SafeText/SafeTextMoreList";
import getToday from "../components/util/date";

export default function SafeTextPage(props) {
  const todayDate = getToday();

  return (
    <>
      <h2>재난 문자</h2>
      <div className="safeText-wrap">
        <SafeTextMoreList pageNo="1" numOfRows="30" date={todayDate} />
      </div>
    </>
  );
}
