import "./Faculty.css"

const Faculty = () => {

    return (
        <>
            <section className="faculty">
                <div className="container">
                    <h2>Our Faculty Advisors</h2>
                    <div className="faculty-grid">
                        <div className="faculty-card">
                            <div className="faculty-image">
                                <img src="https://nitdgp.ac.in/uploads/630bd9620220a19ec23c1ce61af1dc14.jpeg" alt="Faculty Advisor" />
                            </div>
                            <div className="faculty-content">
                                <h3>Dr. Amita Barik</h3>
                                <span className="faculty-department">Department of BioTechnology</span>
                                <div className="faculty-expertise">
                                    <p>Joined the Institute in 2019</p>
                                    <div className="expertise-tags">
                                        <span className="expertise-tag">Gene Therapy</span>
                                        <span className="expertise-tag">Virology</span>
                                        <span className="expertise-tag">CRISPR</span>
                                    </div>
                                </div>
                                <a href="/" className="btn btn-outline">View Profile</a>
                            </div>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-image">
                                <img src="https://nitdgp.ac.in/uploads/apurba_dey.jpg" alt="Faculty Advisor" />
                            </div>
                            <div className="faculty-content">
                                <h3>Dr. Apurba Dey</h3>
                                <span className="faculty-department">Department of Bioengineering</span>
                                <div className="faculty-expertise">
                                    <p>Joined the Institute in 2008</p>
                                    <div className="expertise-tags">
                                        <span className="expertise-tag">Tissue Engineering</span>
                                        <span className="expertise-tag">Biomaterials</span>
                                        <span className="expertise-tag">3D Bioprinting</span>
                                    </div>
                                </div>
                                <a href="/" className="btn btn-outline">View Profile</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Faculty
