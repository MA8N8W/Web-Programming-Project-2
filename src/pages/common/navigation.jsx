import {NavLink} from "react-router-dom";
import toggleMenu from "../../../public/scripts/navigationscript.jsx"

function Navigation () {
    return(
        <div className="navigation responsive" id="mainNav">
            <div className="wrapper">
                <ul role="list">
                    <li>
                        <NavLink to="/home" data-hover="Home" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/javascript' data-hover="Javascript" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>JavaScript</NavLink>
                    </li>
                    <li>
                        <NavLink to='/react' data-hover="React" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>React</NavLink>
                    </li>
                    <li>
                        <NavLink to='/spa' data-hover="SPA" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>SPA</NavLink>
                    </li>
                    <li>
                        <NavLink to='/fetch' data-hover="Fetch" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>Fetch</NavLink>
                    </li>
                    <li>
                        <NavLink to='/axios' data-hover="Axios" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>Axios</NavLink>
                    </li>
                    <li>
                        <NavLink to='/oojs' data-hover="OOJS" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>OOJS</NavLink>
                    </li>
                    <li className="menuButton">
                        <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation

