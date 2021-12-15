import React from "react";
import { Dropdown, DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle, UncontrolledPopover, PopoverBody, Button } from 'reactstrap';
import { TiShoppingCart, TiUserOutline } from "react-icons/ti";

export default function UserNav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Bookstore</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/books">Books</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Users</a>
                        </li> */}
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown05">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="navbar-nav mb-2 mb-lg-0">
                        <div className="nav-item active">
                            <a class="nav-link" href="/cart"><TiShoppingCart size="30" /></a>
                        </div>
                        {/* <div className="d-flex justify-content-center p-5">
                            <Dropdown toggle={function noRefCheck() { }}>
                                <DropdownToggle >
                                   <TiUserOutline size="30" />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <a class="nav-link" href="#">My Profile</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a class="nav-link" href="/logout">Logout</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div> */}
                        {/* <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div> */}

                        {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}

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
                            <DropdownMenu style={{width: '100%'}} className="pull-right">
                                <DropdownItem>
                                <a class="nav-link" style={{color: 'grey'}} href="#">My Profile</a>
                                </DropdownItem>
                                <DropdownItem>
                                <a class="nav-link" style={{color: 'grey'}} href="/logout">Logout</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* <div>
                            <button
                                id="PopoverFocus"
                                //type="button"
                                // color="secondary"
                                className="btn"
                                style = {{padding : "0px"}}
                            >
                             <a class="nav-link"><TiUserOutline size="30" /></a>   
                            </button>
                            {' '}
                            
                        </div>
                        <UncontrolledPopover
                            placement="bottom"
                            target="PopoverFocus"
                            trigger="focus"
                        >

                            <PopoverBody>
                                <div className="nav-item active">
                                    <a class="nav-link" href="#">My Profile</a>
                                </div>
                                <div className="nav-item active">
                                    <a class="nav-link" href="/logout">Logout</a>
                                </div>
                            </PopoverBody>
                        </UncontrolledPopover> */}
                        {/* <div className="nav-item active">
                            <a class="nav-link" href="#"><TiUserOutline size="30"/></a>
                        </div> */}
                        {/* <div className="nav-item active">
                            <a class="nav-link" href="#">My Profile</a>
                        </div>
                        <div className="nav-item active">
                            <a class="nav-link" href="/logout">Logout</a>
                        </div> */}
                    </div>
                    {/* <ul>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">My Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
                        </li>
                    </ul> */}

                </div>
            </div>
        </nav>
    );
}
