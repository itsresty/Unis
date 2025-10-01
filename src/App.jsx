// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { SplashVideo } from "./components/SplashVideo";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <BrowserRouter>
      {/* Splash covers entire screen until finished */}
      {showSplash && <SplashVideo onFinish={() => setShowSplash(false)} />}

      {/* Main App */}
      {!showSplash && (
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
