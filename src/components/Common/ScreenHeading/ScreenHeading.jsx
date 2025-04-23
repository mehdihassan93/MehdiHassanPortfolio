// File: src/components/Common/ScreenHeading/ScreenHeading.jsx
import React from 'react';
import './ScreenHeading.css';

export default function ScreenHeading({ title, subHeading }) {
  return (
    <div className="screen-heading">
      <h1>{title}</h1>
      <p>{subHeading}</p>
    </div>
  );
}