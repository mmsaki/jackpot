import React from 'react';
import PlayButton from './assets/PlayButton';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ConnectKitButton } from 'connectkit';

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div>
        <h1 className='jackpot-header'>Jackpot</h1>
      </div>
      <div className='right-nav'>
        <div className='nav-links'>
          <p>Last Winner</p>
          <p>Add Calendar</p>
          <p>About Us</p>
        </div>
        <PlayButton />
      </div>
      <div className='menu-items'>
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
      </div>
    </div>
  );
};

export default TopNav;
