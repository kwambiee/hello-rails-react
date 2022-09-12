import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Greeting from "./greeting";


function App() {
  return (
    <div>
        <nav>
            <Link to="/"></Link>
        </nav>
        <Routes>
            <Route path="/" element={<Greeting />} />
        </Routes>

    </div>
  );
}
export default App;
