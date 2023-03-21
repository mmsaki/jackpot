import {
  Box,
  Button,
  HStack,
  Input,
  useNumberInput,
  VStack,
  Text,
  useToast,
  createStandaloneToast,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import React from 'react';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import {
  useAccount,
  useBalance,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import lottery from '../../abi/Lottery.json';

const { ToastContainer, toast } = createStandaloneToast();

const TopUpBalance = () => {
  const toast = useToast();
  const [value, setValue] = React.useState('');
  function handleChange() {
    setValue(value);
  }
  const { address, isDisconnected } = useAccount();
  const { data } = useBalance({
    address: address,
    watch: true,
    onSuccess(data) {
      console.log('😀 Connected', data);
    },
    onError(error) {
      console.log('😐 Error, something went wrong', error);
    },
  });

  const { config } = usePrepareContractWrite({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'purchaseTokens',
    overrides: {
      from: `0x${address?.split('0x')[1]}`,
      value: ethers.utils.parseEther('0.2'),
    },
  });

  const { write, error, isSuccess } = useContractWrite(config);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.00001,
      defaultValue: 0.0123,
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
    <>
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
          <Input
            value={value}
            onChange={handleChange}
            {...input}
            height='40px'
            size='md'
            width='250px'
            border='2px'
          />
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
            disabled={!write}
            onClick={() => write?.()}
          >
            Top Up
          </Button>
        </VStack>
      </Box>
      {error &&
        (() =>
          toast({
            title: `An error occured preparing the transaction: ${error?.message}`,
            status: 'info',
            isClosable: true,
            containerStyle: {
              bg: 'red',
              borderRadius: '2xl',
            },
          }))}
    </>
  );
};
export default TopUpBalance;

toast({
  title: 'An error occurred.',
  description: 'ERC20 Token Approval is not set for the Lottery contract.',
  status: 'error',
  duration: 9000,
  isClosable: true,
});
