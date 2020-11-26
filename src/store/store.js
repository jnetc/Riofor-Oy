import React, { useState, useContext } from 'react';

// Параметры состояния по умолчанию
const state = {
  modal: { active: false },
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

  return (
    <Context.Provider
      value={{
        modal,
        modalHandler: obj => setModal(obj),
      }}>
      {children}
    </Context.Provider>
  );
};
