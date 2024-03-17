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
        <p>As a software engineer at Nagarro, Brijendra demonstrates expertise in both frontend and backend technologies. He is proficient in developing dynamic web and mobile applications using react.js, react-native, axios, TypeScript and Django Rest framework. Notable for cross-functional collaboration and implementing effective solutions. A 5-star coder at Hackerrank.</p>
        <div className={styles.social_media}>
          <a href="https://www.linkedin.com/in/brijendra-shukla-2827a71b2/" target='_blank' rel='noopener'>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>

          <a href="https://github.com/BrijendraShukla" target='_blank' rel='noopener'>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
          <a href="https://www.hackerrank.com/profile/shuklabrijendra1" target='_blank' rel='noopener'>
            <img src={getImageUrl("contact/hackerrank.png")} alt="Hacker Rank icon" className={styles.hackerrankImg}/>
          </a>
          <a href="https://leetcode.com/shuklabrijendra17/" target='_blank' rel='noopener'>
            <img src={getImageUrl("contact/leetcode1.png")} alt="Leetcode icon"  className={styles.leetcodeImg}/>
          </a>
        </div>
        <a href={getImageUrl("resume/brijendra_shukla_resume.pdf")}className={styles.btn} download>Download Resume</a>
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
