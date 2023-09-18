import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar(props){

    return(
        <div>
            <nav className = "nav">
                <ul>
                <li>
                <Link className = "active" to = "/">Home</Link>
                </li>
                {console.log(props.groups)}
                <li>
                <Link to= "/Groupstages"  >Group Stages</Link>
                </li>
                <li>
                <Link to="/Playoffs" state = {props.groups}>Playoffs</Link>
                </li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar;