import { Container } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

export const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <Container
            bg='app.main'
            minW='full'
            padding={0}
        >
            {isLoading && <Loader/>}
            <Header />
            <main >
                <Outlet />
            </main>
        </Container>
    )
}
