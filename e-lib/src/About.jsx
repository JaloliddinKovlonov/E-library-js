// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">About Us</h2>
        <p className="text-white text-lg leading-relaxed text-center">
          Welcome to E-library, your number one source for all things books. We're dedicated to giving you the very best of literature, with a focus on variety, quality, and accessibility.
        </p>
        <p className="text-white text-lg leading-relaxed text-center mt-4">
          Founded in 2024 by Jaloliddin & Shakhzod.
        </p>
        <p className="text-white text-lg leading-relaxed text-center mt-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-white text-lg leading-relaxed text-center mt-4">
          Sincerely,
          <br />
          Jaloliddin & Shakhzod, Founders
        </p>
      </div>
    </div>
  );
};

export default About;
