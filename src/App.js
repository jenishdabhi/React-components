import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetals";
import IconGrid from "./components/Icongrid";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      </header>
      <main>
        <IconGrid />
      </main>
    </div>
  );
}

export default App;
