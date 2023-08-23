import { Box, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

export const Features = () => {
    return (
        <Container mb={20}  h="md" minW='full'>
            <Grid  minW='full' h='full' templateColumns='repeat(6, 1fr)' placeItems='center' gap={3}>
                <GridItem colSpan={2} w="full">
                    <Box
                        p={4}
                        borderRadius={15}
                        bgColor="app.dark"
                    >
                        <Heading mb={2} size='md'>🚚 Fast Delivery</Heading>
                        <Text color='gray.300'>Get your order delivered to your doorstep quickly and efficiently. We prioritize fast delivery so you can enjoy your fresh meals as soon as possible.</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} w="full">
                    <Box
                        p={4}
                        borderRadius={15}
                        bgColor="app.dark"
                    >
                        <Heading mb={2} size="md">🌟 High Quality</Heading>
                        <Text color='gray.300'> Our ingredients are sourced from trusted suppliers to ensure the highest quality. Experience the richness of flavors and textures in every bite.</Text>

                    </Box>
                </GridItem>
                <GridItem colSpan={2} w="full">
                    <Box
                        p={4}
                        borderRadius={15}
                        bgColor="app.dark"
                    >
                        <Heading mb={2} size="md">🧼 100% Hygienic</Heading>
                        <Text color='gray.300'>Your health and safety are our top priorities. We maintain strict hygiene standards throughout our cooking and packaging processes to provide you with meals you can trust.</Text>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    )
}
