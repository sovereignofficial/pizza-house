import { Container, Heading, Box, Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Text, Button, Image } from "@chakra-ui/react"
import { pizzaMenuItem } from "../../utils/images";

const pizzaMenu = [
    {
        name: "Margherita",
        description: "Classic tomato sauce, mozzarella, fresh basil",
        price: "$10.99",
    },
    {
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, pepperoni",
        price: "$12.99",
    },
    {
        name: "Vegetarian",
        description: "Tomato sauce, mozzarella, bell peppers, mushrooms, onions",
        price: "$11.99",
    },
    {
        name: "Supreme",
        description: "Tomato sauce, mozzarella, pepperoni, sausage, bell peppers, olives, onions",
        price: "$14.99",
    },
    {
        name: "Hawaiian",
        description: "Tomato sauce, mozzarella, ham, pineapple",
        price: "$13.49",
    },
    {
        name: "Meat Lovers",
        description: "Tomato sauce, mozzarella, pepperoni, sausage, bacon, ground beef",
        price: "$15.99",
    },
];

export const TopOrders = () => {
    return (
        <Container p={10} mb={20} minW='full'>
            <Box p={3} m='auto' textAlign='center' w="33%" my={10} borderBottom={'5px solid'}  borderColor={'white'} bgColor="app.hot">
                <Heading size='xl'>Our Trends</Heading>
            </Box>
            <Grid w='full' templateColumns='repeat(6, 1fr)' alignItems='center' gap={3}>
                {pizzaMenu.map((item, index) => (
                    <GridItem colSpan={2} key={index}>
                        <Card h="500px">
                            <CardHeader textAlign={'center'}><Heading>{item.name}</Heading></CardHeader>
                            <CardBody>
                                <Box h="200px" 
                                overflow={'auto'}
                                pos={'relative'}>
                                    <Image bgRepeat={'no-repeat'} bgPos={'center'} objectFit={'cover'} w={'full'} 
                                    h={'full'} src={pizzaMenuItem} />
                                </Box>
                            </CardBody>
                            <CardFooter flexDir={'column'}>
                                <Box w={"full"}>
                                    <Text>{item.description}</Text>
                                    <Heading>{item.price}</Heading>

                                </Box>
                                <Button  m={'auto'}>Add To Cart</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}
