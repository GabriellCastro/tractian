import React, { useContext } from 'react';
import MachineContext from '../../_context/MachineContext';

import MachineList from '../MachineList/index.jsx';

const arr = []
function MachineAll() {
  const { status = arr, assets = arr, count = arr } = useContext(MachineContext);
  return(
    <div>
      <h2 class="text-center text-2xl font-semibold text-white mt-8 md:antialiased">Máquinas em monitoramento</h2>
      <ul>
        {
          status.map((item, index) => <MachineList status={item} count={count[index]} assets={assets} />)
        }
      </ul>
    </div>
  );
}

export default MachineAll;
