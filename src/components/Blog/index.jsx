import React from 'react'
import './blog-card.scss'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='blog-card'>
       <Link to='/blogs/1'>
        <div className="blog-card__content">
              <div className="blog-card__content__img">
                <img src="https://s3-alpha-sig.figma.com/img/8eed/f335/a1412977333c788f4aabb90649e4f01a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsxtY-doJpcEm~3e7Bk11rHbeyX-prF9O-KAUdgmz7hNKS9o3s9Mxwx89HH3sMUE5kZMJ6f1nePaqRAFS~uPEphzm6dSSuP1xJShXj3PqFrE4CrYGz1f-ZO3hpFdBOg-MxTyNj~ENGyBBWZmL~gl1SSeVNN6a6N6sDLf3em5eQmNM5vfMJXs9SA2bPV6ddHpsYf4eZkqQ0syXQM6XhaWKHFopwGlsoQo0S~zQ5lfqZOnQGmG0RHNl4bxq-a7xh1oebzOV0KYzqqQWr9bVhxUrz2MGTKOoHJq013B6CDXcHvGr6EDO~8bE3MbJyibOY8fOasioZa-asGSExw32bZT~w__" alt="" />
              </div>
              <div className="blog-card__content__title">
                  <h1>UI/UX Design nədir?</h1>
                  <p>One powerful online software suite One sa po werful </p>
                  <span>13 Sentyabr 2024</span>
              </div>
          </div>
       </Link>
    </div>
  )
}

export default BlogCard