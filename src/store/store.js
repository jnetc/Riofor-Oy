import React, { useState, useContext } from 'react';

// Параметры состояния по умолчанию
const state = {
  modal: { active: false, data: null },
  menu: { active: false },
};

// CONTEXT
export const Context = React.createContext(state);
// Хук глобального  хранилища
export const useStore = () => {
  return useContext(Context);
};

export const Store = ({ children }) => {
  // Создаем глобальные состояния для Index
  const [modal, setModal] = useState(state.modal);
  const [menu, setMenu] = useState(state.menu);

  return (
    <Context.Provider
      value={{
        modal,
        modalHandler: obj => setModal(obj),
        menu,
        menuHandler: obj => setMenu(obj),
      }}>
      {children}
    </Context.Provider>
  );
};
