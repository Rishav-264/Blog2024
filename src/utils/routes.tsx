import RootPage from "../pages/RootPage"
import LoginPage from "../pages/Login/LoginPage"

export const routes = [
    {
      path: "/",
      element: <RootPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
  ]