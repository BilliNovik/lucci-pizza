import { Routes, Route, } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
