import { CSSReset, ChakraProvider  } from "@chakra-ui/react";
import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import { theme } from "./utils/chakra.config";


ReactDOM.createRoot(document.getElementById("root")!)
    .render(
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                        <CSSReset />
                        <App />
            </ChakraProvider>
        </React.StrictMode>
    )