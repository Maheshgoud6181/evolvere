const Events = () => {

    return (
        <>
            <section className="events" id="events">
                <div className="container">
                    <h2>Recent Events</h2>
                    <div className="events-slider">
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CRISPR Workshop" />
                                <div className="event-date">AUG 15</div>
                            </div>
                            <div className="event-content">
                                <h3>CRISPR Gene Editing Workshop</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> August 15, 2023</span>
                                    <span><i className="fas fa-users"></i> 45 attendees</span>
                                </div>
                                <p>Hands-on workshop introducing CRISPR-Cas9 technology and its applications in genetic engineering.</p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80" alt="Biotech Conference" />
                                <div className="event-date">JUL 28</div>
                            </div>
                            <div className="event-content">
                                <h3>Annual Biotech Symposium</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> July 28, 2023</span>
                                    <span><i className="fas fa-users"></i> 120 attendees</span>
                                </div>
                                <p>Keynote speakers from leading biotech firms discussed industry trends and career opportunities.</p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Lab Tour" />
                                <div className="event-date">JUN 10</div>
                            </div>
                            <div className="event-content">
                                <h3>Genentech Facility Tour</h3>
                                <div class="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> June 10, 2023</span>
                                    <span><i className="fas fa-users"></i> 25 attendees</span>
                                </div>
                                <p>Exclusive behind-the-scenes tour of Genentech's research and production facilities.</p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Science Fair" />
                                <div className="event-date">MAY 5</div>
                            </div>
                            <div className="event-content">
                                <h3>Community Science Fair</h3>
                                <div class="event-meta">
                                    <span><i className="far fa-calendar-alt"></i> May 5, 2023</span>
                                    <span><i className="fas fa-users"></i> 300+ visitors</span>
                                </div>
                                <p>Interactive exhibits demonstrating biotechnology concepts to local school students and families.</p>
                                <a href="/" className="btn btn-outline">View Photos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="opportunities" id="opportunities">
                <div className="container">
                    <h2>Academic Opportunities</h2>
                    <div className="opportunities-grid">
                        <div className="opportunity-card">
                            <div className="opportunity-icon">
                                <i class="fas fa-microscope"></i>
                            </div>
                            <h3>Undergraduate Research</h3>
                            <p>Work alongside faculty on ongoing research projects with potential for publication and conference presentations.</p>
                            <a href="/" className="btn opportunity-btn">Learn More</a>
                        </div>
                        <div className="opportunity-card">
                            <div className="opportunity-icon">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h3>iGEM Competition</h3>
                            <p>Join our International Genetically Engineered Machine (iGEM) team competing against universities worldwide.</p>
                            <a href="/" className="btn opportunity-btn">Learn More</a>
                        </div>
                        <div className="opportunity-card">
                            <div className="opportunity-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3>Internship Program</h3>
                            <p>Exclusive internship opportunities with our partner biotech companies and research institutions.</p>
                            <a href="/" className="btn opportunity-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Events