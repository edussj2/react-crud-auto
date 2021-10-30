import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Productos</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/trabajadores">Trabajadores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/marcas">Marca</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/autos">Auto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;