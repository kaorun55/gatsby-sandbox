import * as React from 'react'
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query MediaQuery {
        allMediaJson {
         edges {
            node {
                    id
                    author
                    createdTime
                    url
                    type
            }
        }
        }
    }
    `)


    const events = data.allMediaJson.edges
    return (
        <Layout pageTitle="Media Page">
            <div>
                <tr><th>Author</th>|<th>作成日時</th>|<th>URL</th></tr>
                {events.map(e => (
                    <tr><th>{e.node.author}</th>|<th>{e.node.createdTime}</th>|<th><a href={e.node.url}>Link</a></th></tr>
                ))}
            </div>
      </Layout>
  
    )
}

// Step 3: Export your component
export default IndexPage
