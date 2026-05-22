import {useEffect, useState} from 'react'
import { getMovies } from '../api'
import { MovieCard } from './MovieCard'

function MoviesList({}) {

    const [movies,setMovies] = useState([])
    useEffect(() => {
       const movies =  getMovies()

       setMovies(movies)

    },[])

    return <div className='movies-container'>
        {
           movies.map((movie) => (<MovieCard 
            movie={movie}
             />)) 
        }
    </div>
}

export {
    MoviesList
}