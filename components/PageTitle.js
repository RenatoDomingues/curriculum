
import React from 'react'
import Head from 'next/head'

const PageTitle = ({title}) => {
    return (
        <Head>
          <title>Curriculum-{title}</title>
        </Head>
    )
}

export default PageTitle 