import earthquakeImg from '../assets/icon/earthquake.png'
import floodedImg from '../assets/icon/flooded.png'
import heilImg from '../assets/icon/heil.png'
import typoonImg from '../assets/icon/typoon.png'
import burningImg from '../assets/icon/burning.png'
import avalancheImg from '../assets/icon/avalanche.png'
import explosionImg from '../assets/icon/explosion.png'
import snowyImg from '../assets/icon/snowy.png'
import houImg from '../assets/icon/hou.png'
import collapseImg from '../assets/icon/collapse.png'


const ICONS = [
    {image: earthquakeImg, title:"지진"}, {image: floodedImg, title:"홍수"}, {image: heilImg,  title:"해일"}, {image: typoonImg,  title:"태풍"}, {image: burningImg,  title:"화재"}
    , {image: avalancheImg,  title:"산사태"}, {image: explosionImg,  title:"폭발"}, {image: snowyImg,  title:"대설"}, {image: houImg,  title:"호우"}, {image: collapseImg,  title:"붕괴"}
];

function Icons({ image, title}) {
    return (
      <>
        <img src={image} alt="..." />
        <span>{title}</span>        
      </>
    );
  }
  

export default function IconList(){
    return(
        <>
            {ICONS.map((item)=>(
                        <button><Icons key={item.title} {...item}/></button>
        ))}
        </>
  
      )
}