import { useContext } from 'react';

import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favourites-context';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>ngfbeers</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/companies'>Beer Companies</Link>
                    </li>
                    <li>
                        <Link to='/new-company'>Add new company</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            Your favourites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                            </Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;