import { Link, useLocation } from 'react-router-dom';

import '../scss/navStyle.scss';

const Navigation = ({changeLang}) => {

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <header>
            <DefaultNavigation loc={currentPath} changeLang={changeLang}></DefaultNavigation>
        </header>
    );
};

const DefaultNavigation = ({loc, changeLang}) => {
    
    return (
        <div>
            <nav>
                <div className="logo">
                <a href="/">
                    <img src={"/assets/img/new_logo_white.png"}  alt="logo" height="50px" />
                </a>
                </div>
                <ul>
                    {/*<li><Link to="/vault">Vault</Link></li>*/}
                    <li><Link to="/projects">Projects</Link></li>
                    {/* <li><Link to="/faq">FAQ</Link></li> */}
                    <li><Link to="/about">About</Link></li>
                </ul>
                <label>
                    <span>EN</span>
                    <input role="switch" type="checkbox" onChange={changeLang}/>
                    <span>KR</span>
                </label>
            </nav>
        </div>
    )
}

export default Navigation;