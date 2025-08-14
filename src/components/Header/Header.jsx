import './Header.css';
import logoEvolvere from '../../images/logoevolvere.png';
import depart from '../../images/depart.png';

const Header = () => {

    return (
        <>
            <nav id="navbar">
                <a href="/" className="logo">
        <img src={logoEvolvere} alt="Evolvere Logo" className='logoevolvere'/>
    </a>
                <button className="mobile-menu-btn" id="menuBtn">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="nav-links" id="navLinks">
                    <a href="#about">About</a>
                    <a href="#what-we-do">What We Do</a>
                    <a href="#events">Events</a>
                    <a href="#opportunities">Opportunities</a>
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


                {/* <svg className="dna-animation" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 20 Q120 40 100 60 Q80 80 100 100 Q120 120 100 140 Q80 160 100 180 Q120 200 100 220 Q80 240 100 260 Q120 280 100 300 Q80 320 100 340 Q120 360 100 380" stroke="#006D77" stroke-width="2" fill="none" stroke-dasharray="5,5" />
                    <circle cx="120" cy="40" r="3" fill="#E29578" />
                    <circle cx="80" cy="80" r="3" fill="#E29578" />
                    <circle cx="120" cy="120" r="3" fill="#E29578" />
                    <circle cx="80" cy="160" r="3" fill="#E29578" />
                    <circle cx="120" cy="200" r="3" fill="#E29578" />
                    <circle cx="80" cy="240" r="3" fill="#E29578" />
                    <circle cx="120" cy="280" r="3" fill="#E29578" />
                    <circle cx="80" cy="320" r="3" fill="#E29578" />
                    <circle cx="120" cy="360" r="3" fill="#E29578" />
                </svg> */}

                {/* <svg className="microscope-animation" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.87-86.13-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z" fill="#83C5BE" />
                </svg>  */}
                <img src={depart} alt="hi" className="department"/>
            </section> 
        </>
    )
}
export default Header
