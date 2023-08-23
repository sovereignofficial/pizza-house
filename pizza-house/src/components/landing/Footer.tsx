import { Box, Container, Grid, GridItem, Heading, List, ListItem, Text } from "@chakra-ui/react"
import { routes } from "../../utils/pizzaHouse.config"
import { Link, useLocation } from "react-router-dom"

export const Footer = () => {
    const location = useLocation();
    
    return (
        <Container bgColor={'app.dark'} h="md" minW='full'>
            <Box m="auto" display='flex' alignItems='center' boxSize='200px' bgImage='logo.png'
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat" />
            <Grid minW='full' templateColumns='repeat(6, 1fr)' placeItems='center' gap={3}>
                <GridItem colSpan={2} w="full">
                    <Box p={4}>
                        <Heading mb={2} size='md'>Pizza House Co.</Heading>
                        <Text color='gray.300'>Enjoy the best pizzas in town at Pizza House Co. Our passion is crafting delicious pizzas that delight your taste buds. With fresh ingredients and a variety of flavors, we're dedicated to providing an exceptional dining experience. Join us for a slice of happiness!</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} w="full">
                    <List textAlign={'center'} spacing={2}>
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
                    </List>
                </GridItem>
                <GridItem colSpan={2} w="full">
                    <List textAlign={'center'} spacing={2}>
                        <ListItem>Facebook</ListItem>
                        <ListItem>Instagram</ListItem>
                        <ListItem>Twitter</ListItem>
                        <ListItem>LinkedIn</ListItem>
                    </List>
                </GridItem>
            </Grid>
            <Text pos={'absolute'} bottom={2} left="40%" color='gray.400'>Developed by Egemen Akdan aka. Sovereign</Text>
        </Container>
    )
}
