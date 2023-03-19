import React from 'react';
import WinningNumbers from './WinningNumbers';

const MegaMillionsBox = () => {
  return (
    <div className='action-box'>
      <div className='mega-millions'>
        <div>
          <h3>MEGA MILLIONS</h3>
          <p>500 ETH Balance</p>
        </div>
        <div>
          <h3>14 : 37 : 00</h3>
          <p>Time left to buy</p>
        </div>
        <div>
          <h3>4,320</h3>
          <p>Tokens remaining</p>
        </div>
        <div>
          <h4>WINNING NUMBERS</h4>
          <h6>
            results from block <a href='/'>865432</a>
          </h6>
        </div>
        <div>
          <WinningNumbers />
        </div>
      </div>
    </div>
  );
};

export default MegaMillionsBox;
