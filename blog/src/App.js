import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '데이터 바인딩'
  return (
    <div className="App">
      <div className="black-nav">
          <div>테스트</div>
      </div>
      <img src={logo}></img>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
