
import React from "react";
import "./Profile.css";

const Profile = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="name-container">
        <h2 className="name">{profile.name}</h2>
      </div>
      <div className="details">
        <div className="blue-card card">
          <p>
            <strong>Department:</strong> <div></div>{profile.dept}
          </p>
          <p>
            <strong>CGPA:</strong> <div></div>{profile.cgpa}
          </p>
          <p>
            <strong>Year:</strong> <div></div>{profile.year}
          </p>
          <p className="subjects">
            <strong>Subjects:</strong> {profile.subjects.join(", ")}
          </p>{" "}
          {/* Add class for subjects */}
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
        </div>
        <div className="green-card card">
          <p>
            <strong>Eligible to Teach:</strong>{" "}
            {profile.eligible_to_teach.subject}
          </p>
        </div>
        <div className="orange-card card">
          <div className="skills-card">
            <h3>Technical Skills</h3>
            <p>{profile.skills.tech_skills.join(", ")}</p>
          </div>
          <div className="skills-card">
            <h3>Soft Skills</h3>
            <p>{profile.skills.soft_skills.join(", ")}</p>
          </div>
          <div className="passion-card">
            <h3>Passion</h3>
            <p>{profile.skills.pitch_yourself}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;