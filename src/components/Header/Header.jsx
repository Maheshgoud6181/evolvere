import './Header.css';
import logoEvolvere from '../../images/logoevolvere.png';
import depart from '../../images/depart.png';

const Header = () => {

    return (
        <>
            <nav id="navbar">
                <a href="/" className="logo">
                    <img src={logoEvolvere} alt="Evolvere Logo" className='logoevolvere' />
                </a>
                <button className="mobile-menu-btn" id="menuBtn">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="nav-links" id="navLinks">
                    <a href="#about">About</a>
                    <a href="#what-we-do">What We Do</a>
                    <a href="#events">Events</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#team">Team</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
            <section className="hero">
                <div>


                    <div className="container">
                        <div className="hero-content">
                            <h1>Evolvere | Biotech Society of NIT DGP</h1>
                            <p>Join our society to explore biotech in creative, collaborative ways — from managing events and crafting content to designing graphics, developing the web, or curating research . Be part of the vibrant culture on campus.</p>
                            <div className="hero-btns">
                                <a href="#about" class="btn">Learn More</a>
                                <a href="#contact" class="btn btn-outline">Join Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={depart} alt="hi" className="department" />
            </section>
        </>
    )
}
export default Header
