import { Box, Checkbox, Heading, Stack } from "@chakra-ui/react"
import { menuFilters } from "../../utils/pizzaHouse.config"

export const MenuSideBar = () => {
  return (
    <Box
    bg="app.dark"
    borderRight={'1px solid'}
    borderColor='app.main'
    w={{ base: 'full', md: '200px' }}
    h={{base:'auto',md:"full"}}
    pos={{base:'initial',lg:'absolute'}}
    p={5}
    >
      <Heading textAlign='center' fontSize='md' my={2}>Search Filters</Heading>
      <Stack flexWrap={'wrap'} direction={{base:'row',md:'column'}} my="10">
        {menuFilters.map((item, index) => (
          <Checkbox ml="10" key={index} colorScheme="orange" checked={item.checked}>{item.contains}</Checkbox>
        ))}
      </Stack>
    </Box>
  )
}
