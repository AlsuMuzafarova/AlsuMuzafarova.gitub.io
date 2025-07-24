import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import './SlidingMenu.css';
import meetCreate from '../../assets/meetCreate.svg'
import orders from '../../assets/orders.svg'
import services from '../../assets/services.svg'
import meets from '../../assets/meets.svg'
import tarifPlus from '../../assets/tarifPlus.svg'
import tarifBusiness from '../../assets/tarifBusiness.svg'


interface allItems {
    title: string,
    subtitle: string,
    icon: string,
    page: string
}
const SlidingMenu = () => {
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate()

    const allItems: allItems[] = [
        { title: "Создайте визитку", subtitle: "Нажмите, чтобы начать", icon: meetCreate, page: "/NotFound"},
        { title: "Заказы", subtitle: "Нет активных заказов", icon: orders, page: "/NotFound" },
        { title: "Все сервисы", subtitle: "Настроить", icon: services, page: "/NotFound" },
        { title: "У вас 2 встречи", subtitle: "Сегодня в 11:29", icon: meets, page: "/NotFound" },
        { title: "Тариф Плюс", subtitle: "Не активен", icon: tarifPlus, page: "/NotFound" },
        { title: "Тариф Бизнес", subtitle: "Не активен", icon: tarifBusiness, page: "/NotFound" }
    ];

    const visibleItems = allItems.slice(startIndex, startIndex + 3);

    const nextSlide = () => {
        if (startIndex < allItems.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="sliding-container">
            <div className="cards-wrapper">
                {visibleItems.map((item, idx) => (
                    <div key={`${startIndex}-${idx}`} className="menu-card">
                        {idx === 0 && startIndex > 0 && (
                            <button className="nav-button prev" onClick={prevSlide}>
                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.91421 7.5L8.70711 1.70711C9.09763 1.31658 9.09763 0.683417 8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.792893 6.79289C0.402369 7.18342 0.402369 7.81658 0.792893 8.20711L7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071C9.09763 14.3166 9.09763 13.6834 8.70711 13.2929L2.91421 7.5Z" fill="black"/>
                                </svg>
                            </button>
                        )}

                        <div className="card-content">
                            <div className="icon">
                                <img src={item.icon}/>
                            </div>
                            <div className="text" onClick={() => navigate(item.page)}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>

                        {idx === 2 && startIndex < allItems.length - 3 && (
                            <button className="nav-button next" onClick={nextSlide}>
                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.08579 7.5L0.292892 13.2929C-0.0976315 13.6834 -0.0976315 14.3166 0.292892 14.7071C0.683417 15.0976 1.31658 15.0976 1.70711 14.7071L8.20711 8.20711C8.59763 7.81658 8.59763 7.18342 8.20711 6.79289L1.70711 0.292892C1.31658 -0.0976315 0.683417 -0.0976315 0.292892 0.292892C-0.0976315 0.683416 -0.0976315 1.31658 0.292892 1.70711L6.08579 7.5Z" fill="black"/>
                                </svg>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidingMenu;