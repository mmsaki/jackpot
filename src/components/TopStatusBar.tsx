import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TopStatusBar = () => {
  return (
    <Box bg='black' className='top-status-bar'>
      <Text color='white' className='marquee'>
        We stand with Turkey 🇹🇷. Click here to show your support with a donation
        to the International Rescue Committe
      </Text>
    </Box>
  );
};

export default TopStatusBar;
