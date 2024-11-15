import React from 'react'
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper'

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <div class="filter-container">
                    <div class="filter-section">
                        <div class="filter-group">
                            <label>Filter by:</label>
                            <div class="dropdown">
                                <button class="dropdown-toggle">All Challenges</button>
                                <i class="dropdown-arrow"></i>
                            </div>
                            <div class="dropdown">
                                <button class="dropdown-toggle">Is full or needs Mem...</button>
                                <i class="dropdown-arrow"></i>
                            </div>
                        </div>

                        <div class="search-group">
                            <label>Search by:</label>
                            <input type="text" placeholder="Team Number.." class="search-input" />
                            <input type="text" placeholder="Title.." class="search-input title-input" />
                        </div>

                        <div class="sort-group">
                            <label>Sort by:</label>
                            <div class="dropdown">
                                <button class="dropdown-toggle">Newest</button>
                                <i class="dropdown-arrow"></i>
                            </div>
                        </div>
                    </div>
                    <div class="results-count">5130 results</div>
                </div>
                <ProjectsWrapper />
            </div>
        </section>
    )
}

export default Projects