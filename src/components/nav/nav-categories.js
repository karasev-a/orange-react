import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavCategories extends Component {

    render() {
        return (
            <Nav tabs >
                {/* <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem> */}
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/register">Registration</NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink href="/tasks/">All Tasks</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/users/">All Users</NavLink>
                </NavItem> */}
            </Nav>
        );
    }
}

export default NavCategories;
