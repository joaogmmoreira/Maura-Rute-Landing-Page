import React from 'react';
import WhereDoWeBegan from '../Components/WhereDoWeBegan';
import PersonalPresentation from '../Components/PersonalPresentation';
import CoursePresentation from '../Components/CoursePresentation';
import ToWhom from '../Components/ToWhom';
import Header from '../Components/Header';
import GoogleForms from '../Components/GoogleForms';
import '../Styles/Home.css';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <WhereDoWeBegan />
      <ToWhom />
      <PersonalPresentation />
      <CoursePresentation />
      <GoogleForms />
      <Footer />
    </>
  );
}
