import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./routes/layout/layout.scss";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import ProfilePage from "./routes/profile/profilePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage></HomePage> },
        { path: "/list", element: <ListPage></ListPage> },
        { path: "/:id", element: <SinglePage></SinglePage> },
        { path: "/profile", element: <ProfilePage></ProfilePage>}
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
