import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { SplashVideo } from "./components/SplashVideo";
import { Navbar } from "./components/Navbar";
function App() {
const [showSplash, setShowSplash] = useState(false)

  return (
    <div className="relative min-h-screen">
      {showSplash && <SplashVideo onFinish={() => setShowSplash(false)} />}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
