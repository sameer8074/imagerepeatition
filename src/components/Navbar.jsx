import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linksLeft = [
    { label: 'more info,', to: 'https://tympanus.net/codrops/?p=92571' },
    { label: 'code,', to: 'https://github.com/codrops/RepeatingImageTransition/' },
    { label: 'all demos', to: 'https://tympanus.net/codrops/demos/' },
  ];

  const linksRight = [
    { label: 'page-transition,', to: 'https://tympanus.net/codrops/demos/?tag=page-transition' },
    { label: 'repetition,', to: 'https://tympanus.net/codrops/demos/?tag=repetition' },
    { label: 'grid', to: 'https://tympanus.net/codrops/demos/?tag=grid' },
  ];

  return (
    <div className="w-full px-6 py-4 text-black text-lg font-bold flex flex-col md:flex-row justify-start md:justify-between items-start md:items-start gap-4">
      
      {/* Left: Title */}
      <div className="group relative cursor-pointer ">
        <Link to="/">repeating image transition</Link>
      </div>

      {/* Center-left: links */}
      <div className="flex flex-wrap gap-1">
        {linksLeft.map(({ label, to }, index) => (
          <Link to={to} key={index} className="relative cursor-pointer hover-underline">
            {label}
          </Link>
        ))}
      </div>

      {/* Center-right: tags */}
      <div className="flex flex-wrap gap-1">
        {linksRight.map(({ label, to }, index) => (
          <Link to={to} key={index} className="relative cursor-pointer hover-underline">
            {label}
          </Link>
        ))}
      </div>

      {/* Right: Stacked description */}
       <div className="order-last md:order-none text-left leading-snug">
  <p>divi ai: on demand</p>
  <p>content creation, code</p>
  <p>writing & image</p>
  <p>generation.</p>
</div>
    </div>
  );
};

export default Navbar;
