import { Flex, Heading, Stack, Text } from "@chakra-ui/react"

export const ClientInfo = ({client}:{client:{
    client:string,
    address:string,
    phone:string,
    date:string,
    status:string,
    paid:number,
}}) => {
  return (
   <Stack>
        <Flex gap={5} justify={'space-between'} align={'center'}>
            <Heading fontSize={'sm'} fontWeight={'medium'}>{client.client}</Heading>
            <Text fontSize={'sm'} color={'gray.400'}>{client.phone}</Text>
        </Flex>
        <Flex gap={5} justify={'space-between'} align={'center'}>
            <Heading fontSize={'sm'} fontWeight={'medium'}>${client.paid}</Heading>
            <Text fontSize={'sm'} color={'gray.400'}> {client.date} </Text>

        </Flex>
        <Flex gap={5} justify={'space-between'} align={'center'}>
            <Heading fontSize={'sm'} fontWeight={'medium'}> {client.status} </Heading>
            <Text fontSize={'sm'} color={'gray.400'}>{client.address}</Text>

        </Flex>
   </Stack>
  )
}
