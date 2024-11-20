import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EmergencyShelterList from "../components/EmergencyShelter/EmergencyShelterList";

export default function ShelterInfoPage() {
  const location = useLocation();
  const selectedLocation = location.state || {
    default: "No Data",
  };
  const [shelterMoreBtn, setShelterMoreBtn] = useState(false);

  return (
    <>
      <h2>대피소 정보</h2>
      <div className="emergency-shelter-wrap">
        <EmergencyShelterList
          numOfRows={undefined}
          setShelterMoreBtn={setShelterMoreBtn}
          selectedLocation={selectedLocation}
        />
      </div>
    </>
  );
}
