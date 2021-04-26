import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../LeftNav/left-nav'
import { container } from './layout.module.scss'

const Layout = ({children}) => (
    <div>
        <Helmet>
            <title>Will Herring</title>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans|Krona+One" rel="stylesheet"/>
        </Helmet>
        <Header/>
        <main className={container}>{children}</main>
    </div>
);

export default Layout;