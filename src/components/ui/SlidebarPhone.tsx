import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "./SlidebarPhone.css";

import home from "../../assets/home-icon.svg";
import collection from "../../assets/collection-icon.svg";
import connect from "../../assets/connect-icon.svg"
import staff from "../../assets/staff-icon.svg";
import calendar from "../../assets/calendar-icon.svg";
import contacts from "../../assets/contacts-icon.svg";
import help from "../../assets/help-icon.svg";

interface menuItem {
    id: number;
    name: string;
    active: boolean;
    icon: string;
    page: string;
}

const SlidebarPhone: React.FC = () => {

    const initialMenuItemsMini: menuItem[] = [
        { id: 1, name: 'Главная', active: true, icon: home, page: "/"},
        { id: 2, name: 'Коллекция', active: false, icon: collection, page: "/"},
        { id: 3, name: 'Подключить', active: false, icon: connect, page: "/NotFound"},
        { id: 4, name: 'Профиль', active: false, icon: contacts, page: "/NotFound"},
    ];

    const initialMenuItems: menuItem[] = [
        { id: 1, name: 'Главная', active: true, icon: home, page: "/"},
        { id: 2, name: 'Коллекция', active: false, icon: collection, page: "/Collections"},
        { id: 3, name: 'Персонал', active: false, icon: staff, page: "/NotFound"},
        { id: 4, name: 'Календарь', active: false, icon: calendar, page: "/NotFound"},
        { id: 5, name: 'Контакты', active: false, icon: contacts, page: "/NotFound"},
        { id: 6, name: 'Помощь', active: false, icon: help, page: "/NotFound"}
    ];

    const [isMiniMobile, setIsMobile] = useState(false);

    // Проверяем размер экрана при загрузке и при ресайзе
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 360); // Например, мобильная версия при ≤768px
        };

        checkScreenSize(); // Проверяем сразу
        window.addEventListener("resize", checkScreenSize); // Следим за изменениями

        return () => window.removeEventListener("resize", checkScreenSize); // Убираем слушатель при размонтировании
    }, []);

    const [menuItems, setMenuItems] = useState<menuItem[]>(isMiniMobile? initialMenuItemsMini : initialMenuItems);
    const navigate = useNavigate();

    const handleItemClick = (clickedId: number) => {
        const clickedItem = menuItems.find(item => item.id === clickedId);

        if (clickedItem && clickedItem.page) {
            navigate(clickedItem.page);
        }
        setMenuItems(prevItems =>
            prevItems.map(item => ({
                ...item,
                active: item.id === clickedId
            }))
        );
    };

    return (
        <aside className="slidebar-phone">
            <nav className="vertical-menu-phone">
                <ul>{menuItems.map((item) => (
                    <li key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`menu-item-phone ${item.active ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}>
                        <img src={item.icon} alt={item.name} className="item-icon-phone"/>
                        {item.name}
                    </li>))}
                </ul>
            </nav>
        </aside>
    );
}

export default SlidebarPhone;