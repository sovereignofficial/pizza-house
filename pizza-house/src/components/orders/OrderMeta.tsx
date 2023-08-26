import { Stack, Image, Box, Text, Flex } from "@chakra-ui/react"
import { CartItemType } from "../../utils/global"

export const OrderMeta = ({ items }: { items: CartItemType[] }) => {
    return (
        <Stack w={{base:'full' , md:"50%"}}>
            {items.map((item, index) => (
                <Flex align={'flex-start'} gap={3} key={index}>
                    <Image
                        rounded="lg"
                        width="60px"
                        height="60px"
                        fit="cover"
                        src={item.itemImg}
                        alt={item.name}
                        draggable="false"
                        loading="lazy"
                    />
                    <Box >
                        <Stack spacing="0.5">
                            <Text fontWeight="medium">{item.name}</Text>
                            <Text color={'gray.400'} fontSize="sm">
                                {item.description}
                            </Text>
                        </Stack>
                    </Box>
                </Flex>
            ))}
        </Stack>
    )
}
