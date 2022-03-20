import * as React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/app";
import { BASE_NAME } from "./settings";

import { FronteggProvider } from '@frontegg/react';
import { BrowserRouter } from 'react-router-dom';

const contextOptions = {
    baseUrl: 'https://auth.unblock.io',
};


ReactDOM.render(
    <BrowserRouter basename={ BASE_NAME }>
        <FronteggProvider contextOptions={contextOptions}>
            <App />
        </FronteggProvider>
    </BrowserRouter>,
    document.getElementById("root")
);

// TODO: Enable service worker for assets loading optimization
registerServiceWorker();