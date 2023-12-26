import React from 'react';
import linkedinIcon from './../../../assets/icons/linkedin.png';
import emailIcon from './../../../assets/icons/email.png';

interface Member {
  photo: string;
  name: string;
  role: string;
  company: string;
  location: string;
  linkedin: string;
  email: string;
}

interface ProjectCardProps {
  member: Member;
}

const TeamCard: React.FC<ProjectCardProps> = ({ member }) => {
  return (
    <div className="team-member">
      <img src={member.photo} alt={member.name} />
      <h2>{member.name}</h2>
      <div className="member-details">
        <p>{member.role}</p>
        <p>{member.company}</p>
        <p>{member.location}</p>
      </div>
      <div className="member-contact">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <span>
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          </span>
        </a>
        <a href={`mailto:${member.email}`}>
          <span>
            <img src={emailIcon} alt="Email" className="contact-icon" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;