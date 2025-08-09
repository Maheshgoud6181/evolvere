import "../App.css"


const Form =()=>{
 
return (
  <>
     <section className="contact" id="contact">
        <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Location</h3>
                            <p>Science Building, Room 205<br />University Campus</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Email</h3>
                            <a href="mailto:bioinnovators@university.edu">bioinnovators@university.edu</a>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Phone</h3>
                            <a href="tel:+11234567890">(123) 456-7890</a>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Meeting Times</h3>
                            <p>Every Wednesday<br />3:00 PM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" required/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" required/>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" required/>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Form