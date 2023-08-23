import { Container } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/landing/Footer"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Menu } from "./pages/Menu"
import { Cart } from "./pages/Cart"
import { Orders } from "./pages/Orders"

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
          <Route path="/order" element={<Orders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}
