import React from 'react';
import { useLocation } from "@reach/router"
import "@/styles/layout/MainPage.scss";

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    //get page from useLocation
    const path: string = useLocation().pathname
    let PageName: string = ""
    if (path === "/") PageName = "MainPage"
    else if (path === "/projects") PageName = "Projects"
    else if (path === "/about") PageName = "About"
    else if (path === "/backwash") PageName = "Backwash"
    else PageName = "404"

    return (
        <>

        </>
    );
};

export default MainPage