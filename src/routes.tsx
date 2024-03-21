import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Form from "./components/form";
import ButtonTrigger from "./components/button";
import Header from "./components/header"

const RouteComponent = () => {

    return (

        <Routes>
            <Route
                element={
                    <div>
                        <Header />
                        <Outlet />
                    </div>
                }>
                <Route index element={<ButtonTrigger />} />
                <Route path="/button-trigger" element={<ButtonTrigger />} />
                <Route path="/form-trigger" element={<Form />} />



            </Route>
        </Routes>

    )
};

export default RouteComponent;