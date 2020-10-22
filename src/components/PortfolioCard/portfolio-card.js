import React from 'react'
import styles from './portfolio-card.module.scss'
import { Link } from 'gatsby'

export default (props) => (
    <Link to={props.to} style={{ textDecoration: "none" }}>
        <div className={styles.cardContainer}>
            <div className={styles.cardBackground}>
                <h3 className={styles.titleText}>
                    {props.title}
                </h3>
                <h4 className={styles.descriptionText}>
                    {props.description}
                </h4>
            </div>
        </div>
    </Link>
)