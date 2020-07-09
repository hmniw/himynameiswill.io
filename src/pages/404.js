import React from "react"
import styles from './404.module.scss'
import { Link } from 'gatsby'

export default () => (
        <div className={styles.content}>
            <h1 className={styles.header}>Page not found</h1>
            <p className={styles.errorMessage}>
                The page you are looking for does not exist.
            </p>
            Click here to go <Link to={'/'}>Home</Link>
        </div>
)