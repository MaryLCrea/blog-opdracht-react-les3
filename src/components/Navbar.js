import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <nav className="bar">
                <ul className="tekstul">
                    <li class="tekst" >
                        <NavLink to="/" className="tekst1">
                            Home
                        </NavLink>
                    </li>

                    <li className="tekst">
                        <NavLink to="/login" className="tekst1">
                          Login
                        </NavLink>
                    </li>

                    <li className="tekst">
                        <NavLink to="/overzicht" className="tekst1">
                          Overzicht
                        </NavLink>
                    </li>

                    <li className="tekst">
                        <NavLink to="/blogpost" className="tekst1">
                        Blogpost
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;

//rsc tab