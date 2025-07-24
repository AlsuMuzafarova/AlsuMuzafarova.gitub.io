import UserPhoto from "./UserPhoto";
import {useNavigate} from "react-router-dom";
import "./Avatar.css"
import React from "react";

interface AvatarProps {
    userId: string | number;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({userId}) => {
    const navigate = useNavigate();

    return <div className="Avatar" onClick={() => navigate("/NotFound")}>
        <div className="avatar-inner-border">
            <UserPhoto userId={userId} className="photo"/>
        </div>
    </div>
}

export default Avatar;