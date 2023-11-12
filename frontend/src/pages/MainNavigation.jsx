import { Outlet, NavLink } from 'react-router-dom';

import classes from './MainNav.module.css';

const MainNavigation = () => {
    return (
        <>
        <header>
            <h1>Evention Center</h1>
            <nav>
                <NavLink to='/' className={({isActive}) => (isActive ? classes.active_link : classes.link)}>Home</NavLink>
                <NavLink to='/events'  className={({isActive}) => (isActive ? classes.active_link : classes.link)}>Events</NavLink>
            </nav>
        </header>
        <Outlet />
        </>
        
    )
};

export default MainNavigation;