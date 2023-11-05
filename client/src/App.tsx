import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import SignIn from "./pages/Signin";
import Links from "./pages/Links";
import Summary from "./pages/Summary";
import Templates from "./pages/Templates";
import { HOME, SIGN_IN, LINKS, SUMMARY, TEMPLATES } from "./utils/routeConsts";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: TEMPLATES,
    element: <Templates />,
  },
  {
    path: SIGN_IN,
    element: <SignIn />,
  },
  {
    path: LINKS,
    element: <Links />,
  },
  {
    path: SUMMARY,
    element: <Summary />,
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
