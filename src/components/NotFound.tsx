import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Извините, запрашиваемая страница не существует.</p>
                <div className="not-found-buttons">
                    <button onClick={() => navigate(-1)}>Назад</button>
                    <button onClick={() => navigate('/')}>На главную</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;