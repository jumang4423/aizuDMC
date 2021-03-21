import React from 'react';
import { Link } from "gatsby"
// import { useLocation } from "@reach/router"
import { motion } from "framer-motion";
import "@/styles/component/HeaderFoot.scss";

interface Props {
}

const HeaderFoot: React.FC<Props> = () => {

    // const path: string = useLocation().pathname
    // let location: string = ""

    // if (path === "/") location = "D🌟M🌟Cサークル"
    // else if (path === "/projects") location = "projects"
    // else if (path === "/about") location = "about"
    // else if (path === "/backwash") location = "backwash"
    // else location = "???"

    return (
        <Link to="/" className="HeaderFoot">
            <div className="potaru">
                <div className="potaruText1Rec">
                    <div className="potaruText1 Jet">
                        会津大学DMCサークル
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HeaderFoot