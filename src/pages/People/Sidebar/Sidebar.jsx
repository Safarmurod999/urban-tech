import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>FILTER PEOPLE</h2>
      <button className="clear-btn">CLEAR</button>

      <div className="filter-section">
        <h3>Role</h3>
        <label><input type="checkbox" /> Any</label>
        <label><input type="checkbox" /> Students</label>
        <label><input type="checkbox" /> Mentors</label>
        <label><input type="checkbox" /> Community Leaders</label>
      </div>

      <div className="filter-section">
        <h3>Group</h3>
        <label><input type="checkbox" /> The Junior Academy</label>
        <label><input type="checkbox" /> 1000 Girls 1000 Futures</label>
        <label><input type="checkbox" /> The Cornerstone Initiative</label>
      </div>
    </aside>

  )
}

export default Sidebar