import React from 'react'
import { container, footer } from './footer.module.scss'

const Footer = ({children}) => (
    <footer className={container}>
        <div className={footer}>
            {children}
        </div>
    </footer>
);

export default Footer;