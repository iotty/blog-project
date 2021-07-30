import * as React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SeoBlog = ({title, description, meta = []}) => {
    const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          description
          title
          twitter
        }
      }
    }`)

    const metaDescription = description || data.site.siteMetadata.description

    return(
        <Helmet
        title={title}
        htmlAttributes={{lang: `id`}}
        titleTemplate={`%s by ${data.site.siteMetadata.title}`}
        meta={[
            {
                name: `description`,
                content: metaDescription,
            },
            {
                name: `og:title`,
                content: title,
            },
            {
                name: `og:description`,
                content: metaDescription,
            },
            {
                name: `og:type`,
                content: `website`,
            },
            {
                name: `twitter:title`,
                content: title,
            },
            {
                name: `twitter:creator`,
                content: data.site.siteMetadata.twitter || ``,
            },
            {
                name: `twitter:description`,
                content: metaDescription,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
        ].concat(meta)}
        />
    )
}

export default SeoBlog