import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>MyTasks</DropdownItem>
                    <DropdownItem>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}