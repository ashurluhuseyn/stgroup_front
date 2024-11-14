import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Banner from "../../../components/Banner/Edu";
import JoinUs from "../../../components/JoinUs";
import ChooseUs from "../../../components/ChooseUs";
import BlogCard from "../../../components/Blog";

import arrowRight from '../../../assets/images/arrow-right.svg'
import calling from '../../../assets/images/calling.svg'
import '../../home.scss'

const Educational = () => {
  return (
    <div className="educational">
       <Helmet>
        <title>Ana səhifə</title>
      </Helmet>
      <Banner />
      <ChooseUs />
      <div className="similar-blogs">
        <div className="similar-blogs__title">
          <h2>Bloqlar</h2>
          <Link to="/blogs">Daha çox <img src={arrowRight} alt="" /></Link>
        </div>
        <div className="similar-blogs__list">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <JoinUs />
      <div className="calling">
        <a href="tel:0502656463">
          <img src={calling} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Educational;
