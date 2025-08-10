import "../App.css"


const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-col">
                            <h3>About Us</h3>
                            <p>Evolvere is a student-led biotechnology club at the University, dedicated to fostering innovation and collaboration in the field of biotechnology.</p>
                        </div>
                        <div className="footer-col">
                            <h3>Socials</h3>
                            <ul className="footer-links">
                                <li><a href="https://www.facebook.com/evolvereclub" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                                <li><a href="https://www.twitter.com/evolvereclub" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.instagram.com/evolvereclub" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.linkedin.com/company/evolvereclub" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Student Heads</h3>
                            <ul className="footer-links">
                                <li className="footer-head">President
                                    <li><a href="#" target="_blank" rel="noopener noreferrer">Vikrant Jaiswal</a></li>
                                </li>
                                <li className="footer-head">General-secretary
                                    <li><a href="#" target="_blank" rel="noopener noreferrer">Nirdesh Regmi</a></li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Evolvere. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer