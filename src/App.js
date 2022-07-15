import './App.css';
import Hero from "./components/heroSection/Hero";
import Programs from "./components/program/Programs";
import Reasons from "./components/reasons/Reasons";
import Plan from "./components/plan/Plan";
import Testimonials from "./components/testimonials/Testimonials";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
         <Hero />
        <Programs />
        <Reasons />
        <Plan />
        <Testimonials />
        <Join />
        <Footer />
    </div>
  );
}

export default App;
