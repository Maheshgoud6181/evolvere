import React from 'react';
import './Opportunities.css';

const Opportunities = () => (
  <section className="opportunities" id="opportunities">
    <div className="container">
      <h2>Academic Opportunities</h2>
      <div className="opportunities-grid">
        {/* Undergraduate Research */}
        <div className="opportunity-card">
          <div className="opportunity-icon">
            <i className="fas fa-microscope"></i>
          </div>
          <h3>Undergraduate Research</h3>
          <p className='para'>
            Work alongside faculty on ongoing research projects with potential 
            for publication and conference presentations.
          </p>
          <a href="/" className="btn opportunity-btn">Learn More</a>
        </div>
        <div className="opportunity-card">
          <div className="opportunity-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3>Alumni & Senior Mentorship</h3>
          <p className='para'>
            Connect with alumni and senior members for guidance on academics, career planning, and skill development.
          </p>
          <a href="/" className="btn opportunity-btn">Learn More</a>
        </div>
      </div>
    </div>
  </section>
);

export default Opportunities;
