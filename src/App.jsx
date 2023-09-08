import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cocktail, HomeLayout, Landing, Newsletter } from "./pages";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cocktail',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      }
    ]
  },
  {
    path:'/about',
    element: <About />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
