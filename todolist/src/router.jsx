import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayouts} from "./componets";


const router = createBrowserRouter([
    {
        path: '/',
        element : <AppLayouts />
    },
    {
        path:'/kontak/:id',
        element:  <AppLayouts />
    }

])

export default router;