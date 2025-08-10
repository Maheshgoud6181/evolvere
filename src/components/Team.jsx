import "../App.css"

const Team = () => {

    return (
        <>
            <section className="team" id="team">
                <div className="container">
                    <h2>Our Amazing Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Team Member" />
                                <div class="member-social">
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fas fa-envelope"></i></a>
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                           
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member" />
                                <div className="member-social">
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fas fa-envelope"></i></a>
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3>Michael Chen</h3>
                                <span className="member-role">Vice President</span>
                                <p className="member-bio">Bioengineering junior specializing in biomedical device development.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member" />
                                <div className="member-social">
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fas fa-envelope"></i></a>
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3>Priya Patel</h3>
                                <span className="member-role">Research Coordinator</span>
                                <p className="member-bio">Graduate student in Biotechnology leading our CRISPR research team.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Team Member" />
                                <div class="member-social">
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fas fa-envelope"></i></a>
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3>David Kim</h3>
                                <span className="member-role">Outreach Director</span>
                                <p className="member-bio">Biochemistry major organizing our community education programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Team