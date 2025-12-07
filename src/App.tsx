import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GioiThieuPage from "./pages/GioiThieuPage";
import LienHeTimCanHoPage from "./pages/LienHeTimCanHoPage";
import CongTacVienPage from "./pages/CongTacVienPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="w-full lg:w-[65%] lg:mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lien-he-tim-can-ho" element={<LienHeTimCanHoPage />} />
              <Route path="/cong-tac-vien" element={<CongTacVienPage />} />
              <Route path="/gioi-thieu" element={<GioiThieuPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
