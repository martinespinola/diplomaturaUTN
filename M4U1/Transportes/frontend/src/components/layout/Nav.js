import '../../styles/Nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" classname={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/nosotros" classname={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" classname={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" classname={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>

                </ul>
            </div>

        </nav >
    );
}
export default Nav;