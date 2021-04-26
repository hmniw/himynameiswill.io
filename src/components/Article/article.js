import React from 'react'
import { Link } from 'gatsby'
import {articleBox, container, date, title, excerpt, chevronContainer, chevron} from './article.module.scss'
import chevronImage from '../../images/chevron-left.svg'

const Article = (props) => (
    <Link to={props.to} style={{ textDecoration: 'none' }}>
        <article className={articleBox} key={props.id}>
            <div className={container}>
                <div className={date}>
                    {props.date}
                </div>
                <h3 className={title}>
                    {props.title}
                </h3>
                <div className={excerpt}>
                    {props.excerpt}
                </div>
            </div>
            <div className={chevronContainer}>
                <img src={chevronImage} className={chevron} alt={""}/>
            </div>
        </article>
    </Link>
)

export default Article;