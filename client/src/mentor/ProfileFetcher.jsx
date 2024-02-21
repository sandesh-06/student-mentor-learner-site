import React from 'react';
import Profile from './Profile'; 


const ProfileFetcher = () => {
  const profile = {
    "name": "Samuel Johnson",
    "unique_id": "AUTO_GENERATED_ID",
    "reg_no": "33445566",
    "dept": "Computer Science",
    "year": 4,
    "mobile": "3344556677",
    "email": "samuel.johnson@example.com",
    "cgpa": 8.6,
    "subjects": [
      "Software Engineering",
      "Database Management Systems",
      "Computer Graphics",
      "Machine Learning",
      "Computer Vision"
    ],
    "eligible_to_teach": {
      "subject": "Machine Learning"
    },
    "skills": {
      "tech_skills": ["Java", "Python", "SQL"],
      "soft_skills": ["Teamwork", "Problem-solving"],
      "pitch_yourself": "I am passionate about developing innovative software solutions."
    }
  };

  return (
    <div>
      <Profile profile={profile} />
    </div>
  );
};

export default ProfileFetcher;
