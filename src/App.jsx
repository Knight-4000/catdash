import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { 
  About, 
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Menu,
  MenuItem,
  Orders,
  Register
   } from "./pages"

const router = createBrowserRouter([

  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/Checkout',
        element: <Checkout />
      },
      {
        path:'/orders',
        element: <Orders />
      },
      {
        path:'/menu',
        element: <Menu />
      },
      {
        path:'/menu-item',
        element: <MenuItem />
      },
    ],
  },
  {
    path:'/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
