import React from 'react';
import PlayButton from './assets/PlayButton';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ConnectKitButton } from 'connectkit';

const TopNav = () => {
  return (
    <Box className='top-nav'>
      <Box>
        <Heading color='#CC1313' size='3xl'>
          Jackpot Gö
        </Heading>
      </Box>
      <Box className='right-nav'>
        <Box className='nav-links'>
          <Text className='nav-link'>Last Winner</Text>
          <Text className='nav-link'>Add Calendar</Text>
          <Text className='nav-link'>About Us</Text>
        </Box>
        <PlayButton />
      </Box>
      <Box className='menu-items'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={
              <RxHamburgerMenu
                style={{ height: '40px', width: '40px', color: '#bbb' }}
              />
            }
            variant='outline'
            style={{
              height: '50px',
              width: '50px',
              border: '0px solid #bbb',
            }}
          />
          <MenuList>
            <MenuItem command='⌘B'>Open Bets</MenuItem>
            <MenuItem command='⌘P'>Top Up Your Account</MenuItem>
            <MenuItem command='⌘T'>Bet With Your Account</MenuItem>
            <MenuItem command='⌘W'>Collect Your Winnings</MenuItem>
            <MenuItem command='⌘W'>Last Winner</MenuItem>
            <MenuItem command='⌘C'>Add To Calendar</MenuItem>
            <MenuItem command='⌘⇧A'>About Us</MenuItem>
            <MenuDivider />
            <ConnectKitButton.Custom>
              {({ isConnected, show }) => {
                return (
                  <MenuItem onClick={show} command='⌘⇧O'>
                    {isConnected ? 'Log Out' : 'Play Now'}
                  </MenuItem>
                );
              }}
            </ConnectKitButton.Custom>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default TopNav;
