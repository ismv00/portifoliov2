import Aos from "aos";
import "aos/dist/aos.css";

// Import components
import { Facts } from "./components/Facts";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

// import style
import "./global.css";

function App() {
  // Init aos
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Header />
      <About />
      <Facts />
      <Contact />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
