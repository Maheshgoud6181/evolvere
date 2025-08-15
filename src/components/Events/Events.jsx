import React from 'react';
import './Events.css';

// Direct image imports without index.js
import snapit from '../../images/snapit.jpg';
import biocosmos from '../../images/biocosmos.jpg';
import prions from '../../images/prions.jpg';
import teachersday from '../../images/teachersday.jpg';

const Events = () => {
    return (
        <>
            <section className="events" id="events">
                <div className="container">
                    <h2>Recent Events</h2>
                    <div className="events-slider">
                        
                        {/* Snap It */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src={snapit} alt="CRISPR Workshop" />
                                <div className="event-date">AUG 15</div>
                            </div>
                            <div className="event-content">
                                <h3>Snap It</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> August 15, 2023</span>
                                    <span><i className="fas fa-users"></i> 45 attendees</span>
                                </div>
                                <p>
                                    Evolvere organizes cultural events like SnapIt and departmental functions 
                                    including Teachers' Day and farewells, fostering inclusivity and inter-batch 
                                    bonding in the department.
                                </p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>

                        {/* Biocosmos */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src={biocosmos} alt="Biotech Conference" />
                                <div className="event-date">JUL 28</div>
                            </div>
                            <div className="event-content">
                                <h3>Biocosmos</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> July 28, 2023</span>
                                    <span><i className="fas fa-users"></i> 120 attendees</span>
                                </div>
                                <p>
                                    Biocosmos, the department's magazine, features student articles, research, 
                                    interviews, and art, offering a platform for academic and creative expression 
                                    within the Biotech community.
                                </p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>

                        {/* Prions */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src={prions} alt="Prions" />
                                <div className="event-date">JUN 10</div>
                            </div>
                            <div className="event-content">
                                <h3>Prions</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> June 10, 2023</span>
                                    <span><i className="fas fa-users"></i> 25 attendees</span>
                                </div>
                                <p>
                                    Prions, our annual flagship event, features debates, quizzes, cultural showcases, 
                                    and competitions, encouraging collaboration, creativity, and discourse on scientific 
                                    and societal themes.
                                </p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>

                        {/* Teachers Day */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src={teachersday} alt="Teachers Day" />
                                <div className="event-date">MAY 5</div>
                            </div>
                            <div className="event-content">
                                <h3>Teachers Day</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> May 5, 2023</span>
                                    <span><i className="fas fa-users"></i> 300+ visitors</span>
                                </div>
                                <p>
                                    Evolvere hosts academic and industry events, including webinars and career 
                                    sessions, to keep students updated and guide them through diverse Biotech-related 
                                    career paths.
                                </p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Opportunities */}
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

                        {/* iGEM Competition
                        <div className="opportunity-card">
                            <div className="opportunity-icon">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h3>iGEM Competition</h3>
                            <p>
                                Join our International Genetically Engineered Machine (iGEM) team 
                                competing against universities worldwide.
                            </p>
                            <a href="/" className="btn opportunity-btn">Learn More</a>
                        </div> */}

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
        </>
    );
};

export default Events;
