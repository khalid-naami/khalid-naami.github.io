import React from 'react';
import EducationList from '../General/EducationList';

const data = [
  {
    school: 'Advanced Software Technology (USA - Remote) 🇺🇸',
    link: '#',
    degree: 'Specialization in Programming Languages & Tech Architecture',
    date: '2024 - Present',
    summary: [
      'Advanced mastery of C, C++, Python, and JavaScript integration.',
      'Developing low-latency financial systems and scalable cloud architectures.',
      'Emphasis on cross-language software engineering and data structures.',
    ],
  },
  {
    school: 'Big Data Science Institute (Canada - Remote) 🇨🇦',
    link: '#',
    degree: 'Specialization in Big Data Science & Data Intelligence',
    date: '2024 - Present',
    summary: [
      'Specialized in processing large-scale datasets and financial data forensics.',
      'In-depth study of Supervised Learning, predictive modeling, and pattern recognition.',
      'Applying big data science to solve complex challenges in Financial and Medical data domains.',
    ],
  },
  {
    school: 'Business Administration & Global Macroeconomics',
    link: '#',
    degree: 'BSc. / Professional Diploma',
    date: 'Graduated 2023',
    summary: [
      'Core focus on Global Macroeconomic cycles, market indicators, and business strategy.',
      'Analytical foundation for combining macro-trends with quantitative financial engineering.',
      'Completed comprehensive studies on international finance and business operational excellence.',
    ],
  },
];

export default function ResumeEducation() {
  return <EducationList education={data} />;
}
