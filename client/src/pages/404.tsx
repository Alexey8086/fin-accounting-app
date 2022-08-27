import React from 'react'
import '../styles/404/404.css'

const NotFoundPage: React.FC = () => {
  return (
    <div className='pg-container'>
      <h1 className='neon'>404 NOT FOUND</h1>
      <h2 className='neon'>Упс, запрашиваемая вами страница не найдена ...</h2>
    </div>
  )
}

export default NotFoundPage