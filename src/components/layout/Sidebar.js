import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const links = [
        {name: "Prompt", url: '/prompt'},
        {name: "Prop View", url: '/props'},
        {name: "Not Found", url: '/foo'},
    ];

    let linkComponents = links.map( (link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink 
                    to={link.url} 
                    activeClassName='activeNavLink' 
                    className='navLink'
                >
                    {link.name}
                </NavLink><br />
            </li>
        );
    });

    return (
        <div className={'leftNavContainer'}>
            <ul>
                <li className='nav'>
                    <NavLink 
                        to='/' 
                        activeClassName='activeNavLink' 
                        className='navLink'
                        exact
                    >
                        Home
                    </NavLink><br />
                </li>
                {linkComponents}
            </ul>
        </div>
    );
};

export default Sidebar;