import { Home } from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Menu } from "./pages/Menu"
import { Cart } from "./pages/Cart"
import { Orders } from "./pages/Orders"
import { CheckoutLayout } from "./components/orders/checkout/CheckoutLayout"
import { OrderDetails } from "./components/orders/id/OrderDetails"
import { OrderLayout } from "./components/orders/OrderLayout"
import { AppLayout } from "./pages/AppLayout"


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
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
