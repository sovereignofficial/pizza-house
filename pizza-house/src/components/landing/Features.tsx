import { Box, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { appFeatures } from '../../utils/pizzaHouse.config'

export const Features = () => {
    return (
        <Container mb={20} h="md" minW='full'>
            <Grid minW='full' h='full' templateColumns='repeat(6, 1fr)' placeItems='center' gap={3}>
                {appFeatures.map((feature, index) => (
                    <GridItem key={index} colSpan={2} w="full">
                        <Box
                            p={4}
                            borderRadius={15}
                            bgColor="app.dark"
                        >
                            <Heading mb={2} size='md'>{feature.title}</Heading>
                            <Text color='gray.300'>{feature.description}</Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}
