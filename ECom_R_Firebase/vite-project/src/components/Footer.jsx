import React from 'react';
import './Footer.css'
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <button className="button">Learn More</button>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <Card title="Item 1" description="This is a description of item 1." />
      <Card title="Item 2" description="This is a description of item 2." />
      <Card title="Item 3" description="This is a description of item 3." />
      <Card title="Item 4" description="This is a description of item 4." />
      <h1>tyd</h1>
    </div>
  );
};

export default Footer;