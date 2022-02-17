import './App.css';
import logo from './images/coffee_logo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{width:400,height:400}} alt="logo"/>
        <div>
          <h1 style={{letterSpacing:4, fontSize:46, margin:6}}>COMING SOON</h1>
          <h5 style={{fontSize:22, margin:6,fontWeight:400}}>Công ty cổ phần Grati Coffee</h5>
          <h6 style={{fontSize:14,margin:4, fontWeight:300}}>Hotline : 0918.79.68.73 - 0945.79.68.73</h6>
        </div>
      </header>
    </div>
  );
}

export default App;
