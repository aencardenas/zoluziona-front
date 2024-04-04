import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Characteristic from "./pages/Characteristic";
import MainHome from "./pages/MainHome";
import HomePowerGreen from "./pages/HomePowerGreen";


function App() {

  //Routes
  const browserRouter = createBrowserRouter([
    { path: '/home', element: <Home /> },
    { path: '/product', element: <Product /> },
    { path: '/contact', element: <Contact /> },
    { path: '/characteristic', element: <Characteristic />},
    { path: '/', element: <MainHome />},
    { path: '/power-green', element: <HomePowerGreen />}
    
  ])
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
