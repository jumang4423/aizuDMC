import React from 'react';
import { Link } from "gatsby"
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

interface Props {
}

const HeaderThings: React.FC<Props> = () => {

    return (
        <div className="Things">
            <Link to="/pictures">
                <HeaderButton Name="写真集" />
            </Link>
            <Link to="/room">
                <HeaderButton Name="部室" />
            </Link>
            <Link to="/twitter">
                <HeaderButton Name="ツイッター" />
            </Link>

        </div>
    )
}

export default HeaderThings