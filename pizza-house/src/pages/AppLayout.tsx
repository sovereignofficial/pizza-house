import { Container } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
    return (
        <Container
            bg='app.main'
            minW='full'
            padding={0}
        >
            <Header />
            <main >
                <Outlet />
            </main>
        </Container>
    )
}
