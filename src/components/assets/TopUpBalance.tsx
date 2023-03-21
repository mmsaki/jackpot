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
import { useAccount, useBalance } from 'wagmi';
import {
  useContract,
  useContractRead,
  useContractWrite,
  useProvider,
} from 'wagmi';
import lottery from '../../abi/Lottery.json';

const TopUpBalance = () => {
  const provider = useProvider();
  const contract = useContract({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    signerOrProvider: provider,
  });

  const { address, isDisconnected } = useAccount();
  const { data, isError } = useBalance({
    address: address,
    watch: true,
    onSuccess(data) {
      console.log('😀 Connected', data);
    },
    onError(error) {
      console.log('😐 Error, something went wrong', error);
    },
  });

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.00001,
      defaultValue: 0.123,
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
        <Text>
          {address}
          {isDisconnected && 'Login'}
        </Text>
      </VStack>
      <VStack mb='8'>
        <Text fontSize='larger' fontWeight='bold'>
          Your Balance
        </Text>
        <Text fontSize='lg' fontWeight='normal'>
          {data?.formatted} {data?.symbol}
          {isDisconnected && 'Login'}
        </Text>
      </VStack>
      <VStack mb='8'>
        <Text fontSize='larger' fontWeight='bold'>
          Time Remaining
        </Text>
        <Text fontSize='larger' fontWeight='normal'>
          <Countdown
            renderer={renderer}
            date={Date.now() + 5000000}
            precision={3}
          />
        </Text>
      </VStack>
      <HStack maxW='300px' mb='5'>
        <Button {...inc}>+</Button>
        <Input {...input} height='40px' size='md' width='250px' border='2px' />
        <Button {...dec}>-</Button>
      </HStack>
      <VStack>
        <Button
          size='md'
          height='48px'
          width='240px'
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
