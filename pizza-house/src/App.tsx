import { Container } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Menu } from "./pages/Menu"
import { Cart } from "./pages/Cart"
import { Orders } from "./pages/Orders"
import { CheckoutLayout } from "./components/orders/checkout/CheckoutLayout"
import { OrderDetails } from "./components/orders/id/OrderDetails"
import { OrderLayout } from "./components/orders/OrderLayout"
import { NotFound } from "./pages/NotFound"

export const App = () => {
  return (
    <Container
      bg='app.main'
      minW='full'
      padding={0}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Orders />}>
              <Route index element={<OrderLayout/>} />
              <Route path="new" element={<CheckoutLayout/>} />
              <Route path=":id" element={<OrderDetails/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
