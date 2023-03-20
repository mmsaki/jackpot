import { Box, Highlight, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import MegaMillionsBox from './assets/MegaMillionsBox';

const lastTxHash =
  '0x5171197591451305c64f4af131835df8edb22768babaeaf885cfac632409a371';
const StoryContainer = () => {
  return (
    <Box className='story-container'>
      <BsArrowLeftCircle className='left-arrow' />
      <Box className='story-text'>
        <Box>
          <Text>Choose Your LUCKY Bet!</Text>
        </Box>
        <Box>
          <Text>
            You can play Powerball, Mega Millions, and More from here! Bets are
            Open at:{' '}
            <Text>
              <Link
                color='blue'
                href={`https://goerli.etherscan.io/tx/${lastTxHash}`}
              >
                {lastTxHash}
              </Link>
              {'. '}
            </Text>
            <Highlight
              query='Play and Win the contract balance on Göerli'
              styles={{ px: '1', py: '1', bg: 'red.100' }}
            >
              Winning numbers, draw dates, and jackpots winners are selected
              randomly for all lottery games. Play and win the contract balance
              on Göerli.
            </Highlight>
          </Text>
        </Box>
      </Box>
      <MegaMillionsBox />
      <BsArrowRightCircle className='right-arrow' />
    </Box>
  );
};

export default StoryContainer;
