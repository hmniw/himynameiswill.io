import React from "react"
import Layout from '../components/Layout/layout'
import {container, fancy, paragraphContainer, paragraph, ao, mot, twitter} from './about.module.scss'

const PageAbout = () => (
    <Layout>
        <div className={container}>
            <h1 className={fancy}>Will Herring</h1>
            <div className={paragraphContainer}>
                <div className={paragraph}>Alright, so hi <span role={"img"} aria-label={"waving hand"}>👋</span></div>
                <div className={paragraph}>Currently I work for
                    <a href={"https://www.ao-jobs.com/"} className={ao}> AO </a>
                    as a Quality Engineer<span role={"img"} aria-label={"alien monster"}>👾</span>I’m at the
                     beginning of my journey, and though I’ve learnt plenty so far, there’s plenty more
                    that I’ve yet to learn <span role={"img"} aria-label={"man student"}>👨‍🎓</span>
                </div>
                <div className={paragraph}>
                    I built this site to help solidify a lot of the things I've been learning through
                    <a href={"https://www.ministryoftesting.com/"} className={mot}> Ministry of Testing</a>, and to try and share
                    some of it back with the community <span role={"img"} aria-label={"man technologist"}>👨‍💻 </span>
                    A lot of this will consist of opinionated stuff, ideas on the theory of testing,
                    probably sometimes some personal stuff, and maybe some stuff on automation
                    <span role={"img"} aria-label={"mechanical arm"}> 🦾</span>
                </div>
                <div className={paragraph}>
                    Social handles are on the homepage, and I'd love to hear feedback and differing
                    opinions, so <a href={"https://twitter.com/WillTestsThings"} className={twitter}> reach out</a>
                    <span role={"img"} aria-label={"man raising one hand"}> 🙋‍♂</span> ️
                </div>
            </div>
        </div>
    </Layout>
);

export default PageAbout;
