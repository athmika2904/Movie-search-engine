import { Link } from "react-router-dom";
import "../Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbrand">
                <Link to ="/">Movie App</Link>
            </div>
            <div className="navlinks">
                <Link to ="/" className="navl">Home</Link>
                <Link to ="/favourites" className="navl">Favourites</Link>
            </div>

        </nav>
    )
}
export default Navbar;