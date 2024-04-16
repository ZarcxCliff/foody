import "./App.scss";
import { Footer, LoginPopup, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOder from "./pages/placeorder/PlaceOder";
import { useState } from "react";
function App() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className="app">
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/Order" element={<PlaceOder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
