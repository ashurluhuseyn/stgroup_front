import React, { useEffect, useState } from 'react'
import CorporateBanner from '../../../components/Banner/Corporate'
import Services from '../../../components/Services'
import Advantages from '../../../components/Advantages'
import Partner from '../../../components/Partner'
import { getDataForCo } from '../../../api/home'
import AdvantageCard from '../../../components/Advantages/Card'

const Corporate = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataForCo();
        setData(data);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='corporate'>
      {
        data ? <>
          <CorporateBanner data={data.homeData}/>
      <Services data={data.services}/> 
      <div className='advantages'>
        <h1 className='advantages__title'>Üstünlüklərimiz</h1>
        <div className="advantages__list">
            {
              data.advantages && data.advantages.map(item => {
                return(
                  <AdvantageCard key={item.id} data={item}/>
                )
              })
            }
        </div>
      </div>
      <Partner />
        </> : 'yuklenir...'
      }
    </div>
  )
}

export default Corporate