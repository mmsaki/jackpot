import {
  Box,
  Button,
  HStack,
  Input,
  useNumberInput,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import { ConnectKitButton } from 'connectkit';

const TopUpBalance = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.00001,
      defaultValue: 1.53,
      min: 0.1,
      max: 6,
      precision: 5,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

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
    <Box className='topup-box'>
      <VStack mb='8'>
        <Text fontSize='larger' fontWeight='bold'>
          Account Address
        </Text>
        <Text>{'0xf39F...f266'}</Text>
      </VStack>
      <VStack mb='8'>
        <Text fontSize='lg' fontWeight='normal'>
          Your Balance
        </Text>
        <Text fontSize='larger' fontWeight='bold'>
          1.23999304 ETH
        </Text>
      </VStack>
      <VStack mb='8'>
        <Text fontSize='lg' fontWeight='normal'>
          Time Remaining
        </Text>
        <Text fontSize='larger' fontWeight='bold'>
          <Countdown
            renderer={renderer}
            date={Date.now() + 5000000}
            precision={3}
          />
        </Text>
      </VStack>
      <HStack maxW='300px' mb='5'>
        <Button {...inc}>+</Button>
        <Input {...input} height='40px' size='md' width='200px' border='2px' />
        <Button {...dec}>-</Button>
      </HStack>
      <VStack>
        <Button
          size='md'
          height='48px'
          width='200px'
          bg='green'
          color='white'
          borderRadius='lg'
          fontSize='2xl'
        >
          Top Up
        </Button>
      </VStack>
    </Box>
  );
};
export default TopUpBalance;
