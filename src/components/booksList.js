import { useState, useEffect } from 'react'
import Card from './card'

const BooksList = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(props.books)
  }, [props.books])

  return (
    <div className='home-cnt roots'>
      {
        books.map(book => (
          <Card 
            img={book.img_url}
            url={book.url}
            title={book.title}
            description={book.description}
            id={book.id}
          />
        ))
      }
    </div>
  )
}

export default BooksList