import React from 'react'
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper'
import { useFetch } from '../../hooks/useFetch'

const Projects = () => {
    const { data: projects, loading } = useFetch('/projects/projects/');
    console.log(projects);
    
    return (
        <section className="projects">
            <div className="container">
                <header className="projects-header">
                    <h1>Projects</h1>
                    <button className="start-project-btn">START A PROJECT</button>
                </header>
                <div className="filter-container">
                    <div className="filter-section">
                        <div className="filter-group">
                            <label>Filter by:</label>
                            <div className="select-wrapper">
                                <select>
                                    <option>All Challenges</option>
                                    <option>Active Challenges</option>
                                    <option>Completed Challenges</option>
                                </select>
                            </div>
                            <div className="select-wrapper">
                                <select>
                                    <option>Is full or needs Mem...</option>
                                    <option>Is full</option>
                                    <option>Needs members</option>
                                </select>
                            </div>
                        </div>

                        <div className="search-group">
                            <label>Search by:</label>
                            <input type="text" placeholder="Team Number.." className="search-input" />
                            <input type="text" placeholder="Title.." className="search-input title-input" />
                        </div>

                        <div className="sort-group">
                            <label>Sort by:</label>
                            <div className="select-wrapper">
                                <select>
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>A-Z</option>
                                    <option>Z-A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="results-count">5130 results</div>
                </div>
                <ProjectsWrapper />
            </div>
        </section>
    )
}

export default Projects