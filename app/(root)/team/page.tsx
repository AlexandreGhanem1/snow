import React from 'react';

interface LinkedInCardProps {
  profileUrl: string;
  name: string;
  imageUrl: string;
}

const LinkedInCard: React.FC<LinkedInCardProps> = ({ profileUrl, name, imageUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt="Profile" />
        <div className="cardContent">
          <h4><b>{name}</b></h4> 
          <a href={profileUrl}>LinkedIn Profile</a>
        </div>
      </div>
    );
  };

const hadiAbouDayaProps: LinkedInCardProps = {
  profileUrl: "https://www.linkedin.com/in/hadiad?originalSubdomain=lb",
  name: "Hadi Abou Daya",
  imageUrl: "https://media.licdn.com/dms/image/C4E03AQEyBHCr0nSvpg/profile-displayphoto-shrink_800_800/0/1654452604012?e=1709164800&v=beta&t=TXG0_cn3iFpQnec6LYfOFbE1UTf43hhrCV46ex4dgPQ",
};

const App: React.FC = () => {
  return <LinkedInCard {...hadiAbouDayaProps} />;
};

export default App;