import { NavLink  } from 'react-router' 
import styles from "./Header.module.css"
import logo from "../../assets/LOGO-main.png"

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="kasa-logo"></img>
            <nav>
                <NavLink  to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Accueil</NavLink >
                <NavLink  to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>A Propos</NavLink >
            </nav>
        </header>
    )
}

export default Header