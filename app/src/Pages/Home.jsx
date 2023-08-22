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
      <div className="div-title1">
        <h2 className="home-title">Seja uma líder diferenciada e reconhecida por sua liderança saudável e equilibrada.</h2>
      </div>
      <WhereDoWeBegan />
      <ToWhom />
      <CoursePresentation />
      <PersonalPresentation />
      <GoogleForms />
      <Footer />
    </>
  );
}
