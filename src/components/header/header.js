import React from 'react';
import DropDownMenu from '../dropDownMenu/drop-down-menu';
import { Button } from 'reactstrap';

import './header.css';


const Header = () => {
    return (
        <div className="header d-flex">
        
            <DropDownMenu />

            <h2> Orange </h2>

            <Button color="primary">Add Task</Button>{' '}
            
        </div>
    )
}

export default Header;