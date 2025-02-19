import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Show from "./Components/Show";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensuring full height layout */}
      <Navbar />
      <div className="flex-grow"> {/* Pushes footer to bottom */}
        <Show />
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  );
}

export default App;
