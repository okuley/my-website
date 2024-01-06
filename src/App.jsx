import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";

function App() {
  

  return (
    <>
    <Router>

    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    </Routes>
    </Router>
    <Footer/>

    </>
  )
}

export default App
