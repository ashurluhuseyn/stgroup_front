import React, { useEffect, useState } from 'react'
import { getApplyCounts, getCourseViews } from '../../../api/stat';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import './admin-home.scss'
import { CiUser, CiLocationArrow1,CiBoxList, CiKeyboard } from "react-icons/ci";

const AdminHome = () => {
  const [counts, setCounts] = useState({ jobApply: 0, academicApply: 0, corporateApply: 0, blogCount: 0, userCount: 0, vacancyCount: 0,  courseCount: 0  });
  const [courseViews, setCourseViews] = useState([]);

    useEffect(() => {
        async function fetchApplyCounts() {
            try {
                const data = await getApplyCounts()
                setCounts(data);
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        }

        async function fetchCourseViews() {
          try {
              const data = await getCourseViews()
              setCourseViews(data)
          } catch (error) {
              console.error('Error fetching views:', error);
          }
      }

        fetchApplyCounts();
        fetchCourseViews()
    }, []);

    const total = counts.jobApply + counts.academicApply + counts.corporateApply;
    const jobApplyPercentage = ((counts.jobApply / total) * 100).toFixed(2);
    const academicApplyPercentage = ((counts.academicApply / total) * 100).toFixed(2);
    const corporateApplyPercentage = ((counts.corporateApply / total) * 100).toFixed(2);

    const data = {
      labels: [`İşə müraciət (${jobApplyPercentage}%)`, `Akademik müraciət (${academicApplyPercentage}%)`, `Korporativ müraciət (${corporateApplyPercentage}%)`],
      datasets: [
          {
              label: 'Müraciət sayı',
              data: [counts.jobApply, counts.academicApply, counts.corporateApply],
              backgroundColor: ['#fd7e14', 'rgb(63, 208, 189)', 'rgb(130, 107, 248)'],
          }
      ]
  };


  const courseLabels = courseViews.map(course => course.name); // Kurs adlarını alırıq
  const courseData = courseViews.map(course => course.views); // Baxış saylarını alırıq

  const courseColors = [
   '#6B81B3', '#e63757', '#2c7be5', '#f5803e', '#038d53', '#63B8F5', '#656566'
  ];

  const courseChartData = {
    labels: courseLabels,
    datasets: [
      {
        label: 'Kurs Baxış Sayıları',
        data: courseData,
        backgroundColor: courseColors.slice(0, courseViews.length),
      }
    ]
  };

  return (
    <div className='admin-home'>
      <div className="wrap">
        <div className="wrap__top">
          <ul>
            <li>
                <CiUser />
                <p><span>{counts.userCount}</span> İstifadəçi</p>
            </li>
            <li>
                <CiKeyboard />
                <p><span>{counts.courseCount}</span> Kurs</p>
            </li>
            <li>
                <CiBoxList />
                <p><span>{counts.blogCount}</span> Bloq</p>
            </li>
            <li>
                <CiLocationArrow1 />
                <p><span>{counts.vacancyCount}</span> Vakansiya</p>
            </li>
          </ul>
        </div>
        <div className='d-flex justify-content-between'>
          <div className="apply-chart">
          <Pie data={data} />
          </div>

          <div className="apply-chart">
            <Bar data={courseChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome