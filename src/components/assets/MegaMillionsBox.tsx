import React from 'react';
import WinningNumbers from './WinningNumbers';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import {
  Badge,
  Box,
  Card,
  Link,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import ToastBetOpen from './CheckBets';
import OpenBets from './OpenBets';
import CloseLottery from './CloseLottery';

const blockTarget = '3123691';

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
      <Card
        variant='outline'
        colorScheme='gray'
        bg='whiteAlpha.400'
        className='mega-millions'
        // onClick={addToast}
      >
        <Box>
          <Box mb='8'>
            <Text fontSize='larger' fontWeight='bold'>
              MEGA MILLIONS{' '}
              <Badge ml='1' fontSize='0.7em' color='green'>
                New
              </Badge>
            </Text>
            <Text>~500 ETH Balance</Text>
            <ToastBetOpen />
          </Box>
          <Box mb='8'>
            <Text fontSize='lg' fontWeight='normal'>
              Time left to buy
            </Text>
            <Text fontSize='larger' fontWeight='bold'>
              <Countdown
                renderer={renderer}
                date={Date.now() + 5000000}
                precision={3}
              />
              <OpenBets />
            </Text>
          </Box>
          <Box mb='8'>
            <Stat>
              <StatLabel fontSize='lg'>Tokens remaining</StatLabel>
              <StatNumber>4,320</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
              </StatHelpText>
            </Stat>
            <CloseLottery />
          </Box>
          <Box mb='8'>
            <Text fontSize='larger' fontWeight='thin'>
              WINNING NUMBERS
            </Text>
            <Text fontWeight='normal' fontSize='sm'>
              results from block{' '}
              <Link
                isExternal
                color='blue'
                href={`https://sepolia.etherscan.io/block/${blockTarget}`}
              >
                {blockTarget}
                <ExternalLinkIcon mx='2px' />
              </Link>
            </Text>
          </Box>
          <Box>
            <WinningNumbers />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default MegaMillionsBox;
