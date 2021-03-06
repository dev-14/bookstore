import React from "react";

export default function SupervisorNav() {
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
                            <a class="nav-link" href="/categories">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/books">Books</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Users</a>
                        </li>
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
                            <a class="nav-link" href="#">My Profile</a>
                        </div>
                        <div className="nav-item active">
                            <a class="nav-link" href="/logout">Logout</a>
                        </div>
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
