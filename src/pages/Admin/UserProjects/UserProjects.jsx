import home from "../../../assets/images/home.png"

const UserProjects = () => {
    return (
        <section className="user-projects">
            <div className="container">
                <header className="projects-header" style={{marginBottom:"20px"}}>
                    <h1>My Projects</h1>
                    <button className="start-project-btn">START A PROJECT</button>
                </header>
                <div className="projects-wrapper">
                    <div className="projects-card card">
                        <img src={home} alt="project-image" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">
                                Weable (Fight Addiction)
                            </h3>
                            <p className="card-text">
                                Weable Project, an abbreviation for We Are Able,
                                is applied scientific research that aims to
                                utilize artificial intelligence and virtual
                                reality in the field of mental health to
                                treat or support the treatment of various
                                addictions in a scientifically grounded manner.
                            </p>
                        </div>
                    </div>
                    <div className="projects-card card">
                        <img src={home} alt="project-image" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">
                                Weable (Fight Addiction)
                            </h3>
                            <p className="card-text">
                                Weable Project, an abbreviation for We Are Able,
                                is applied scientific research that aims to
                                utilize artificial intelligence and virtual
                                reality in the field of mental health to
                                treat or support the treatment of various
                                addictions in a scientifically grounded manner.
                            </p>
                        </div>
                    </div>
                    <div className="projects-card card">
                        <img src={home} alt="project-image" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">
                                Weable (Fight Addiction)
                            </h3>
                            <p className="card-text">
                                Weable Project, an abbreviation for We Are Able,
                                is applied scientific research that aims to
                                utilize artificial intelligence and virtual
                                reality in the field of mental health to
                                treat or support the treatment of various
                                addictions in a scientifically grounded manner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProjects