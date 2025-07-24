import { useNavigate } from "react-router-dom";

import Avatar from "./ui/Avatar";
import './Header.css';

import Logo from "../assets/Logo.svg"
import Search from "../assets/Search.svg"


const Header = () => {
    const userId = -1;
    const navigate = useNavigate();

    return (
        <div className="Header">
            <div className="header-container">
                <div className="Logo">
                    <img src={Logo} className="App-Logo" alt="Logotype" onClick={() => navigate("/")}/>
                </div>
                <div className="navigation">
                    <img src={Search} className="Search-sign" alt="Search sign"/>
                    <select className="language">
                        <option value="Ru">Ru</option>
                    </select>
                    <Avatar userId={userId}/>
                </div>
            </div>
        </div>
    )
}

export default Header;