import Headers from "./components/Header/Header.jsx";
import './App.css'
import Hero from "./components/Hero/Hero.jsx";
import Section from "./components/Section/Section.jsx";
import Main from "./components/Main/Main.jsx";

function App() {

  return (
    <div className="app">
      <Headers/>
      <Hero/>
      <Section/>
      <Main />
    </div>  
  )
}

export default App
