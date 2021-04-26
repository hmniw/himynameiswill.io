import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from '../components/Layout/layout'
import {flexWrapper, postContainer, post, title, date, content, backButtonContainer, backButton} from './post.module.scss'

const PostTemplate = ({data}) => {
    const postData = data.markdownRemark;

    return (
        <Layout>
                <div className={flexWrapper}>
                    <div className={postContainer}>
                        <div className={post}>
                            <div className={title}>
                                {postData.frontmatter.title}
                            </div>
                            <div className={date}>
                                {postData.frontmatter.date}
                            </div>
                            <div className={content} dangerouslySetInnerHTML={{__html: postData.html}}/>
                        </div>
                        <div className={backButtonContainer}>
                            <Link to={'/blog'} className={backButton} style={{ textDecoration: 'none'}}>Go back</Link>
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

export default PostTemplate;