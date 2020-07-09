import React from 'react'
import { Link } from 'gatsby'
import styles from './article.module.scss'
import chevron from '../../images/chevron-left.svg'

export default (props) => (
    <Link to={props.to} style={{ textDecoration: 'none' }}>
        <article className={styles.articleBox} key={props.id}>
            <div className={styles.container}>
                <div className={styles.date}>
                    {props.date}
                </div>
                <h3 className={styles.title}>
                    {props.title}
                </h3>
                <div className={styles.excerpt}>
                    {props.excerpt}
                </div>
            </div>
            <div className={styles.chevronContainer}>
                <img src={chevron} className={styles.chevron} alt={""}/>
            </div>
        </article>
    </Link>
)