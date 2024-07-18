import profilePic from "./assets/FilipSzkarlatSzczepaniak.jpeg";
import Title from "./components/Title";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="app">
      <img src={profilePic} />
      <Title />
      <Buttons />
    </div>
  );
}

export default App;
