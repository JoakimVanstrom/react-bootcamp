import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BettyWhite from "./pages/BettyWhite";
import Counter from "./pages/Counter";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/betty" element={<BettyWhite />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
