import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:brijendrashukla17@gmail.com" target='_blank'>brijendrashukla17@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/brijendra-shukla-2827a71b2/" target='_blank' rel='noopener'>
                        linkedin.com/BrijendraShukla
                    </a>
                </li>
                <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/BrijendraShukla" target='_blank' rel='noopener'>github.com/BrijendraShukla</a>
                </li>
            </ul>
        </footer>
    );
};