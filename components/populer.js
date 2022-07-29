import React from 'react'
import Link from 'next/link'

const Populer = ({movies}) => {
  return (
    <div className='populer'>      
        {movies.results.map((movie) => (
        <div>
        <Link href={`/film/${movie.id}`}>
            <a>         
                 <h3>{movie.title}</h3>
          <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} />
          </a>
          </Link>
        </div>
      ))}
      <style jsx>
          {`
          .populer {
              display:flex;
              flex-wrap: wrap ;
              width:1000px;
              margin: 0px auto;
              gap:10px;
              

          }
          div {
              width: 25%;
              margin:0px;
              height:25% ;
              
          }
          h3 {
              font-size:20px
              position:reletive;
              bottom:0;
              left:0;
              width:100%;
              color:gray;
          }
          `}
      </style>
      </div>
  )
}

export default Populer