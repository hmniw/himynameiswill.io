import React from 'react'
import Layout from '../components/Layout/layout'
import styles from './portfolio.module.scss'
import PortfolioCard from '../components/PortfolioCard/portfolio-card'

export default () => (
    <Layout>
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={styles.c1r1}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c2r1}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c3r1}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c4r1}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c4r2}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c2r2}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c3r2}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c4r2}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c1r3}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c2r3}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c3r3}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
                <div className={styles.c4r3}>
                    <PortfolioCard to={''}
                                   title={'A title'}
                                   description={'Here are some words'}/>
                </div>
            </div>
        </div>
    </Layout>
)