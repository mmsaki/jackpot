import { Box, Highlight, List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import TopUpBalance from '../assets/TopUpBalance';

const TopUp = () => {
  return (
    <Box className='story-container'>
      <List spacing={3} className='story-text'>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='gray' />
          Top Up with your Lucky Tokens!
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='gray' />
          The ratio for Powerball is 0.01, and Mega Millions is 0.1.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='gray' />
          <Highlight
            query='you can bet many times'
            styles={{ px: '1', py: '1', bg: 'red.100' }}
          >
            The more tokens you buy doesn’t guarantee winning, however you can
            bet many times in a row as you please.
          </Highlight>
        </ListItem>
      </List>
      <TopUpBalance />
    </Box>
  );
};

export default TopUp;
