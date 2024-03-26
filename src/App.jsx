import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {

  //Routes
  const browserRouter = createBrowserRouter([
    { path: '/home', element: <Home /> },
    { path: '/product', element: <Product /> },
    { path: '/contact', element: <Contact /> },
    
  ])
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
