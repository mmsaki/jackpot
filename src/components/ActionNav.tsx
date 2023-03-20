import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import StoryContainer from './StoryContainer';

const ActionNav = () => {
  return (
    <>
      <Text size='lg' className='header-two'>
        How It Works
      </Text>
      <Box className='action-nav'>
        <Tabs size='lg' variant='line' className='options' align='center'>
          <TabList>
            <Tab color='gray.400'>Open Bets</Tab>
            <Tab className='top-up' color='gray.400'>
              Top Up
            </Tab>
            <Tab className='bet' color='gray.400'>
              Bet Now
            </Tab>
            <Tab color='gray.400' isDisabled>
              Withdraw
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <StoryContainer />
            </TabPanel>
            <TabPanel>
              <p></p>
            </TabPanel>
            <TabPanel>
              <p></p>
            </TabPanel>
            <TabPanel>
              <p></p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default ActionNav;
