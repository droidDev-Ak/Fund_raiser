import React from 'react';
import '/Users/apple/WebDev2/Startup_page/src/Components/Cards/car.css'
import fund_img from '/Users/apple/WebDev2/Startup_page/src/assets/fund.svg'


const campaigns = [
  { id: 1, title: 'Startup 1', image: fund_img, description: 'Revolutionizing AI.', raised: '5000', goal: '10000' },
  { id: 2, title: 'Startup 2', image: fund_img, description: 'Building green tech solutions.', raised: '2500', goal: '7500' },
  { id: 3, title: 'Startup 3', image: fund_img, description: 'Innovating in health tech.', raised: '6000', goal: '12000' },
  { id: 4, title: 'Startup 4', image: fund_img, description: 'Empowering local communities.', raised: '4000', goal: '9000' },
  { id: 5, title: 'Startup 5', image: fund_img, description: 'Disrupting e-commerce.', raised: '3000', goal: '8000' },
  { id: 6, title: 'Startup 6', image: fund_img, description: 'Pioneering clean energy.', raised: '7000', goal: '15000' },
  { id: 6, title: 'Startup 7', image: fund_img, description: 'Pioneering clean energy.', raised: '7000', goal: '15000' },
  { id: 6, title: 'Startup 8', image: fund_img, description: 'Pioneering clean energy.', raised: '7000', goal: '15000' },

];

const CampaignList = () => {
  return (
    <div className="campaigns-section">
      


      <div className='head_div'> Featured Startups </div>

      
      <div className="campaign-grid">`  `
        
        {campaigns.map((campaign) => (
          
          <div key={campaign.id} className="campaign-card">
            <img src={campaign.image} alt={campaign.title} className="campaign-image" />
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            
            <button className="donate-button">Donate Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;