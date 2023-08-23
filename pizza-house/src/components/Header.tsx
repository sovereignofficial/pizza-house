import { Container, Flex, List, ListItem, Box } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { routes } from "../utils/pizzaHouse.config";

export const Header = () => {
    const location = useLocation();

    return (
        <Container
            bg='app.dark'
            h="100px"
            minW='100%'>
            <List h={'full'}>
                <Flex gap='2' h={'full'} justifyContent='center' alignItems='center'>
                    <ListItem position={'absolute'} left={0} top={0} >
                        <Box m="auto" display='flex' alignItems='center' boxSize='100px' bgImage='logo.png'
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat" />
                    </ListItem>
                    {routes.map((route, index) => (
                        <ListItem key={index}>
                            <Link style={{
                                color:`${route.path === location.pathname 
                                ? 'orange'
                                : 'white' }`
                            }} to={route.path}>
                                {route.route}
                            </Link>
                        </ListItem>
                    ))}

                </Flex>
            </List>
        </Container >
    )
}
