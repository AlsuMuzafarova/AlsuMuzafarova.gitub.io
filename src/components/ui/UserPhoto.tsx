import React, { useState, useEffect } from 'react';
import defaultAvatar from '../../assets/default-avatar.svg';
import {useNavigate} from "react-router-dom";

interface UserPhotoProps {
    userId: string | number;
    className?: string;
}

const UserPhoto: React.FC<UserPhotoProps> = ({ userId }) => {
    const [photoUrl, setPhotoUrl] = useState(defaultAvatar);

    const navigate = useNavigate();

    useEffect(() => {
        const timestamp = new Date().getTime();
        setPhotoUrl(`/api/users/${userId}/photo?t=${timestamp}`);
    }, [userId]);

    return (
        <img
            src={photoUrl}
            alt={`Фото пользователя ${userId}`}
            className="user-photo"
            onError={(e) => {
                e.currentTarget.src = defaultAvatar;
            }}
            onClick={() => navigate("/NotFound")}
        />
    );
};

export default UserPhoto;