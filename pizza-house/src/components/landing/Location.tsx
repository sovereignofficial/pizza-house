import { Box, Heading, Highlight, Text } from "@chakra-ui/react"
import { addressImg } from "../../utils/images"

export const Location = () => {
    return (
        <Box minW='full' mb={20} h="xl">
            <Box
                bgImage={addressImg}
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPos='center'
                pos="relative"
                minW="full"
                h="full"
                textAlign='center'
            >
                <Box
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="blackAlpha.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={1}
                >
                    <Box>
                        <Heading size={"4xl"}>
                            <Highlight styles={{ color: "app.hot" }} query={"Location"}>
                            Our Location
                            </Highlight>
                           </Heading>
                        <Text color="white" fontSize="xl" mt={4} >We are located at the heart of the city, surrounded by the bustling life and energy of urban living. Our address is 1234 Example Street, Cityville, ABC123.</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
