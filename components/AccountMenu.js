// import Link from 'next/link';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { sessionUser } from '../store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_LINK, API_LOGIN } from '../constants';

export default function AccountMenu(props) {
  const { dataUser } = props;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const sessionUserStorage = JSON.parse(localStorage.getItem('sessionInfo'));

    const { sessionUserAPI } = sessionUser();

    await sessionUserAPI({
      ...sessionUserStorage,
      is_active: false,
    });

    localStorage.setItem('tokens', JSON.stringify(''));
    window.location.href = API_LINK;
  };

  useEffect(() => {
    const tokens = localStorage.getItem('tokens');
    if (tokens) setToken(tokens);
  }, []);

  console.log(!token);

  return (
    <React.Fragment>
      {dataUser && !!token ? (
        <React.Fragment>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {dataUser.username}
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={dataUser ? dataUser.avatar : ''}
                ></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem button component={Link} href="/profile">
              <Avatar src={dataUser ? dataUser.avatar : ''} /> Profile
            </MenuItem>
            {/* <MenuItem>
              <Avatar src={avatar} /> My account
            </MenuItem> */}
            <Divider />
            {/* <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem> */}
            <MenuItem button component={Link} href="/user/me">
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem button component={Link} onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              {dataUser ? 'Logout' : 'Login'}
            </MenuItem>
          </Menu>
        </React.Fragment>
      ) : (
        <Link href="/signin" className="btn btn-primary" underline="none">
          Đăng nhập
        </Link>
      )}
      {/* {!token && (
        <Link href="/signin" className="btn btn-primary" underline="none">
          Đăng nhập
        </Link>
      )} */}
    </React.Fragment>
  );
}
