import "./App.scss";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOder from "./pages/placeorder/PlaceOder";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Order" element={<PlaceOder />} />
            </Routes>
        </div>
    );
}

export default App;
