import React from 'react';

import './header.css';


const Header = () => {
    return (
        <div className="header d-flex">
            <h3>Welcome</h3>
            <ul className="d-flex">
                <li>
                    Menu
                </li>
                <li>
                    All Tasks
                </li>
                <li>
                    Name Category
                </li>
            </ul>
        </div>
    )
}

export default Header;