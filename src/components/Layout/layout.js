import React from 'react'
import Header from '../LeftNav/left-nav'
import styles from './layout.module.scss'

export default ({children}) => (
    <div>
        <title>Will Herring</title>
        <Header/>
        <main className={styles.container}>{children}</main>
    </div>
);