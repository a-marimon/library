import { useState, useEffect } from 'react'
import BooksList from './booksList'
import TextField from '@material-ui/core/TextField';

const axios = require('axios')

const Home = () => {
  const [books, setBooks] = useState([])
  const [params, setParams] = useState()

  const getBooks = async () => {
    if (params === undefined || params === '') {
      let books = await axios.get('https://the-books-api.herokuapp.com/') 
      setBooks(books.data)
    } else {
      let books = await axios.get(`https://the-books-api.herokuapp.com/books/?title=${params.title}`) 
      setBooks(books.data)
    }
  }

  useEffect(() => {
    getBooks()
  }, [params])

  return (
    <div className='home-cnt roots'>
      <TextField id="outlined-basic" label="Search your book" variant="outlined" onChange={e => setParams({title: e.target.value})}/>
      <BooksList books={books}/>
    </div>
  )
}

export default Home