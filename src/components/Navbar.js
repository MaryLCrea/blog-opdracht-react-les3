import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/overzicht">
                            Overzicht
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/blogpost">
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