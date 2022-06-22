import './App.css';
import SmallBox from './SmallBox';

function App() {
    // function handleSubmit(e){
    //   console.log(e.target.value);
    //    e.preventDefault();
      
    // }
    //  function handleChange(e) {
    //    console.log(e.target.value);
    //  }

  return (
    <div className="app">
      {/* <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value="box" onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}

      <SmallBox />
    </div>
  );
}

export default App;
