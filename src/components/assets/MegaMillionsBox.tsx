import React from 'react';
import WinningNumbers from './WinningNumbers';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import {
  Badge,
  Box,
  Card,
  Link,
  Stack,
  StackDivider,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

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
        <Stack spacing='8'>
          <Box>
            <Text fontSize='larger' fontWeight='bold'>
              MEGA MILLIONS
              <Badge ml='1' fontSize='0.8em' color='green'>
                New
              </Badge>
            </Text>

            <Text>500 ETH Balance</Text>
          </Box>
          <Box>
            <Text fontSize='larger' fontWeight='bold'>
              <Countdown
                renderer={renderer}
                date={Date.now() + 5000000}
                precision={3}
              />
            </Text>
            <Text fontSize='lg' fontWeight='normal'>
              Time left to buy
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
              <Link color='blue' href='/'>
                865432
              </Link>
            </Text>
          </Box>
          <Box>
            <WinningNumbers />
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default MegaMillionsBox;
