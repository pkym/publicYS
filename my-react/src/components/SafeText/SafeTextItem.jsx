export default function SafeTextItem({params}){
  return(
    <>
      <li className='text-item'>
          <div className="text-item-header">
              <span className="text-type">{params.EMRG_STEP_NM}문자</span>
              <span className="text-date">{params.CRT_DT}</span>
          </div>
          <div className="text-item-content">
            <p>{params.MSG_CN}</p>
            <p className="sm">수신지역: {params.RCPTN_RGN_NM}</p>
          </div>
      </li>
    </>
  )
}