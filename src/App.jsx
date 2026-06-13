import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import JobDetails from "./pages..jsx/JobDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <JobDetails />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
