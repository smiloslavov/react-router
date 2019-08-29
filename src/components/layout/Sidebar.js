import React from "react";
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {

    const links = [
        {name: "Recursive", url: '/color/Yellow/ffff00'},
        {name: "Smart Color", url: '/color/Green/00ff00'},
        {name: "Color", url: '/color'},
        {name: "Prompt", url: '/prompt'},
        {name: "Prop View", url: '/props'},
        {name: "Logging", url: '/logging'},
        {name: "Private", url: '/private'},
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
            <Link to='/pets'>
                <img src='/assets/unicorn.png' width={100} />
            </Link>
        </div>
    );
};

export default Sidebar;