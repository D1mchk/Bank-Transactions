import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import Analytics from "./Pages/Analytics";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "accounts", element: <Accounts /> },
        { path: "analytics", element: <Analytics /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
