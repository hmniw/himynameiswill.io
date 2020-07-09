import React from 'react'
import styles from './hero.module.scss'
// import { FaArrowDown } from "react-icons/fa/";


export default () => (
    <section className={styles.hero}>
        <h1>
            This is a demo site of&nbsp;the <strong>heroBlog</strong> GatsbyJS starter
        </h1>
        <button aria-label="scroll">
            {/*<FaArrowDown />*/}
        </button>
    </section>
)