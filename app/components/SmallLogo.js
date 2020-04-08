import React from "react";
import { Link } from 'react-router-dom';

export default function SmallLogo() {
    return (
        <div className="logo-small">
            <Link className="logo-small__link" to="/popup.html">
                <h1 className="logo-small__text">
                    SpendlyTime
                    <small className={"logo-small__text__small"}>
                        .com
                    </small>
                </h1>
            </Link>
        </div>
    );
}
