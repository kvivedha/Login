import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="*" element={<h1>"404 page not found..."</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
