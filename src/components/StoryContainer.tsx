import React from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import MegaMillionsBox from './assets/MegaMillionsBox';

const StoryContainer = () => {
  return (
    <div className='story-container'>
      <BsArrowLeftCircle className='left-arrow' />
      <div className='story-text'>
        <div>
          <p>Choose Your LUCKY Game!</p>
        </div>
        <div>
          <p>
            You can play Powerball, Mega Millions, and More from here! Bets are
            Open at:{' '}
            <span>
              <a href='/'>
                0x25d8270fd2bda0958e9f75c717bc9088786866400b8686ceb25ee90fd6f5effd
              </a>
              {'. '}
            </span>
            Winning numbers, draw dates, and jackpots winners are selected
            randomly for all lottery games. Play and win the all the contract
            balance.
          </p>
        </div>
      </div>
      <MegaMillionsBox />
      <BsArrowRightCircle className='right-arrow' />
    </div>
  );
};

export default StoryContainer;
