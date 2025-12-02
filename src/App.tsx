import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GioiThieuPage from "./pages/GioiThieuPage";
import LienHeTuVanPage from "./pages/LienHeTuVanPage";
import CongTacVienPage from "./pages/CongTacVienPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<GioiThieuPage />} />
          <Route path="/lien-he-tu-van" element={<LienHeTuVanPage />} />
          <Route path="/cong-tac-vien" element={<CongTacVienPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
