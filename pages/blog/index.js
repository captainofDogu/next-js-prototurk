import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const index = () => {
  return (
      <>
        <Head>
        <title>Blogs</title>
        </Head> 
    <div>/blog erişmek istersek index.js yapmamız gerekli
              <Link href="/">Anasayfa</Link>

    </div>
    </>
  )
}

export default index
/* a tag ile yönlendirme yaptııgmızda sayfa yeniledindiği için bazı değişikler kayboluyo Link ile yapıldıgında sayfa render edilmeden gidiyor */