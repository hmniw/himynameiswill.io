import { Link } from 'gatsby'
import React from 'react'
import styles from "./header-link.module.scss";

export default (props) => (
    <Link className={styles.link} to={props.to} onClick={() => props.setOpen(!props.open)}>{props.text}</Link>
);