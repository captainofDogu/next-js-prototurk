import Head from "next/head"

export default function FilmDetay({movie}){
    
/*     console.log('params',params)
    const router = useRouter()
    const {url}  = router.query */

    return (
        <div className="movie">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <h3>{movie.title} <div className="cover" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}>
           
           </div></h3>

            <br/><br/><br/><br/>
            
     <footer>
         
     <div className="summary">Film Detay: {movie.overview }
            </div>
     </footer>

            <style jsx>{`
            .movie {
                width:1000px;
                margin: 20px auto;
                position:relative;
                padding:20px;
                
            }
            h3 {
                font-size:30px;
                font-weight:bold;
                margin-bottom:20px;
                color:black;
                
            }
            .summary {
                font-size:18px;
                color: red;
                line-height:1.7;
                margin-top:500px;
                ;
                
            }
            .cover {
                position:absolute;
                width:100%;
                top:0;
                left:0;
                height:500px;
                background-size:cover;
                opacity:.5;
                
            }
            `}</style>
        </div>
    )
}

export async function getServerSideProps({params}){
    const request = await fetch(`
    https://api.themoviedb.org/3/movie/${params.url}?api_key=2479f56cb4d7045ca4b03a15d34c40c9&language=tr-TR`)
    const movie = await request.json()
    return {
      props: {
        movie
      }
    }
  }
  // OUTPUT: params {url: '278'}