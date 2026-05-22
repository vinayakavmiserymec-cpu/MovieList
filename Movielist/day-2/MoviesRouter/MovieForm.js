import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { saveMovie } from '../api'

function MovieForm({ onSave }) {

  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [year,setYear] = useState('B')
  const [url,setUrl] = useState('C')
  const [showMovieError,setShowMovieError] = useState(false)

  const handleOnTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleOnYearChange = (e) => {
    setYear(e.target.value)
  }

  const handleOnUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(!title) {
      setShowMovieError(true)
    } else {
      setShowMovieError(false)
    }

    if(title && url && year) {
      const movieObject = {
        title,
        poster:url,
        year
      }

      saveMovie(movieObject)

      navigate('/')
    }
  }

  const handleOnBackButton = () => {
    navigate('/')
  }

  return <div>
    <button type='button' onClick={handleOnBackButton}>
      Back
    </button>
  
  <div className='form-container'>
    
    <p className='movie-form'>
      
    <form onSubmit={handleOnSubmit}>
      <div className='form-row'>
        <label>
          <span>
            Movile title
          </span>
          <input value={title} type="text" 
          onChange={handleOnTitleChange} 
          name="title"></input>
          {
            showMovieError && <div className='error-message'>Movie title is required</div>
          }
        </label>
      </div>
      <div className='form-row'>
        <label>
          <span>
            Year
          </span>
          <input type="number" value={year} onChange={handleOnYearChange} name="year"></input>
        </label>
      </div>
      <div className='form-row'>
        <label>
          <span>
            Image Url
          </span>
          <input type="url" value={url} onChange={handleOnUrlChange} name="imageUrl"></input>
        </label>
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </div>
    </form>
    
    </p>
  </div>
  </div>
}

export {
  MovieForm
}