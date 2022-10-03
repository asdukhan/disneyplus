import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Slider from '../Components/Slider'
import Brands from '../Components/Brands'

import MoviesCollection from '../Components/MoviesCollection'
import ShowsCollection from '../Components/ShowsCollection'

export default function Home({
  popularMovies,
    popularShows,
    top_ratedMovies,
    top_ratedShows,

}) {
 
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='relative min-h-screen after:bg-home
      after:bg-center after:bg-cover after:bg-no-repeat
      after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
        <Slider/>
        <Brands/>
        <MoviesCollection results={popularMovies} title="Popular Movies" />
          <ShowsCollection results={popularShows} title="Popular Shows" />

          <MoviesCollection
            results={top_ratedMovies}
            title="Top Rated Movies"
          />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  
  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
     
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}