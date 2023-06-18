import "./styles/App.css";
import "./styles/reset.css";
import Header from "./components/layout/Header";
import Hero from "./components/ui/Hero";
import About from "./components/ui/About";
import Works from "./components/ui/Works";
import Contact from "./components/ui/Contact";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
