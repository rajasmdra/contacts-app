import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";


function ContactApp() {
    return (
        <div className="contact-app">
            <header className="contact-app__header">
                <h1>Aplikasi Kontak</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/add" element={<AddPage />}></Route>
                </Routes>
            </main>
        </div>
    )
}

export default ContactApp;