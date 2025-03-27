import { AuthProvider } from "./auth/context";
import { AppRouter } from "./router/AppRouter";

export const HeroApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
