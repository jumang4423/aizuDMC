import React from 'react';
import { Link } from "gatsby"
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

interface Props {
}

const HeaderThings: React.FC<Props> = () => {

    return (
        <div className="Things">
            <a href="#contact">
                <HeaderButton Name="連絡先" />
            </a>
            <a href="#access">
                <HeaderButton Name="アクセス" />
            </a>
            <a href="#pictures">
                <HeaderButton Name="写真集" />
            </a>


        </div>
    )
}

export default HeaderThings