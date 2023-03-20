import React from 'react';
import WinningNumbers from './WinningNumbers';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import {
  Badge,
  Box,
  Card,
  Link,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

const blockTarget = '8676474';

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
      >
        <Box spacing='8'>
          <Box>
            <Text fontSize='larger' fontWeight='bold'>
              MEGA MILLIONS
              <Badge ml='1' fontSize='0.8em' color='green'>
                New
              </Badge>
            </Text>

            <Text>~500 ETH Balance</Text>
          </Box>
          <Box>
            <Text fontSize='lg' fontWeight='normal'>
              Time left to buy
            </Text>
            <Text fontSize='larger' fontWeight='bold'>
              <Countdown
                renderer={renderer}
                date={Date.now() + 5000000}
                precision={3}
              />
            </Text>
          </Box>
          <Box>
            <Stat>
              <StatLabel fontSize='lg'>Tokens remaining</StatLabel>
              <StatNumber>4,320</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
              </StatHelpText>
            </Stat>
          </Box>
          <Box>
            <Text fontSize='larger' fontWeight='thin'>
              WINNING NUMBERS
            </Text>
            <Text fontWeight='normal' fontSize='sm'>
              results from block{' '}
              <Link
                color='blue'
                href={`https://goerli.etherscan.io/block/${blockTarget}`}
              >
                {blockTarget}
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
