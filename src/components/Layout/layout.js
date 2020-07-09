import React from 'react'
import styles from './layout.module.scss'
import Header from './header'
import Footer from './footer'

export default ({children}) => (
    <div>
        <Header/>
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
        <Footer>
            My new Gatsby Blog 2020
        </Footer>
    </div>
);