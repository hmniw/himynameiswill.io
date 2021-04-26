import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../Article/article'
import { container } from './article-list.module.scss'

const ArticleList = () => (
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
            <div className={container}>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Article key={node.id}
                                 id={node.id}
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

export default ArticleList