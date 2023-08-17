import React from 'react';
import WhereDoWeBegan from '../Components/WhereDoWeBegan';
import PersonalPresentation from '../Components/PersonalPresentation';
import CoursePresentation from '../Components/CoursePresentation';
import ToWhom from '../Components/ToWhom';

export default function Home() {
  return (
    <>
      <h1>Academia de Mulheres</h1>
      <h1>Inspire</h1>
      <WhereDoWeBegan />
      <ToWhom />
      <PersonalPresentation />
      <CoursePresentation />
    </>
  );
}
