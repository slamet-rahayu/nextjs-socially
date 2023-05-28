/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement, useState } from 'react';
import { MoreVert, Settings, Logout, DarkMode } from '@mui/icons-material';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import cx from 'classnames';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useProfile } from 'modules/profile/hooks';

export default function MenuProfile(): ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { logout } = useProfile();

  const menu = [
    {
      title: 'Dark Mode',
      icon: <DarkMode />,
      onClick: () => {}
    },
    {
      title: 'Settings',
      icon: <Settings />,
      onClick: () => {}
    },
    {
      title: 'Log out',
      icon: <Logout />,
      onClick: () => {
        logout();
      }
    }
  ];

  const toggleShowMenu = () => setShowMenu((prev) => !prev);

  const closeMenu = () => setShowMenu(false);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className="relative">
        <IconButton onClick={toggleShowMenu}>
          <MoreVert />
        </IconButton>
        {showMenu && (
          <div
            className={cx(
              'absolute',
              'right-[15px]',
              'bg-white',
              'rounded-lg',
              'border',
              'w-[180px]'
            )}
          >
            <nav aria-label="setting menu">
              <List>
                {menu.map((v) => (
                  <ListItem className="px-3" disablePadding disableGutters key={v.title}>
                    <ListItemButton disableGutters onClick={v.onClick}>
                      <ListItemIcon>{v.icon}</ListItemIcon>
                      <ListItemText primary={v.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
