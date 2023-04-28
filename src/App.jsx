import Title from "./assets/title.png";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => {
  return (
    <main>
      <div>
        <div className="bg-gradient" />
      </div>
      <div className="app font-space">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
