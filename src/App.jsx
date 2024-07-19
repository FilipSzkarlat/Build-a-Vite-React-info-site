import profilePic from "./assets/FilipSzkarlatSzczepaniak.jpeg";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <img src={profilePic} />
      <Title />
      <Buttons />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
