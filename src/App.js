//import logo from './logo.svg';
import './App.css';
import myImage from "./picinsrc.jpg"
import "./style.css"

function App() {
  return (
  <>
  <div style={{ border:'solid 1px black',maxWidth:'100vw' }}>
    <h1 className="title red">El Aoun Sabri</h1>
    <br/>
    <img src={myImage} alt="myImage"/>
    <br/>
    <img src="/picinpublic.jpg" alt="globalvillage2k18"/>
  </div>
  </>
  )
}

export default App;
