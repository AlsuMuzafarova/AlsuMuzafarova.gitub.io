import React from 'react';
import {useNavigate} from "react-router-dom";

import './FeaturesSection.css';

import create from "../assets/create.svg"
import settings from "../assets/settings.svg"
import radar from "../assets/radar.svg"
import diamond from "../assets/diamond.svg"
import cardBox from "../assets/card_box.svg"

interface FeatureItem {
    id: string;
    title: string;
    action: string;
    icon: string
}

const FeaturesSection: React.FC = () => {
    const navigate = useNavigate();

    const features: FeatureItem[] = [
        { id: 'createCard', title: 'Создать', action: 'Перейти', icon: create },
        { id: 'settingsCard', title: 'Настройки', action: 'Перейти', icon: settings },
        { id: 'visitsCard', title: 'Мои визитки', action: 'Перейти', icon: cardBox },
        { id: 'staffCard', title: 'Персонал', action: 'Перейти', icon: radar },
        { id: 'achievementsCard', title: 'Достижения', action: 'Перейти', icon: diamond },
    ];

    return (
        <div className="features-section">
            <h2 className="features-title">Возможности</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card" id={feature.id}>
                        <div className="icon-container">
                            <img src={feature.icon} alt="icon" className="item-icon"/>
                        </div>
                        <div className="title-action">
                            <h3 className="feature-title">{feature.title}</h3>
                            <button className="feature-action" onClick={() => navigate("/NotFound")}>{feature.action}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;