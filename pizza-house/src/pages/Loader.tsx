import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner size="xl" color="app.hot" />
    </Box>
  );
};

export default Loader;