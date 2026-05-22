import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { getMovies } from '../api'
import { MovieCard } from './MovieCard'
import { MovieForm } from './MovieForm'

function MoviesList({}) {

    const [movies,setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
       const movies =  getMovies()

       setMovies(movies)

    },[])

    const handleOnNewMovie = () => {
        navigate('/movies/new')
    }

    return <div>
        <p><button type='button' onClick={handleOnNewMovie}>Add Movie</button></p>
    <div className='movies-container'>
        {
           movies.map((movie) => (<MovieCard 
            movie={movie}
             />)) 
        }
    </div>
    <MovieForm />
    </div>
}

export {
    MoviesList
}