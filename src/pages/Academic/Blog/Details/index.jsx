import React from 'react'
import { Link } from 'react-router-dom'
import '../blog.scss'

import calendar from '../../../../assets/images/calendar.svg'
import BlogCard from '../../../../components/Blog'
import JoinUs from '../../../../components/JoinUs'
import { Helmet } from 'react-helmet'

const BlogDetails = () => {
  return (
    <div className='blog-details'>
        <Helmet>
        <title>Bloqlar</title>
        </Helmet>
        <ul className="breadcrumb">
                <li>
                    <Link to='/blogs'>Bloq</Link>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <Link to='/blogs/1'>UX/UX Dizayn</Link>
                </li>
        </ul>
        <div className="details">
            <h1>Blog</h1>
            <div className="details__wrap">
                <div className="details__wrap__img">
                <img src="https://s3-alpha-sig.figma.com/img/8eed/f335/a1412977333c788f4aabb90649e4f01a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsxtY-doJpcEm~3e7Bk11rHbeyX-prF9O-KAUdgmz7hNKS9o3s9Mxwx89HH3sMUE5kZMJ6f1nePaqRAFS~uPEphzm6dSSuP1xJShXj3PqFrE4CrYGz1f-ZO3hpFdBOg-MxTyNj~ENGyBBWZmL~gl1SSeVNN6a6N6sDLf3em5eQmNM5vfMJXs9SA2bPV6ddHpsYf4eZkqQ0syXQM6XhaWKHFopwGlsoQo0S~zQ5lfqZOnQGmG0RHNl4bxq-a7xh1oebzOV0KYzqqQWr9bVhxUrz2MGTKOoHJq013B6CDXcHvGr6EDO~8bE3MbJyibOY8fOasioZa-asGSExw32bZT~w__" alt="" />
                </div>
                <div className="details__wrap__content">
                    <h2>Dizaynın önəmi nədir?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. Pellentesque ultrices a ullamcorper suspendisse hendrerit id scelerisque lacus cras. Sit tristique morbi porttitor aenean vulputate in. Ac tellus massa vulputate consectetur ut eget nunc. Posuere ac vitae   urna consequat sed dictum diam nullam.
                        Nisl ut scelerisque semper justo in. Nisl sem et volutpat leo enim. Quisque amet quam a quis. Ultricies nunc erat aliquam proin cursus mollis velit malesuada. Semper egestas massa turpis bibendum sem. Facilisi aliquet eu augue fermentum arcu egestas. Volutpat semper egestas mattis nec orci jusLorem ipsum dolor sit amet consectetur. Diam dui eu sed adipiscing mi mattis. Pellentesque ultrices a ullamcorper suspendisse hendrerit id scelerisque lacus cras. Sit tristique morbi porttitor aenean vulputate in. Ac tellus massa vulputate consectetur ut eget nunc. Posuere ac vitae leo urna consequat sed dictum diam nullam.
                        Nisl ut scelerisque semper justo in. Nisl sem et volutpat leo enim. Quisque amet quam a quis. Ultricies nunc erat aliquam proin cursus mollis velit malesuada. Semper egestas massa turpis bibendum sem. Facilisi aliquet eu augue fermentum arcu egestas. Volutpat semper egestas mattis nec orci jus</p>
                    <ul>
                        <li>
                            <img src={calendar} alt="" />
                            <span>UX/UI Dizayn</span>
                        </li>
                        <li>
                            <img src={calendar} alt="" />
                            <span>13 Sentyabr 2024</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="similar-blogs">
            <div className="similar-blogs__title">
                <h2>Oxşar bloglar</h2>
                <Link>Daha çox</Link>
            </div>
            <div className="similar-blogs__list">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <JoinUs />
        </div>
    </div>
  )
}

export default BlogDetails