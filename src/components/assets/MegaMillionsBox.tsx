import React from 'react';
import WinningNumbers from './WinningNumbers';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import { Box, Link, Text } from '@chakra-ui/react';

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
        <Text>
          {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
        </Text>
      );
    }
  };

  return (
    <Box className='action-box'>
      <Box className='mega-millions'>
        <Box>
          <Text>MEGA MILLIONS</Text>
          <Text>500 ETH Balance</Text>
        </Box>
        <Box>
          <Text>
            <Countdown
              renderer={renderer}
              date={Date.now() + 5000000}
              precision={3}
            />
          </Text>
          <Text>Time left to buy</Text>
        </Box>
        <Box>
          <Text>4,320</Text>
          <Text>Tokens remaining</Text>
        </Box>
        <Box>
          <Text>WINNING NUMBERS</Text>
          <Text>
            results from block{' '}
            <Link color='#0f5ccf' href='/'>
              865432
            </Link>
          </Text>
        </Box>
        <Box>
          <WinningNumbers />
        </Box>
      </Box>
    </Box>
  );
};

export default MegaMillionsBox;
