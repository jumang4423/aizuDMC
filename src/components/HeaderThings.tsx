import React from 'react';
import { Link } from "gatsby"
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

interface Props {
}

const HeaderThings: React.FC<Props> = () => {

    return (
        <div className="Things">
            <Link to="/contact">
                <HeaderButton Name="連絡先" />
            </Link>
            <Link to="/room">
                <HeaderButton Name="アクセス" />
            </Link>
            <Link to="/pictures">
                <HeaderButton Name="写真集" />
            </Link>


        </div>
    )
}

export default HeaderThings