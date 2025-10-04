import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Frontend/pages/Home";
import { NotFound } from "./Frontend/pages/NotFound";
import { Navbar } from "./Frontend/components/Navbar";


function App() {


  return (
    <div className="relative min-h-screen">
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route className="z-[-50]" path="/" index element={<Home />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;