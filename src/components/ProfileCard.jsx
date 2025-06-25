import React from "react";
import "./ProfileCard.css"

const ProfileCard = ({
  name = "John Doe",
  age,
  bio = "This user has not provided a biography.",
}) => {
  const truncateBio = (text) => {
    return text.length > 100 ? text.substring(0, 100) + "… Read More" : text;
  };

  return (
    <div className="profile-card">
      <h2 className="profile-name">{name}</h2>
      {age !== undefined && <p className="profile-age">Age: {age}</p>}
      <p className="profile-bio">{truncateBio(bio)}</p>
    </div>
  );
};

export default ProfileCard;
