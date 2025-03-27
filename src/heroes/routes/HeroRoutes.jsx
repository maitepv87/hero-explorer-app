import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components";
import { DcPage, HeroPage, MarvelPage } from "../pages";
import { HomePage } from "../../pages/HomePage";

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="home" element={<HomePage />} />
      </Routes>
    </>
  );
};
