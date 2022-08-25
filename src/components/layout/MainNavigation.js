import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header>
        <div>ngfbeers</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/companies'>Companies Page</Link>
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
}

export default MainNavigation;