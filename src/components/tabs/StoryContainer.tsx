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
import MegaMillionsBox from '../assets/MegaMillionsBox';
import { MdCheckCircle } from 'react-icons/md';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import lottery from '../../abi/Lottery.json';
import { useContractRead } from 'wagmi';

const lastTxHash =
  '0xe1709502ad9bcacab16476cbb53e0cd9e54090f169f13fe80714a55cb3d3a500';
const StoryContainer = () => {
  let { data, error } = useContractRead({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'betsOpen',
  });

  return (
    <Box className='story-container'>
      <List spacing={3} className='story-text'>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green' />
          Choose your LUCKY Bet multiplier and Top UP!
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green' />
          <Text>
            You can play Powerball, Mega Millions, and More from here! Bets are
            Open/Closed from:{' '}
            <Link
              isExternal
              color='blue'
              href={`https://sepolia.etherscan.io/tx/${lastTxHash}`}
            >
              {lastTxHash}
              <ExternalLinkIcon mx='2px' />
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
            Göerli / Sepolia.
          </Highlight>
        </ListItem>
      </List>
      <MegaMillionsBox />
    </Box>
  );
};

export default StoryContainer;
