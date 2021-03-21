import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

interface Props {
}

const HeaderThings: React.FC<Props> = () => {
    const [checked, setChecked] = useState(false);

    const onClick = () => {
        setChecked(!checked)
    }

    const menu = [
        {
            title: "連絡先", to: "/#contact"
        }, {
            title: "アクセス", to: "/#access"
        }, {
            title: "写真集", to: "/#pictures"
        }
    ]


    return (
        <>
            <div className={(checked ? "checked " : "") + "Things"}>
                {menu.map((m, i) => {
                    return <a href={m.to}>
                        <HeaderButton Name={m.title} />
                    </a>
                })}
            </div>
            <div className={(checked ? "checked " : "") + "menu_button"} onClick={onClick}>
                <FaBars />
                <FaTimes />
            </div>
        </>
    )
}

export default HeaderThings