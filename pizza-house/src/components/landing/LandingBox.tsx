import { Box, Heading,Highlight,Text } from '@chakra-ui/react'
import { LandingSection } from '../../utils/global'

export const LandingBox = ({title,subtitle,bgImage,titleHighlight}:LandingSection) => {
  return (
    <Box w='full' h='2xl' mb={20} pos='relative' >
    <Box
      pos="relative"
      w="full"
      h="full"
      bgImage={bgImage}
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
            <Highlight styles={{color:"app.hot"}}  query={titleHighlight}>
              {title}
            </Highlight>
          </Heading>
          <Text color="white" fontSize="xl" mt={4}>
            {subtitle}
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}
