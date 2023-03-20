import {
  Box,
  Highlight,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import MegaMillionsBox from './assets/MegaMillionsBox';
import { MdCheckCircle, MdSettings } from 'react-icons/md';

const lastTxHash =
  '0x5171197591451305c64f4af131835df8edb22768babaeaf885cfac632409a371';
const StoryContainer = () => {
  return (
    <Box className='story-container'>
      <List spacing={3} className='story-text'>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green' />
          Choose your LUCKY Bet multiplier and Top UP!
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green' />
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
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green' />
          <Highlight
            query='Play and Win the contract balance on Göerli'
            styles={{ px: '1', py: '1', bg: 'red.100' }}
          >
            Winning numbers, draw dates, and jackpots winners are selected
            randomly for all lottery games. Play and win the contract balance on
            Göerli.
          </Highlight>
        </ListItem>
      </List>
      <MegaMillionsBox />
    </Box>
  );
};

export default StoryContainer;
