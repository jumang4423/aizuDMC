import React from 'react';
import "@/styles/component/MDArea.scss";

interface Props {
}

const Main: React.FC<Props> = () => {
    console.log("unko");
    
    return (
        <div className="MDArea">
            <h1 >
                DMCサークルのホームページにようこそ！
            </h1>
        </div>
    )
}

export default Main