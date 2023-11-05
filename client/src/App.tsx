import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import SignIn from "./pages/Signin";
import { HOME, SIGN_IN } from "./utils/routeConsts";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: SIGN_IN,
    element: <SignIn />,
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
