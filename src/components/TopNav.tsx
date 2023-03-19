import React from 'react';
import PlayButton from './assets/PlayButton';

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div>
        <h1 className='jackpot-header'>Jackpot</h1>
      </div>
      <div className='right-nav'>
        <div className='nav-links'>
          <p>Last Winner</p>
          <p>Add Calender</p>
          <p>About Us</p>
        </div>
        <PlayButton />
      </div>
    </div>
  );
};

export default TopNav;
