import { Link } from 'react-router-dom';

function MainNavigation() {
    return <header>
        <div>ngfbeers</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Companies</Link>
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