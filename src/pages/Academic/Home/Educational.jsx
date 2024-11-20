import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Banner from "../../../components/Banner/Edu";
import JoinUs from "../../../components/JoinUs";
import BlogCard from "../../../components/Blog";

import arrowRight from '../../../assets/images/arrow-right.svg'
import calling from '../../../assets/images/calling.svg'
import chooseIcon from '../../../assets/images/chooseIcon.svg'
import chooseVector from '../../../assets/images/choose-vector.png'
import '../../home.scss'
import { getData } from "../../../api/home";
import FieldCard from "../../../components/Fields";

const Educational = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="educational">
      {
        data ?  <>
        <Helmet>
         <title>Ana səhifə</title>
       </Helmet>
       <Banner path='home' data={data.homeData}/>
       <div className="fields-home">
         <div className="similar-blogs__title">
           <h2>Tədris sahələri</h2>
           <Link to="/fields">Daha çox <img src={arrowRight} alt="" /></Link>
         </div>
         <div className="fields__list">
          {
            data.courses.length > 0 ? data.courses.map(course => {
              return(
                <FieldCard key={course.id} data={course}/>
              )
            }) : "Bloq yoxdur..."
           }
        </div>
       </div>
       
       <div className='choose'>
          <div className="choose-wrap">
              <div className="choose-img">
                  <img src={chooseVector} alt="" />
                  <img src="https://s3-alpha-sig.figma.com/img/f3f1/308c/e729608a580e1795551c13800dc73d66?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuE9-Sad77TuwH8O7~z5tVFGgRP8tq6sQakqy9~pQ96DJdhatRzihfSbD6YRdGexpmAKWIqQWfoaIWwBT1zGuBHJz2JaOAeuel5tbEH5C7BjB9XykOTkh~QPClAM0rbGGM7kIGH5fQKQEhjZoXgFgct4cneyn4gEdw1KF8Lw8R4DKucPklEI6MsymXkIS~uOm0NHfPOngpK5ElxcPwvI-pN8ITWbEtB6SYOI1sblSNjZXas1M2ewKhMy9t~5~FNH1n~bkXoa-fED4Hg5QeBvrooUCbuP3A6tIbox9OFIgEm2MQQqzlOfcQ~Tllcp629MbKmml-QvAZ6Q1llUQl3mZQ__" alt="" />
              </div>
              <div className="choose-content">
                  <h1>{data.homeData.innerTitle}</h1>
                  <p>{data.homeData.innerDescription}</p>
                  <ul className="choose-content-items">
                      <li>
                          <img src={chooseIcon} alt="" />
                          <span>{data.homeData.option1}</span>
                      </li>
                      <li>
                          <img src={chooseIcon} alt="" />
                          <span>{data.homeData.option2}</span>
                      </li>
                      <li>
                          <img src={chooseIcon} alt="" />
                          <span>{data.homeData.option3}</span>
                      </li>
                      <li>
                          <img src={chooseIcon} alt="" />
                          <span>{data.homeData.option4}</span>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
       <div className="similar-blogs">
         <div className="similar-blogs__title">
           <h2>Bloqlar</h2>
           <Link to="/blogs">Daha çox <img src={arrowRight} alt="" /></Link>
         </div>
         <div className="similar-blogs__list">
           {
            data.blogs.length > 0 ? data.blogs.map(blog => {
              return(
                <BlogCard key={blog.id} data={blog}/>
              )
            }) : "Bloq yoxdur..."
           }
         </div>
       </div>
       <JoinUs />
       <div className="calling">
         <a href="tel:0502656463">
           <img src={calling} alt="" />
         </a>
       </div>
        </> : 'is loading...'
      }
    </div>
  );
};

export default Educational;
