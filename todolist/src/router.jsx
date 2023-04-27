import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { AppLayouts, Register ,Login} from "./componets";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayouts />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;