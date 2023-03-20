import { Box, Highlight, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import MegaMillionsBox from './assets/MegaMillionsBox';

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
              <Link color='blue' href='/'>
                0x25d8270fd2bda0958e9f75c717bc9088786866400b8686ceb25ee90fd6f5effd
              </Link>
              {'. '}
            </Text>
            <Highlight
              query='Play and Win all the contract balance on Göerli'
              styles={{ px: '1', py: '1', bg: 'red.100' }}
            >
              Winning numbers, draw dates, and jackpots winners are selected
              randomly for all lottery games. Play and win all the contract
              balance on Göerli.
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
