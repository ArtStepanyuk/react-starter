import React from 'react'

export default function NewsList({ news }) {
  return <div>{news.length && news.map((item, index) => <h1 key={index}>{item.author}</h1>)}</div>
}
