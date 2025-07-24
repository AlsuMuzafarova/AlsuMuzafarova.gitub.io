import React from 'react';
import {useNavigate} from "react-router-dom";

import './UsefulSection.css';

import qrCode from "../assets/qrCode.svg"
import myVisit from "../assets/myVisits.svg"
import helpBusiness from "../assets/helpBusiness.png"

interface UsefulItem {
    id: string;
    title: string;
    action: string;
    icon: string
}

const UsefulSection: React.FC = () => {
    const navigate = useNavigate();

    const features: UsefulItem[] = [
        { id: 'helpBusiness', title: 'Помощь бизнесу', action: 'Перейти', icon: helpBusiness },
        { id: 'myVisits', title: 'Мои визитки', action: 'Перейти', icon: myVisit },
        { id: 'qrCode', title: 'Как создать QR-код', action: 'Перейти', icon: qrCode },
    ];

    return (
        <div className="useful-section">
            <h2 className="useful-title">Полезное</h2>
            <div className="useful-grid">
                {features.map((feature, index) => (
                    <div key={index} className="useful-card" id={feature.id}>
                        <div className="useful-icon-container">
                            <img src={feature.icon} alt="icon" className="useful-item-icon"/>
                        </div>
                        <div className="useful-title-action">
                            <h3 className="useful-title">{feature.title}</h3>
                            <button className="useful-action" onClick={() => navigate("/NotFound")}>{feature.action}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsefulSection;