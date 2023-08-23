import { Container} from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/landing/Footer"
import { Home } from "./pages/Home"

export const App = () => {
  return (
    <Container
      bg='app.main'
      minW='full'
      padding={0}
    >
      <Header />
       <Home/>
      <Footer/>
    </Container>
  )
}
