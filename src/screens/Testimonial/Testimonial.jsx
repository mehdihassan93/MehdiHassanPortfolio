// File: src/screens/Testimonial/Testimonial.jsx
import React from 'react';
import './Testimonial.css';
import ScreenHeading from '../../components/Common/ScreenHeading/ScreenHeading';

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <ScreenHeading title="Testimonials" subHeading="What people say" />
      <p>This is the Testimonial page.</p>
    </div>
  );
}