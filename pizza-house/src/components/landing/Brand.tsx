import { Box, Heading, Highlight, Text } from '@chakra-ui/react'
import { landing1 } from '../../utils/images'

export const Brand = () => {
  return (

    <Box w='full' h='2xl' mb={20} pos='relative' >
      <Box
        pos="relative"
        w="full"
        h="full"
        bgImage={landing1}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"

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
          <Box textAlign={'center'}>
            <Heading size={"4xl"}>
              <Highlight styles={{color:"app.hot"}}  query={"Pizza House"}>
                Welcome to Pizza House
              </Highlight>
            </Heading>
            <Text color="white" fontSize="xl" mt={4}>
            We're passionate about pizza and we're here to make your pizza dreams come true.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
