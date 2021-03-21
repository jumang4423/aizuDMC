import React from 'react';
import { useLocation } from "@reach/router"
import Main from "@/components/Main"
import "@/styles/layout/MainPage.scss";

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    //get page from useLocation
    const path: string = useLocation().pathname
    let page: string = ""
    if (path === "/") page = 'Main'
    else if (path === "/pictures") page = "Pictures"
    else if (path === "/room") page = "Room"
    else if (path === "/twitter") page = "Twitter"
    else page = "404"

    return (
        <>
            {page === 'Main' && <Main />}
        </>
    );
};

export default MainPage