import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1>Evention Center</h1>
      <nav>
        <NavLink 
          to='/' 
          className={({isActive}) => (isActive ? classes.active_link : classes.link)} 
          end 
        >
          Home
        </NavLink>
        <NavLink 
          to='/events'  
          className={({isActive}) => (isActive ? classes.active_link : classes.link)} 
          end 
        >
          Events
        </NavLink>
      </nav>
    </header>
  );
}

export default MainNavigation;
