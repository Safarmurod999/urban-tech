import React, { useState } from "react";

const NextStep = () => {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = (type) => {
    if (inputValue.trim() === "") return;

    if (type === "skill" && !skills.includes(inputValue)) {
      setSkills([...skills, inputValue.trim()]);
    } else if (type === "interest" && !interests.includes(inputValue)) {
      setInterests([...interests, inputValue.trim()]);
    }
    setInputValue("");
  };

  const removeItem = (type, index) => {
    if (type === "skill") {
      setSkills(skills.filter((_, i) => i !== index));
    } else if (type === "interest") {
      setInterests(interests.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="next">
      <h1 className="title">Add your skills and interests</h1>

      {/* Skills Section */}
      <div className="form-section">
        <label className="label">Skills</label>
        <div className="input-group">
          <input
            type="text"
            className="input"
            placeholder="Add a skill"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem("skill")}
          />
          <button className="add-button" onClick={() => addItem("skill")}>
            Add
          </button>
        </div>
        <div className="tags-container">
          {skills.map((skill, index) => (
            <div key={index} className="tag">
              {skill}
              <button className="remove-button" onClick={() => removeItem("skill", index)}>
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="form-section">
        <label className="label">Interests</label>
        <div className="input-group">
          <input
            type="text"
            className="input"
            placeholder="Add an interest"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem("interest")}
          />
          <button className="add-button" onClick={() => addItem("interest")}>
            Add
          </button>
        </div>
        <div className="tags-container">
          {interests.map((interest, index) => (
            <div key={index} className="tag">
              {interest}
              <button className="remove-button" onClick={() => removeItem("interest", index)}>
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="button-group">
        <button className="save-button" onClick={() => alert("Profile Updated Successfully!")}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NextStep;
