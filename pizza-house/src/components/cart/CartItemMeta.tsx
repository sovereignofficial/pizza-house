import { Box, Image, Stack,Text } from '@chakra-ui/react'
import { CartItemType } from '../../utils/global'


export const CartItemMeta = ({ name, imageUrl, ingredients }: CartItemType) => {
    return (
        <Stack direction="row" spacing="5" width="full">
            <Image
                rounded="lg"
                width="120px"
                height="120px"
                fit="cover"
                src={imageUrl}
                alt={name}
                draggable="false"
                loading="lazy"
            />
            <Box pt={4}>
                <Stack spacing="0.5">
                    <Text fontWeight="medium">{name}</Text>
                    <Text color={'gray.400'} fontSize="sm">
                        {ingredients.join(" ")}
                    </Text>
                </Stack>
            </Box>
        </Stack>
    )
}
