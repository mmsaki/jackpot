import { Box, Highlight, List, ListIcon, ListItem } from '@chakra-ui/react';
import { ethers } from 'ethers';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import TopUpBalance from '../assets/TopUpBalance';
import { useContractRead } from 'wagmi';
import lottery from '../../abi/Lottery.json';

const TopUp = () => {
  const { data, isError, isLoading } = useContractRead({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'betFee',
  });
  const betFeeBN: any = data;
  const betFeeStr = ethers.utils.formatEther(betFeeBN);
  return (
    <Box className='story-container'>
      <List spacing={3} className='story-text'>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='gray' />
          Top Up with your Lucky Tokens!
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='gray' />
          The bet fee ratio {betFeeStr}
          {' ETH'}
          <span>and the bet price ratio is </span>
          {ethers.utils.formatEther('1000000000000000000')}
          {' ETH '}
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
