import React from 'react';
import CoursesList from '../General/CoursesList';

const data = [
  {
    title: 'Advanced Quantitative Finance & Options Theory',
    date: '2024',
    link: '#',
    issuer: 'Led by Industry Experts from JPMorgan (JPM) & CBOE',
  },
  {
    title: 'Macro-Economic Strategy & Global Markets',
    date: '2023',
    link: '#',
    issuer: 'International Financial Institution',
  },
  {
    title: 'Data Science & Machine Learning Specialization',
    date: '2024',
    link: '#',
    issuer: 'Canadian Analytics Institute',
  },
];

export default function ResumeCourses() {
  return <CoursesList courses={data} />;
}
