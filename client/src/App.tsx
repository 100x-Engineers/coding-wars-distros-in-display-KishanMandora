import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import SignIn from "./pages/Signin";
import Links from "./pages/Links";
import { HOME, SIGN_IN, LINKS } from "./utils/routeConsts";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: SIGN_IN,
    element: <SignIn />,
  },
  {
    path: LINKS,
    element: <Links />,
  }
]);


function App() {
  return (
    <div className="bg-black h-screen w-screen text-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
