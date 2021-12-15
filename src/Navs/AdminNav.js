import React from "react";
import { Navbar, NavItem, NavLink, NavbarBrand, Collapse, UncontrolledDropdown, Nav, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { TiShoppingCart, TiUserOutline } from "react-icons/ti";

export default function AdminNav() {
    return (
        <div>
            <Navbar
                color="dark"
                expand="md"
                dark

            >
                <NavbarBrand href="/">
                    Bookstore
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/categories/">
                                Categories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/books/">
                                Books
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/users">
                                Users
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar >
                        {/* <NavItem>
                            <NavLink href="/profile">
                                <TiShoppingCart size="30" />
                            </NavLink>
                        </NavItem> */}
                        <UncontrolledDropdown
                            // inNavbar
                            nav
                        >
                            <DropdownToggle
                                // caret
                                nav
                            >
                                <TiUserOutline size="30" />
                            </DropdownToggle>
                            <DropdownMenu style={{ width: '100%' }} className="pull-right">
                                <DropdownItem>
                                    <a class="nav-link" style={{ color: 'grey' }} href="#">My Profile</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a class="nav-link" style={{ color: 'grey' }} href="/logout">Logout</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* <NavItem>
                            <NavLink href="/profile">
                                My Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/logout">
                                Logout
                            </NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}
