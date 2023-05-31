import * as React from 'react';
import { useEffect, useState } from 'react';

import { List } from '@mui/material';
import { Divider } from '@mui/material';

import { mainListItems, secondaryListItems, thirdListItems } from './AdminListMenu';

import { getAdmin } from '../../store';

function AdminNavBar() {
  const [role, setRole] = useState('');

  const { getAdminAPI } = getAdmin();

  const getDataAdmin = async () => {
    const data = await getAdminAPI();
    if (data) setRole(data.role);
  };

  useEffect(() => {
    const tokensAdmin = localStorage.getItem('tokensAdmin');
    if (tokensAdmin) getDataAdmin();
  }, []);

  return (
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {role === 'admin' && secondaryListItems}
      {role === 'teacher' && thirdListItems}
    </List>
  );
}

export default AdminNavBar;
