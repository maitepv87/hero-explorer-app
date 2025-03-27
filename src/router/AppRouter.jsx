import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HeroRoutes } from "../heroes/routes/HeroRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />

        <Route path="/*" element={<HeroRoutes />} />

        {/* Ruta comodin */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
