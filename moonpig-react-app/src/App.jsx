
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EachCardPage from "./pages/EachCardPage";

// Main component defining the React application
function App() {
  return (
     // Set up BrowserRouter for routing
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="card/:id" element={<EachCardPage />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;














 


