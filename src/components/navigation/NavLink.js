import { Link } from 'gatsby';
import React from 'react';

// Context
import { useStore } from '../../store/store';

const NavLink = ({ link, children }) => {
  // Получаем глобальные переменные
  const { menuHandler } = useStore();

  return (
    <Link
      className="nav-link"
      to={`/#${link.toLowerCase()}`}
      replace
      onClick={() => menuHandler({ active: false })}
      onKeyDown={() => menuHandler({ active: false })}>
      {children}
    </Link>
  );
};

export default NavLink;
