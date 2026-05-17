import { Link, NavLink } from 'react-router-dom';
import { GITHUB_PROFILE_URL } from '../configs';
import logo from '../assets/logo-D9NHcesw 1.png';
import git from '../assets/fi_2111432.png';

const navClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive
      ? 'underline text-purple-600'
      : 'hover:bg-base-300 text-base-content/80'
  }`;

export default function Header() {
  return (
    <header className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/95 px-4 backdrop-blur md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
         
            <img src={logo} alt="" />
          <span className="hidden sm:inline text-purple-600">Hero IO</span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/apps" className={navClass}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={navClass}>
            Installation
          </NavLink>
        </nav>

        <div>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm md:btn-md"
          >
            <img src={git} alt="" />
            Contribution
          </a>
        </div>
      </div>
    </header>
  );
}
