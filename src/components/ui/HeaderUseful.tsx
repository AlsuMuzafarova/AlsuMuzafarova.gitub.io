import React from "react";
import {useNavigate} from "react-router-dom";
import "./HeaderUseful.css"

const HeaderUseful = () => {
    const navigate = useNavigate();
    return (
        <div className="title-action-articles">
            <h3>Полезное</h3>
            <button onClick={() => navigate("/NotFound")}>Больше</button>
        </div>
    )
}

export default HeaderUseful;