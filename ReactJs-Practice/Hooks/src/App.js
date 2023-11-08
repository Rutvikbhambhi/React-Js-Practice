import "./App.css";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Todos from "./UseCallback/Todos";

// function App(props) {
// // useState
//   const [count, setCount] = useState(0);
//   const [online, setOnline] = useState(null);

// // useEffect
//   useEffect(() => {
//     document.title = `You Clicked ${count} times`;
//   });

//   // return <div>I'm logging to console "{message}"</div>;

//   return (
//     <div className="App">
//       {/* useState */}
//       <h2>Rutvik {count}</h2>
//       <button onClick={ () => setCount (count + 1)}>Increament</button>
//       <button onClick={ () => setCount (count - 1)}>Decreament</button>
//     </div>
//   );
// }

// export default App;

// useReducer
// function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
//   throw Error('Unknown action.');
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
{
  /* <h1>useReducer</h1> */
}
//       <button onClick={() => {
//         dispatch({ type: 'incremented_age' })
//       }}>
//         Increment age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }

// useContext
// import Auth from "./UseContext/Auth";
// import AuthContext from "./UseContext/auth-context";

// const App = () => {
//   //using the state to dynamicallly pass the values to the context

//   const [authstatus, setauthstatus] = useState(false);
//   const login = () => {
//     setauthstatus(true);
//   };
//   return (
//     <React.Fragment>
{
  /* <h1>useContext</h1> */
}
//       <AuthContext.Provider value={{ status: authstatus, login: login }}>
//         <Auth />
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// };

// export default App;



// useMemo
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h1>useMemo</h1>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// export default App;

// useCallback
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//       <h1>useCallback</h1>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// export default App;


// useRef
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//     console.log(count);
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }
// export default App;


// useLayoutEffect
// function App() {
//   const [value, setValue] = useState(0);
//   useLayoutEffect(() => {
//     if (value === 0) {
//       setValue(10 + Math.random() * 200);
//     }
//   }, [value]);
//   console.log("render", value);
//   return (
//     <div className="App">
//       <p>Value: {value}</p>
//       <button onClick={() => setValue(0)}>Generate Random Value</button>
//     </div>
//   );
// }
// export default App;


// Custom Hook 
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
    }, [] );

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default App;
