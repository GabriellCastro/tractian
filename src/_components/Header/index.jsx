import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
function Header() {
  return (
    <div>
      <nav class="bg-gray-900 flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <Link to="/">
            <img src={logo} alt="Tractian logo" />
            <span class="font-semibold text-x tracking-tight">Monitoramento de máquinas</span>
          </Link>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="https://github.com/GabriellCastro" target="_blank" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" rel="noreferrer">
            Github
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
