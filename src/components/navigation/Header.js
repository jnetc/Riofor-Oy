import React from 'react';
// Styles
import '../../sass/components/header.scss';
import '../../sass/components/modals.scss';
// Components
import Logo from './Logo';
import NavLink from './NavLink';
// Context
import { useStore } from '../../store/store';

const defaultNavNames = [
  // { link: 'Etusivu' },
  { link: 'Palvelut' },
  { link: 'Projektit' },
  { link: 'Rioforista' },
  { link: `Yhteystiedot` },
];

// Header Component
const Header = () => {
  // Получаем глобальные переменные
  const { menu, menuHandler } = useStore();

  const links = defaultNavNames.map(({ link }) => {
    return (
      <li key={link}>
        <NavLink link={link}>{link}</NavLink>
      </li>
    );
  });

  return (
    <>
      <header>
        <nav className="navigation">
          <Logo />
          <button
            type="button"
            id="nav-mob"
            aria-label="button"
            onClick={() => menuHandler({ active: true })}>
            <span />
          </button>
          <ul>{links}</ul>
        </nav>
      </header>
      <template id="nav-mob-menu" className={menu.active ? 'show' : ''}>
        <span
          id="close"
          role="button"
          aria-label="close"
          tabIndex={0}
          onKeyDown={() => menuHandler({ active: false })}
          onClick={() => menuHandler({ active: false })}
        />
        <ul>{links}</ul>
      </template>
    </>
  );
};

export default Header;
