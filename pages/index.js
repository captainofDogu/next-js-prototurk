import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Populer from '../components/populer'

export default function Home({movies}) {
  console.log(movies.results)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> 😂  Anasayfa 🧐</h1><br/>
        <Image src="/image/pasa.png" 
          height={144} 
          width={144} 
         /*  layout='fill' */
       />
      </main>
      <h3>Popüler Filmler</h3>

    <Populer movies={movies} />

    </>
  )
}

export async function getServerSideProps(){
  const request = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2479f56cb4d7045ca4b03a15d34c40c9&language=en-US&page=1')
  const movies = await request.json();
  return {
    props: {
      movies
    }
  }
}