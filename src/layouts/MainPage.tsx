import React from 'react';
import { useLocation } from "@reach/router"
import Main from "@/components/Main"

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    //get page from useLocation
    const path: string = useLocation().pathname

    return (
        <>
            {<Main />}
        </>
    );
};

export default MainPage