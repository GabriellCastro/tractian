import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import MachineContext from '../../_context/MachineContext';
import { trim } from '../../_utils/utils';

const arr = [];

function Machine() {
  const { assets = arr} = useContext(MachineContext);
  const { machine } = useParams();

  const asset = assets.find((item) => {
    return trim(item.name) === machine;
  });

  return ( 
    <div className="flex-1 ml-8 items-center">
      { asset && (
        <>
          <div className="flex my-8 mb-8 justify-center">
            <p className="text-xl font-semibold text-white">Nome: {asset.name}</p>
            <p className="text-xl ml-8 mr-8 font-semibold text-white">Sensor: {asset.sensors}</p>
            <span class="text-xl font-semibold mr-8 text-green-500">Saude: {Math.floor(Number(asset.healthscore))}%</span>
            <span className="text-xl font-semibold text-red-500">Status: {asset.status}</span>
          </div>    
          <img src={asset.image} alt="Profile face" class="w-5/12 h-300 mx-auto rounded" />
        </>
        )
      }
    </div>
  );
}
 
export default Machine;