import { Home } from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Menu } from "./pages/Menu"
import { Cart } from "./pages/Cart"
import { Orders } from "./pages/Orders"
import { CheckoutLayout } from "./components/orders/checkout/CheckoutLayout"
import { OrderDetails } from "./components/orders/id/OrderDetails"
import { OrderLayout } from "./components/orders/OrderLayout"
import { AppLayout } from "./pages/AppLayout"
import { menuLoader } from "./services/menuLoader"
import ErrorPage from "./pages/Error"


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:menuLoader
      },
      {
        path: '/menu',
        element: <Menu />,
        loader:menuLoader
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order',
        element: <Orders />,
        children: [
          {
            index: true,
            element: <OrderLayout />
          },
          {
            path: 'new',
            element: <CheckoutLayout />
          },
          {
            path: ":id",
            element: <OrderDetails />
          }
        ]
      }
    ]
  }

])

export const App = () => {
  return <RouterProvider router={router} />
}
