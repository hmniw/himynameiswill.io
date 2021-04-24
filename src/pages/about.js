import React from "react"
import Layout from '../components/Layout/layout'
import styles from './about.module.scss'

export default () => (
    <Layout>
        <div className={styles.container}>
            <h1 className={styles.fancy}>Will Herring</h1>
            <div className={styles.paragraphContainer}>
                <div className={styles.paragraph}>Alright, so hi <span role={"img"} aria-label={"waving hand"}>👋</span></div>
                <div className={styles.paragraph}>Currently I work for
                    <a href={"https://www.ao-jobs.com/"} className={styles.ao}> AO </a>
                    as a Quality Engineer<span role={"img"} aria-label={"alien monster"}>👾</span>I’m at the
                     beginning of my journey, and though I’ve learnt plenty so far, there’s plenty more
                    that I’ve yet to learn <span role={"img"} aria-label={"man student"}>👨‍🎓</span>
                </div>
                <div className={styles.paragraph}>
                    I built this site to help solidify a lot of the things I've been learning through
                    <a href={"https://www.ministryoftesting.com/"} className={styles.mot}> Ministry of Testing</a>, and to try and share
                    some of it back with the community <span role={"img"} aria-label={"man technologist"}>👨‍💻 </span>
                    A lot of this will consist of opinionated stuff, ideas on the theory of testing,
                    probably sometimes some personal stuff, and maybe some stuff on automation
                    <span role={"img"} aria-label={"mechanical arm"}> 🦾</span>
                </div>
                <div className={styles.paragraph}>
                    Social handles are on the homepage, and I'd love to hear feedback and differing
                    opinions, so <a href={"https://twitter.com/WillTestsThings"} className={styles.twitter}> reach out</a>
                    <span role={"img"} aria-label={"man raising one hand"}> 🙋‍♂</span> ️
                </div>
            </div>
        </div>
    </Layout>
)
