import React from 'react';

const WinningNumbers = () => {
  return (
    <div className='numbers-container'>
      <div className='winning-number'>8</div>
      <div className='winning-number'>16</div>
      <div className='winning-number'>67</div>
      <div className='winning-number'>39</div>
      <div className='winning-number'>
        <div className='red'></div>
        <div className='lucky-number'>13</div>
      </div>
    </div>
  );
};

export default WinningNumbers;
