import ModalRoot from "@src/components/ModalRoot";
import { ModalProvider } from "@src/contexts/ModalContext";
import router from "@src/routes";

import React, { Fragment } from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <ModalProvider>
                <RouterProvider router={router} />
                <ModalRoot />
            </ModalProvider>
        </Fragment>
    );
}

export default App;
