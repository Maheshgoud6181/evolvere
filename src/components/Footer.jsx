import "../App.css"


const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-col">
                            <h3>BioInnovators</h3>
                            <p>Advancing biotechnology through student research, education, and innovation since 2015.</p>
                            <div className="social-links">
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#what-we-do">What We Do</a></li>
                                <li><a href="#events">Events</a></li>
                                <li><a href="#opportunities">Opportunities</a></li>
                                <li><a href="#team">Our Team</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Resources</h3>
                            <ul className="footer-links">
                                <li><a href="/">Research Projects</a></li>
                                <li><a href="/">Workshop Materials</a></li>
                                <li><a href="/">Internship Guide</a></li>
                                <li><a href="/">Biotech Careers</a></li>
                                <li><a href="/">Lab Protocols</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Newsletter</h3>
                            <p>Subscribe to our newsletter for the latest updates on events and research opportunities.</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Your Email" required />
                                <button type="submit" className="btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2023 BioInnovators Club. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>


        </>
    )
}
export default Footer