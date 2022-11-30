import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../../features/movie/movieSlice'
import Skeleton from '../../UI/atoms/skeleton/Skeleton'
import Card from '../../UI/organisms/card/Card'

export default function HomePage() {
  const dispatch = useDispatch()

  const { movies, loading } = useSelector((state) => state.movie)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  const cardSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <Skeleton key={item} />)
  }

  return (
    <>
      <div className='layout mx-auto max-w-screen-xl bg-white py-8'>
        <h2 className='text-xl font-semibold text-black md:text-2xl'>
          Show your favorite movies
        </h2>

        <div className='mt-8 grid justify-items-center gap-2 sx:grid-cols-2 xs:gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-4'>
          {loading
            ? cardSkeleton()
            : movies?.map((movie, index) => (
                <Card
                  key={index}
                  moviePoster={movie.Poster}
                  movieAlt={movie.Title}
                  movieTitle={movie.Title}
                />
              ))}
        </div>
      </div>
    </>
  )
}
