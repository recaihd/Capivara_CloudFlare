import type React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameModes from "./components/GameModes";
import StatsAndStore from "./components/StatsAndStore";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <GameModes />
        <StatsAndStore />
      </main>
      <Footer />
    </div>
  );
};

export default App;


