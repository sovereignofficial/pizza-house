import { Stack, Button, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { pizzaMenu, pizzaMenuItem } from "../../utils/pizzaHouse.config";

export const MenuView = () => {
    return (
        <Grid w='full' templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }}
            placeItems='center' gap={3}>
            {pizzaMenu.map((item, index) => (
                <GridItem colSpan={1} key={index}>
                    <Flex direction='column' bg={'app.dark'} boxSize={300} p={2} borderRadius='lg' justify={'center'} align={'center'} gap={10}>
                        <Stack  spacing={4} justify={'center'} align={'center'}>
                            <Heading fontSize={{ base: 'sm', md: "lg" }}>{item.name}</Heading>
                            <Image
                                rounded="lg"
                                width="100px"
                                height="100px"
                                fit="cover"
                                src={pizzaMenuItem}
                                alt={item.name}
                                draggable="false"
                                loading="lazy"
                            />
                            <Text textAlign='center' fontSize={'sm'} color={'gray.400'}>{item.description}</Text>
                        </Stack>
                        <Stack direction={'row'} align={'center'}>
                            <Heading fontSize={"md"}>{item.price}</Heading>
                            <Button>Add to Cart</Button>
                        </Stack>
                    </Flex>
                </GridItem>
            ))}
        </Grid>
    )
}
