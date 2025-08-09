const Events =()=>{
 
return (
    <>
      <section class="events" id="events">
        <div class="container">
            <h2>Recent Events</h2>
            <div class="events-slider">
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CRISPR Workshop"/>
                        <div class="event-date">AUG 15</div>
                    </div>
                    <div class="event-content">
                        <h3>CRISPR Gene Editing Workshop</h3>
                        <div class="event-meta">
                            <span><i class="far fa-calendar-alt"></i> August 15, 2023</span>
                            <span><i class="fas fa-users"></i> 45 attendees</span>
                        </div>
                        <p>Hands-on workshop introducing CRISPR-Cas9 technology and its applications in genetic engineering.</p>
                        <a href="/" class="btn btn-outline">View Photos</a>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80" alt="Biotech Conference"/>
                        <div class="event-date">JUL 28</div>
                    </div>
                    <div class="event-content">
                        <h3>Annual Biotech Symposium</h3>
                        <div class="event-meta">
                            <span><i class="far fa-calendar-alt"></i> July 28, 2023</span>
                            <span><i class="fas fa-users"></i> 120 attendees</span>
                        </div>
                        <p>Keynote speakers from leading biotech firms discussed industry trends and career opportunities.</p>
                        <a href="/" class="btn btn-outline">View Photos</a>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Lab Tour"/>
                        <div class="event-date">JUN 10</div>
                    </div>
                    <div class="event-content">
                        <h3>Genentech Facility Tour</h3>
                        <div class="event-meta">
                            <span><i class="far fa-calendar-alt"></i> June 10, 2023</span>
                            <span><i class="fas fa-users"></i> 25 attendees</span>
                        </div>
                        <p>Exclusive behind-the-scenes tour of Genentech's research and production facilities.</p>
                        <a href="/" class="btn btn-outline">View Photos</a>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Science Fair"/>
                        <div class="event-date">MAY 5</div>
                    </div>
                    <div class="event-content">
                        <h3>Community Science Fair</h3>
                        <div class="event-meta">
                            <span><i class="far fa-calendar-alt"></i> May 5, 2023</span>
                            <span><i class="fas fa-users"></i> 300+ visitors</span>
                        </div>
                        <p>Interactive exhibits demonstrating biotechnology concepts to local school students and families.</p>
                        <a href="/" class="btn btn-outline">View Photos</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="opportunities" id="opportunities">
        <div class="container">
            <h2>Academic Opportunities</h2>
            <div class="opportunities-grid">
                <div class="opportunity-card">
                    <div class="opportunity-icon">
                        <i class="fas fa-microscope"></i>
                    </div>
                    <h3>Undergraduate Research</h3>
                    <p>Work alongside faculty on ongoing research projects with potential for publication and conference presentations.</p>
                    <a href="/" class="btn opportunity-btn">Learn More</a>
                </div>
                <div class="opportunity-card">
                    <div class="opportunity-icon">
                        <i class="fas fa-globe-americas"></i>
                    </div>
                    <h3>iGEM Competition</h3>
                    <p>Join our International Genetically Engineered Machine (iGEM) team competing against universities worldwide.</p>
                    <a href="/" class="btn opportunity-btn">Learn More</a>
                </div>
                <div class="opportunity-card">
                    <div class="opportunity-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <h3>Internship Program</h3>
                    <p>Exclusive internship opportunities with our partner biotech companies and research institutions.</p>
                    <a href="/" class="btn opportunity-btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Events