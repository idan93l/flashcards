import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlashCards from "./pages/FlashCards/FlashCards.jsx";
import ManageCards from "./pages/ManageCards/ManageCards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

class App extends React.Component {
  render = () => {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<FlashCards />} />
            <Route path="/ManageCards" element={<ManageCards />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
