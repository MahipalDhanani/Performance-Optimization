import React from 'react';

const About = () => {
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div>
      <h1>About component</h1>
      <ul className='flex flex-wrap gap-3 '>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
