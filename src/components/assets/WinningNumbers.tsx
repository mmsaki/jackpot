import { Box } from '@chakra-ui/react';
import React from 'react';

const WinningNumbers = () => {
  return (
    <Box className='numbers-container'>
      <Box className='winning-number'>8</Box>
      <Box className='winning-number'>16</Box>
      <Box className='winning-number'>67</Box>
      <Box className='winning-number'>39</Box>
      <Box className='winning-number'>
        <Box className='red'></Box>
        <Box className='lucky-number'>13</Box>
      </Box>
    </Box>
  );
};

export default WinningNumbers;
