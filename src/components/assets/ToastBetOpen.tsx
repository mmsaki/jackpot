import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import lottery from '../../abi/Lottery.json';

const ToastBetOpen = () => {
  const toast = useToast();
  let { data, isError, isLoading } = useContractRead({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'betsOpen',
  });

  const { config, error } = usePrepareContractWrite({
    address: '0x921fFD1C2471b153fbbF374E6887A662219b2dFC',
    abi: lottery.abi,
    functionName: 'openBets',
  });
  const { write } = useContractWrite(config);

  return (
    <Button
      height='40px'
      width='200px'
      color='green'
      bg='gray.100'
      mt='5'
      borderRadius='lg'
      disabled={!write}
      onClick={() => {
        write?.();
        toast({
          title: `Checking if Bets are open from etherscan. Results : ${data}`,
          status: 'info',
          isClosable: true,
          containerStyle: {
            bg: 'blue',
            borderRadius: '2xl',
          },
        });
      }}
    >
      Check Status
    </Button>
  );
};

export default ToastBetOpen;
