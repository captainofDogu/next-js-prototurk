import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
      <>
      <Head>
          <title>Hakkımda</title>
      </Head>
    <div>about page
        <h3>css uygulanacak başlık</h3>
    </div>

    <style jsx>
        {`
        h3 {
            font-size:20px;     
            font-weight:500;
            color:red;
        }
        `}
    </style>
    </>
  )
}

export default about