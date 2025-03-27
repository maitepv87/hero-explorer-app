import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HeroRoutes } from "../heroes/routes/HeroRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/*" element={<HeroRoutes />} />
      </Routes>
    </>
  );
};
