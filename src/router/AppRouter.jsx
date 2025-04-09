import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HeroRoutes } from "../heroes/routes/HeroRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<HeroRoutes />} />


        {/* Route that captures all undefined routes and redirects to /home */}
        <Route path="*" element={<Navigate to="/home" />} />
        {/* Route that catches all undefined routes and redirects or displays an error message */}
        {/* <Route path="*" element={<NotFoundPage />} /> 404 Page */}
      </Routes>
    </>
  );
};
