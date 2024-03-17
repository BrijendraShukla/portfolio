import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export const Hero = () => {
  const [text] = useTypewriter({
    words:['Frontend Developer','Backend Developer', 'FullStack Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:25,
    delaySpeed:300,
  })
  return (
    <section className={styles.home} id={styles.home}>
      <div className={styles.home_content}>
        <h3>Hi, Myself</h3>
        <h1>Brijendra Shukla</h1>
        <h3>And I'm {' '}  
          <span>{text}</span>
          <Cursor/>
          </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam ratione doloribus voluptatum voluptas nobis error, asperiores sit sint vel aspernatur saepe itaque ipsum placeat! Adipisci soluta dolore corrupti dolorum!</p>
        <div className={styles.social_media}>
          <a href="#">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </div>
        <a href="#"className={styles.btn}>Download CV</a>
      </div>
      <div className={styles.home_img}>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")} alt="Brijendra" />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
