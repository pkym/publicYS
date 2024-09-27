import './App.css';
import './styles/main.css'
import SafeText from './components/SafeText';
import LeftSection from './components/LeftSection';
import IconList from './components/RightSection';

function App() {
  
  const today = new Date().toString().padStart(2, '0');;

  console.log(today);
  return (
    <div className="background">
      <LeftSection/>
      <section className="right">
        
        <h2>재난보관함</h2>
        <div className="content">
          <h4>대피요령</h4>
          <div className="icon-box">
            <IconList/>
          </div>
          <h4>최근재난문자</h4>
          <div>
            {/* <SafeText pageNo='1' numOfRows='3'/> */}
          </div>
          <div>

          </div>
        
        </div>
      </section>
    </div>
  );
};

export default App;
