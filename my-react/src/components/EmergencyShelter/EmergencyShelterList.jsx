import { useState, useEffect } from "react";
import EmergencyShelterItem from "./EmergencyShelterItem";

// Provided API key and parameters
// const apiKey =
//   "Z67lDD5584KUF%2BGcDc2iij53yVrZ48k9IF62W7qZi0cg0N8tQz4EECztBTN3YhCbQN8j4VdztRhe3LEIKpyveQ%3D%3D";
// const pageNo = "1"; //페이지번호
// const numOfRows = "5"; //페이지당 개수

// API endpoint

export default function EmergencyShelterList(props) {
  const [sidoData, setSidoData] = useState([]);
  const [sigunguData, setSigunguData] = useState([]);
  const [emdongData, setEmdongData] = useState([]);
  const [shelterData, setShelterData] = useState([]);
  const [sidoCode, setSidoCode] = useState("");
  const [sigunguCode, setSigunguCode] = useState("");
  const [emdongCode, setEmdongCode] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [emptyData, setEmptyData] = useState(false);

  function selectSidoHandler() {
    const sidoUrl =
      "shelter/idsiSFK/neo/ext/json/arcd/bd/bd_sido.json?_=1728528610168";
    fetch(sidoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setSidoData(data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function getSidoCodeHandler(e) {
    setSidoCode(e.target.value);
    selectSigunguHandler(e.target.value);
  }

  function selectSigunguHandler(sidoCode) {
    const sigunguUrl = `shelter/idsiSFK/neo/ext/json/arcd/bd/${sidoCode}/bd_sgg.json?_=1728528610170`;
    fetch(sigunguUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setSigunguData(data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function getSigunguCodeHandler(e) {
    setSigunguCode(e.target.value);
    selectEmdongHandler(e.target.value);
  }

  function selectEmdongHandler(sigunguCode) {
    const emdongUrl = `shelter/idsiSFK/neo/ext/json/arcd/bd/${sidoCode}/${sigunguCode}/bd_emd.json?_=1728528610171`;
    fetch(emdongUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setEmdongData(data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function getEmdongCodeHandler(e) {
    setEmdongCode(e.target.value);
  }

  function searchShelterHandler() {
    if (sidoCode.length === 0 || sigunguCode.length === 0 || emdongCode.length === 0) {
      alert('위치 정보를 모두 입력해주세요');
      return;

    } else {
      setIsSelected(true);
      const shelterUrl = `shelter/idsiSFK/neo/ext/json/outhouseList/outhouseList_${emdongCode}.json?_=1728528610172`;
      fetch(shelterUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          setShelterData(data);
          data.length === 0 ? setEmptyData(true) : setEmptyData(false);
          data.length > 3 ? props.setShowMoreBtn(true) : props.setShowMoreBtn(false);
        })
        .catch((error) => {
          console.log("error:" + error);
        });
    };
  }

  useEffect(() => {
    selectSidoHandler();  // 첫 렌더링 시 시도 정보 미리 불러오기
  }, []);

  return (
    <>
      <div className="form-wrap">
        <div className="form-selects">
          <select
            className="form-select"
            name="sido"
            id="sido"
            onChange={getSidoCodeHandler}
          >
            <option value="1">시도 선택</option>
            {sidoData.map((data) => (
              <option key={data.SIDO_CD} value={data.SIDO_CD}>
                {data.SIDO_NM}
              </option>
            ))}
          </select>
          <select
            className="form-select"
            name="sigungu"
            id="sigungu"
            onChange={getSigunguCodeHandler}
          >
            <option value="1">시군구 선택</option>
            {sigunguData.map((data) => (
              <option key={data.SGG_CD} value={data.SGG_CD}>
                {data.SGG_NM}
              </option>
            ))}
          </select>
          <select
            className="form-select"
            name="emdong"
            id="emdong"
            onChange={getEmdongCodeHandler}
          >
            <option value="1">읍면동 선택</option>
            {emdongData.map((data) => (
              <option key={data.EMD_CD} value={data.EMD_CD}>
                {data.EMD_NM}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="btn-search"
          onClick={searchShelterHandler}
        >
          검색
        </button>
      </div>
      {
        (!isSelected ? <p>위치를 선택해주세요.</p> : 
          !emptyData ? (
            shelterData.slice(0,3).map(data => (
              <EmergencyShelterItem params={data} key={data.VT_ACMD_FCLTY_NM} />
            ))
          ) : <p>데이터가 없습니다.</p>
        )
      }
    </>
  );
}
