import {useState, useEffect} from 'react';

// Provided API key and parameters
const apiKey = 'ST9W4WW508Z6XV06';
// const pageNo = '1'; //페이지번호
// const numOfRows = '100'; //페이지당 개수
// const crtDt = '20240101'; //조회시작일자
// const rgnNm = '1'; //지역명

// API endpoint

export default function EmergencyShelterList({}){
  // const [data, setData] = useState([]);
  
  // const url = `safeText/V2/api/DSSP-IF-00247?serviceKey=${apiKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`;

  // useEffect(() => {
//     fetch(url)
//     .then((response) => {
//         console.log(response)
//         if (!response.ok) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         return response.json(); 
//     })
//     .then((data) => {
//         setData(data.body);
//     })
//     .catch((error) => {
//         console.log("error:"+error)
//     });
  // }, [url]);
  
  return (
    <>
      {/* {data ? 
        // Display fetched data
        (
            Object.values(data).map((values)=>(
                <SafeTextItem params={values}/>
            ))
        ) : (
            <p>Loading...</p> // Show loading message while fetching
        )
      } */}
      <li>
        <div className="list-header">
          <span className="chip">민방위대피시설</span>
        </div>
        <h3 className='title'>
          대방아파트 지하 1층 대피소
        </h3>
        <h6 className='desc'>
          전라남도 나주시 대호길 12-5
        </h6>
      </li>
      <li>
        <div className="list-header">
          <span className="chip">공원</span>
        </div>
        <h3 className='title'>
          학여울근린공원
        </h3>
        <h6 className='desc'>
          서울특별시 강남구 개포로 509
        </h6>
      </li>
    </>
  )
}