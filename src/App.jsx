import Logo from "./logo.png";
import "./App.css";
import styled from "styled-components";
import { ObjectDetector } from "./components/objectDetector";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  // background-color: #1d2475;
  background-color: #3f3d42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <div style={{ fontSize: 28, }}> 텐서플로우를 활용한 객체인식</div>
      <span style={{fontSize:18,fontWeight:600, padding:30,marginBottom: 10,}}>ICT융합캡스톤디자인 이승진</span>
      <ObjectDetector />
    
      <div className="row"> 
        {/* <img src='http://ict.hanyang.ac.kr/img/logo_ict.gif' /> */}
        <a href="http://ict.hanyang.ac.kr/" target="_blank" rel="noreferrer">
        <img src={Logo} style={{ width: 120, marginTop: 50 }} />
        </a>
        
      </div>
    </AppContainer>
  );
}

export default App;
