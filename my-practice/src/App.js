import "./App.css";
import Header from "./component/Header";
import Movie from "./component/Movie";
import movies from "./movie.json";
// import Student from "./component/Student";

function App() {
  // let name = "Rutvik";

  return (
    <div className="App">
      {/* <h1>{name}</h1> */}
      {/* <Student 
        name="Rutvik" 
        age="19"
      /> */}
      <Header />
      <div className="main">
        {movies.map((element) => {
          return (
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
