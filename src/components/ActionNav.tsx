import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ActionNav = () => {
  return (
    <>
      <Text size='lg' className='header-two'>
        How It Works
      </Text>
      <Box className='action-nav'>
        <Box className='options'>
          <Box className='select-options'>Open Bets</Box>
          <Box className='option-line'></Box>
          <Box className='select-options'>Top Up Your Account</Box>
          <Box className='option-line'></Box>
          <Box className='select-options'>Bet With Your Account</Box>
          <Box className='option-line'></Box>
          <Box className='select-options'>Collect Your Winnings</Box>
        </Box>
      </Box>
    </>
  );
};

export default ActionNav;
