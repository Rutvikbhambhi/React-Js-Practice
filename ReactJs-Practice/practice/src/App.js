import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
// import User from './User';
// alert("Hello")
function App() {
//   var data="Rutvik"

//   function apple(){
//     data="Rahul";
//     alert(data);
//   }

  return (
    <div className="App">
        {/* <h1>Rutvik</h1>
        <button onClick={()=>apple()}>Click Me</button>
        <User />
        <Apple /> */}

        <ScrollToTop />
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  );
}

export default App;
