// import './App.css';
// import ScrollToTop from './components/ScrollToTop';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Portfolio from './components/Portfolio';
// import Products from './components/Products';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
// // import User from './User';
// // alert("Hello")
// function App() {
// //   var data="Rutvik"

// //   function apple(){
// //     data="Rahul";
// //     alert(data);
// //   }

//   return (
//     <div className="App">
//         {/* <h1>Rutvik</h1>
//         <button onClick={()=>apple()}>Click Me</button>
//         <User />
//         <Apple /> */}

//         <ScrollToTop />
//         <Navbar />
//         <Hero />
//         <Services />
//         <Portfolio />
//         <Testimonials />
//         <Products />
//         <Newsletter />
//         <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  let [count, setCcount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Click {count}</h1>
      <button
        style={{
          margin: "10px",
          padding: "10px",
          background: "darkgrey",
          border: "none",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: "600",
        }}
        onClick={() => setCcount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          padding: "10px",
          background: "darkgrey",
          border: "none",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: "600",
        }}
        onClick={() => setCcount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
