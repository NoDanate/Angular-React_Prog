import './App.css';
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
