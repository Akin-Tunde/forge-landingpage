import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Site</h1>
      <p>This is the home page.</p>
      <p>Click on the links to view the landing pages:</p>
      <ul>
        <li>
          <a href="/landing-pages/landing_320264_1744104796523">Landing 1</a>
        </li>
        <li>
          <a href="/landing-pages/landing_320265_1744104796524">Landing 2</a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
