import "./styles/App.css";
import "./styles/reset.css";
import Header from "./components/layout/Header";
import Hero from "./components/ui/Hero";
import About from "./components/ui/About";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
