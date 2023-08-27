import { Box, Button, Heading, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError() as { data: string, message: string };

    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            height="100vh"
            flexDirection="column"
        >
            <Stack spacing={5}>
                <Flex align='center' >
                    <Button onClick={() => { navigate(-1) }}>Go Back</Button>
                    <Image src='logo.png' w='150px' h='150px' objectFit='cover' m="auto" />
                </Flex>

                <Heading size="lg" mb={4}>
                    Unexpected Application Error!
                </Heading>
                <Text color="app.hot" fontWeight="bold">
                    {error.message}
                    {error.data}
                </Text>

            </Stack>

        </Box>
    );
};

export default ErrorPage;