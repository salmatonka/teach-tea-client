import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero h-80" style={{ backgroundImage: `url("https://media.glassdoor.com/l/0a/c7/ed/81/office-place.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">WELCOME TO GlassDoor</h1>
      <p className="mb-5">Glassdoor is an American website where current and former employees anonymously review companies. Headquartered in San Francisco, California, it has additional offices in Chicago, Dublin, London, and São Paulo.</p>
      <button className="btn btn-outline text-gray-50">Read More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;