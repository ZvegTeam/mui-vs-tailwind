import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <>
      <header className="main-header">
        <h3>Tailwind CSS vs Material UI</h3>
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-list-item'>
              <Link className="nav-list-item-link" to="/material-ui">
                Material UI
              </Link>
            </li>
            <li className='nav-list-item'>
              <Link className="nav-list-item-link" to="/tailwind-css">
                Tailwind CSS
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
