import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: FC = () => {
  const router = useLocation();

  const path = router.pathname;

  return (
    <>
      <header className="main-header">
        <h3 className="header-title">Tailwind CSS vs Material UI</h3>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="nav-list-item-link" to="/material-ui">
                <div
                  className={'nav-list-item'.concat(
                    path === '/material-ui' ? ' active-link' : ''
                  )}
                >
                  Material UI
                </div>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link className="nav-list-item-link" to="/tailwind-css">
                <div
                  className={'nav-list-item'.concat(
                    path === '/tailwind-css' ? ' active-link' : ''
                  )}
                >
                  Tailwind CSS
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
