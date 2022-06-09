// import logo from './logo.svg';
import './App.css';
import SmallBox from './SmallBox';
import BigBox from './components/BigBox';

function App() {
  function handleClick(e){
    console.log(e.target)
  }


  return (
    <div className="app">
      <SmallBox />

      <button onClick={(e) => handleClick(e)}>click me</button>
    </div>
  );
}

export default App;
