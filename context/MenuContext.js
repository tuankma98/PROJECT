import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuContextWrapper({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
