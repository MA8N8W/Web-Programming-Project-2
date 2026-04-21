import {Link} from "react-router-dom";

function Navigation () {
    return(
        <div className="navigation responsive" id="mainNav">
            <div className="wrapper">
                <ul role="list">
                    <li>
                        <Link to="/home" data-hover="Home">Home</Link>
                    </li>
                    <li>
                        <Link to='/javascript' data-hover="Javascript">JavaScript</Link>
                    </li>
                    <li>
                        <Link to='/react' data-hover="React">React</Link>
                    </li>
                    <li>
                        <Link to='/spa' data-hover="SPA">SPA</Link>
                    </li>
                    <li>
                        <Link to='/fetch' data-hover="Fetch">Fetch</Link>
                    </li>
                    <li>
                        <Link to='/axios' data-hover="Axios">Axios</Link>
                    </li>
                    <li>
                        <Link to='/oojs' data-hover="OOJS">OOJS</Link>
                    </li>
                    <li className="menuButton">
                        <a href="javascript:void(0);" className="icon" onClick="toggleMenu()">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation

