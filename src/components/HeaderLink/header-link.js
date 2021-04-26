import { Link } from 'gatsby'
import React from 'react'
import { link } from "./header-link.module.scss";

const HeaderLink = (props) => (
    <Link className={link} to={props.to} onClick={() => props.setOpen(!props.open)}>{props.text}</Link>
);

export default HeaderLink;