import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/Layout/layout'

export default () => (
    <Layout>
        <h1>This is the about page</h1>
        <div>
            <Link to={"/"}>Home</Link> | <Link to={"/about"}>About Me</Link>
        </div>
        <p>
            Lorem ipsum.
        </p>
    </Layout>
)
