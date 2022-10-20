import { BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
