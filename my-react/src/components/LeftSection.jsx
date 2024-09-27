import boxImg from '../assets/img/box.png'
import runImg from '../assets/img/run.png'
import warnImg from '../assets/img/warn.png'

const INFOS = [
    {
        image: boxImg,
        title:"지역별 재난 정보를 모아놨어요",
        content: (<b>우리 동네 재난 정보, 궁금하지 않으셨나요?<br />
        위치 선택으로 다른 지역의 정보도 볼 수 있어요.</b>)
    },
    {
        image: runImg,
        title:"근처 대피소를 알려줘요",
        content:(<b>"선택한 위치 주변 대피소들을<br /> 
        가까운 거리순으로 확인할 수 있어요."</b>)
    },
    {
        image: warnImg,
        title:"대피 요령 정보를 한눈에",
        content:(<b>"반드시 알아야 할 대피 요령 정보들을<br /> 
        위급한 순간 바로 확인하고 대피하세요."</b>)
    }
];

function LiList({ image, title, content }) {
    return (
      <li>
        <img src={image} alt="..." />
        <div className="text-content">
            <h5>{title}</h5>
            <span>{content}</span>
        </div>
      </li>
    );
  }
  

export default function LeftSection(){
    return(
        <section className="left">
            <div>
            <h1>우리동네</h1>
            <h1><span>재난</span> 내역,</h1>
            <h1><span>보관함</span>에서</h1>
            <h1>확인하세요</h1>
            </div>
            <div>
                <ul>
                    {INFOS.map((item)=>(
                        <LiList key={item.title} {...item}/>
                    ))}
                </ul>       
            </div>
        </section>
    )
}