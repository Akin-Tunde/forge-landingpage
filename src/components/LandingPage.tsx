import React from 'react';
import { useParams } from 'react-router-dom';

// Type the params directly as a Record<string, string | undefined>
const LandingPages: React.FC = () => {
  // Use 'useParams' to retrieve the landingId as a string
  const { landingId } = useParams<Record<string, string | undefined>>();

  // If landingId is undefined, you can handle it gracefully (e.g., show an error)
  if (!landingId) {
    return <div>Error: Landing ID is missing.</div>;
  }

  const landingPageUrl = `https://testgam.netlify.app/landing-pages/${landingId}.html`;

  return (
    <div>
      <h1>Landing Page: {landingId}</h1>
      <iframe
        src={landingPageUrl}
        width="100%"
        height="1000px"
        title="Landing Page"
      />
    </div>
  );
};

export default LandingPages;
