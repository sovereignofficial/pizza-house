import { Container, Heading, Box, Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Text, Button, Image } from "@chakra-ui/react"
import { pizzaMenu, pizzaMenuItem } from "../../utils/pizzaHouse.config";



export const TopOrders = () => {
    return (
        <Container p={10} mb={20} minW='full'>
            <Box p={3} m='auto' textAlign='center' w="33%" my={10} borderBottom={'5px solid'} borderColor={'app.hot'} bgColor="brand.900">
                <Heading size='xl'>Our Trends</Heading>
            </Box>
            <Grid w='full' templateColumns='repeat(6, 1fr)' alignItems='center' gap={3}>
                {pizzaMenu.map((item, index) => (
                    <GridItem colSpan={2} key={index}>
                        <Card bg="app.dark" color={'white'} h="500px"
                            borderRadius={14}
                            border='1px solid'
                            borderColor={'gray.700'}
                        >
                            <CardHeader textAlign={'center'}><Heading>{item.name}</Heading></CardHeader>
                            <CardBody>
                                <Box h="200px"
                                    overflow={'auto'}
                                    pos={'relative'} borderRadius={14}>
                                    <Image bgRepeat={'no-repeat'} bgPos={'center'} objectFit={'cover'} w={'full'}
                                        h={'full'} src={pizzaMenuItem} />
                                </Box>
                            </CardBody>
                            <CardFooter gap={10} flexDir={'column'}>
                                <Box textAlign={'center'} >
                                    <Text>{item.description}</Text>
                                </Box>

                                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} w={"full"}>
                                    <Heading size={'md'}>{item.price}</Heading>
                                    <Button >Add To Cart</Button>
                                </Box>
                            </CardFooter>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}
