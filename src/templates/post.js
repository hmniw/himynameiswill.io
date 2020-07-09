import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from '../components/Layout/layout'
import styles from './post.module.scss'

export default ({data}) => {
    const post = data.markdownRemark;

    return (
        <Layout>
                <div className={styles.flexWrapper}>
                    <div className={styles.postContainer}>
                        <div className={styles.post}>
                            <div className={styles.title}>
                                {post.frontmatter.title}
                            </div>
                            <div className={styles.date}>
                                {post.frontmatter.date}
                            </div>
                            <div className={styles.content} dangerouslySetInnerHTML={{__html: post.html}}/>
                        </div>
                        <div className={styles.backButtonContainer}>
                            <Link to={'/blog'} className={styles.backButton} style={{ textDecoration: 'none'}}>Go back</Link>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
                date(formatString: "MMM D YYYY")
                keywords
            }
        }
    }
`;