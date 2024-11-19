import React, { useState } from 'react';
import EmergencyShelterList from '../components/EmergencyShelter/EmergencyShelterList';

export default function ShelterInfoPage() {
  const [shelterMoreBtn, setShelterMoreBtn] = useState(false);

  return (
    <>
      <h2>대피소 정보</h2>
      <div className="emergency-shelter-wrap">
        <EmergencyShelterList numOfRows={undefined} setShelterMoreBtn={setShelterMoreBtn} />
      </div>
    </>
    
  )
}