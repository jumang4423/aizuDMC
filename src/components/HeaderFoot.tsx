import React from 'react';
import { Link } from "gatsby"
import "@/styles/component/HeaderFoot.scss";

interface Props {
}

const HeaderFoot: React.FC<Props> = () => {
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