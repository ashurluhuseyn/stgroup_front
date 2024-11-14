import React from 'react'
import CategoryList from '../../../components/Category'
import './fields.scss'
import FieldCard from '../../../components/Fields'
import { Helmet } from 'react-helmet'

const Fields = () => {
  return (
    <div className='fields-page'>
      <Helmet>
        <title>Tədris sahələri</title>
      </Helmet>
        <div className="fields">
            <div className="fields__title">
                <h1>Tədris sahələri</h1>
            </div>
            <CategoryList />
            <div className="fields__list">
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
              <FieldCard />
            </div>
        </div>
    </div>
  )
}

export default Fields