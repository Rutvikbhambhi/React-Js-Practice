import './App.css';
import User from './User';
// alert("Hello")
function App() {
  var data="Rutvik"

  function apple(){
    data="Rahul";
    alert(data);
  }

  return (
    <div className="App">
        <h1>Rutvik</h1>
        <button onClick={()=>apple()}>Click Me</button>
        <User />
        {/* <Apple /> */}
    </div>
  );
}

export default App;
