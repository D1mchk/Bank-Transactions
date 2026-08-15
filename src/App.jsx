import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import Analytics from "./Pages/Analytics";
import Layout from "./Components/Layout";
import Transactions from "./Pages/Transactions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Accounts /> },
        { path: "accounts", element: <Transactions /> },
        { path: "analytics", element: <Analytics /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
