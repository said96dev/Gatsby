import React from 'react'
import setUpTags from '../utils/setUpTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const Tags = ({ recipes }) => {
  const newTags = setUpTags(recipes)
  return (
    <div className='tag-container'>
      <h4>recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link key={index} to={`/tags/${slug}`}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
