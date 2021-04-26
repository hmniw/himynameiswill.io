import React from "react"
import {content, header, errorMessage} from './404.module.scss'
import { Link } from 'gatsby'

const Page404 = () => (
        <div className={content}>
            <h1 className={header}>Page not found</h1>
            <p className={errorMessage}>
                The page you are looking for does not exist.
            </p>
            Click here to go <Link to={'/'}>Home</Link>
        </div>
);

export default Page404;