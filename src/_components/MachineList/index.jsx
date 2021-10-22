import React from 'react';
import MachineItem from '../MachineItem/index.jsx';

const arr = [];
function MachineList({ status = arr, count = arr, assets = arr }){
  return (
    <li>
      <div class="flex transition delay-700 duration-300 ease-in-out">
        <h3 class="flex-1 flex-row ml-8 mt-8 mr-8 items-stretch whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900"> 
          {status}
          <span class="h-4 ml-3 text-green-500 font-semibold">{count}</span>
        </h3>
      </div>
      <ul>
        {
            assets.map((item) => item.status === status ? <MachineItem asset={item}/> : '')
        }
      </ul>
    </li>
  );
}
 
export default MachineList;
