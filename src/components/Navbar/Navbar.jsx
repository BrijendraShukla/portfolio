import React, { useState } from 'react'
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header  className={styles.header}>
            <a className={styles.logo} href="/">Portfolio</a>
            <img
                // className={styles.menuBtn}
                src={!menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                alt="menu-button"
                onClick={() => { setMenuOpen(!menuOpen) }}
                id={styles.menu_icon}
            />
            <nav className={`${styles.navbar} ${menuOpen ? styles.hide_navbar:""}`}>
                <a href="#home" className={styles.active}>Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )

}
