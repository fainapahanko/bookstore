import React from 'react'
import BookList from '.BookList'

export default function BookList ({SingleBook}) {
  const bookElements = books.map(book =>
    <li key = {book.asin}>book = {book}</li>
  )
  return (
    <ul>{bookElements}</ul>
  )
}
