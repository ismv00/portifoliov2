import { Facts } from "./components/Facts";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import "./global.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Facts />
      <Contact />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
