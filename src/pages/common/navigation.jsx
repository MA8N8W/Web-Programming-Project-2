import {NavLink} from "react-router-dom";
import toggleMenu from "../../../public/scripts/navigationscript.jsx"

function Navigation () {
    return(
        <div className="navigation" id="mainNav">
            <div className="wrapper">
                <ul role="list">
                    <li>
                        <NavLink to="/project2/home" data-hover="Home" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project2/javascript' data-hover="JavaScript" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>JavaScript</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project2/react' data-hover="React" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>React</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project2/spa' data-hover="SPA" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>SPA</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project2/fetch' data-hover="Fetch" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>Fetch</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project2/axios' data-hover="Axios" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>Axios</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project2/oojs' data-hover="OOJS" styleName={({ isActive }) => "active" + (isActive ? " activated" : "")}>OOJS</NavLink>
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

