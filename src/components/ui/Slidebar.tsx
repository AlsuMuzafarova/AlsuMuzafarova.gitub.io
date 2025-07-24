import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Slidebar.css';
import home from '../../assets/home.svg'
import collection from '../../assets/collection.svg'
import staff from '../../assets/staff.svg'
import calendar from '../../assets/calendar.svg'
import contacts from '../../assets/contacts.svg'
import help from '../../assets/help.svg'

interface menuItem {
    id: number;
    name: string;
    active: boolean;
    icon: string;
    page: string;
}

const Sidebar: React.FC = () => {
    const initialMenuItems: menuItem[] = [
        { id: 1, name: 'Главная', active: true, icon: home, page: "/"},
        { id: 2, name: 'Коллекция', active: false, icon: collection, page: "/collection"},
        { id: 3, name: 'Персонал', active: false, icon: staff, page: "/NotFound"},
        { id: 4, name: 'Календарь', active: false, icon: calendar, page: "/NotFound"},
        { id: 5, name: 'Контакты', active: false, icon: contacts, page: "/NotFound"},
        { id: 6, name: 'Помощь', active: false, icon: help, page: "/NotFound"}
    ];

    // Состояние меню
    const [menuItems, setMenuItems] = useState<menuItem[]>(initialMenuItems);
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
        <aside className="slidebar">
            <nav className="vertical-menu">
                <ul>{menuItems.map((item) => (
                    <li key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`menu-item ${item.active ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}>
                        <img src={item.icon} alt={item.name} className="item-icon"/>
                        {item.name}
                    </li>))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;