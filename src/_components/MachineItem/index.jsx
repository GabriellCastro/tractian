import React from 'react';
import { Link } from 'react-router-dom';
import { trim } from '../../_utils/utils';

const obj = {};
function MachineItem({ asset = obj }) {
  const url = trim(`/${asset.name}`);
  return (
    <Link to={url}>
      <li class=" flex ml-8 mr-8 mt-2 border bg-gray-900 ml-8 whitespace-nowrap justify-around px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-900">
        <span class="text-green-500 mr-8">{Math.floor(Number(asset.healthscore))}%</span>
        <span class="mr-8">{asset.name}</span>
        <span class="">{asset.sensors}</span>
      </li>
    </Link>
  );
}
 
export default MachineItem;
