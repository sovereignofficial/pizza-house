import { Box, Stack } from "@chakra-ui/react"
import { MenuSideBar } from "./MenuSideBar"
import { ReactNode } from "react";

export const MenuLayout = ({ children }: { children: ReactNode }) => {

  return (
    <Box minH={'100vh'}>
      <Stack direction={{base:'column',md:'row'}}>
        <MenuSideBar />
        <Box ml={{base:0,lg:230}} p="4">
          {children}
        </Box>
      </Stack>
    </Box>
  )
}
