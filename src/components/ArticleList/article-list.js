import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../Article/article'
import styles from './article-list.module.scss'

export default () => (
    <StaticQuery
        query={ graphql `query {
              allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                    totalCount
                    edges {
                          node {
                                id
                                frontmatter {
                                      title
                                      date(formatString: "MMM D YYYY")
                                }
                                fields {
                                    slug
                                }
                                excerpt
                          }
                    }
              }
         }`

        }

        render={ data => (
            <div className={styles.container}>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Article id={node.id}
                                 to={node.fields.slug}
                                 keywords={node.frontmatter.keywords}
                                 title={node.frontmatter.title}
                                 date={node.frontmatter.date}
                                 excerpt={node.excerpt}/>
                    ))}
            </div>
        )}
    />
)