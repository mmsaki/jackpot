import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TopStatusBar = () => {
  return (
    <Box className='top-status-bar'>
      <Text className='marquee'>
        We stand with Turkey 🇹🇷. Click here to show your support with a donation
        to the International Rescue Committe
      </Text>
    </Box>
  );
};

export default TopStatusBar;
