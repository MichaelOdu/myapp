import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
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
                <Route path="/trigger-1" element={<ButtonTrigger />} />
                <Route path="/trigger-2" element={<Form />} />



            </Route>
        </Routes>

    )
};

export default RouteComponent;