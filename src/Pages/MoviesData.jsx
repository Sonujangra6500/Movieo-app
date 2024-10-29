import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MoviesData = () => {
  const allmovieData = useSelector((state) => state.movioData.allmovieData)

  return (
    <div className="flex flex-wrap justify-center gap-2  md:gap-8 pt-6 md:pt-10 pb-10">
      {allmovieData?.Search?.map((Search) => {
        return (
          <Link
            key={Search.imdbID}
            to={`/OneMovie/${Search?.Title}`}
            state={{ allmovieData: Search }}
          >
            <div
              className="rounded-lg shadow-lg p-4 md:p-8 w-[250px] md:w-[300px] h-[370px] md:h-[400px] bg-gradient-to-br from-gray-400 to-slate-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <img
                className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 rounded"
                src={Search.Poster}
                alt={`${Search.Title} official artwork`}
              />
              <h1 className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-4 text-white capitalize">
                {Search.Title}
              </h1>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default MoviesData
