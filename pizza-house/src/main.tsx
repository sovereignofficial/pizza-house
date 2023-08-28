import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import { theme } from "./utils/chakra.config";
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!)
    .render(
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Provider store={store}>
                    <App />
                </Provider>
            </ChakraProvider>
        </React.StrictMode>
    )