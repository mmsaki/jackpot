import React from 'react';
import WinningNumbers from './WinningNumbers';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';

const MegaMillionsBox = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <div className='action-box'>
      <div className='mega-millions'>
        <div>
          <h3>MEGA MILLIONS</h3>
          <p>500 ETH Balance</p>
        </div>
        <div>
          <h3>
            <Countdown
              renderer={renderer}
              date={Date.now() + 5000000}
              precision={3}
            />
          </h3>
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
