import React, { useState, useEffect} from 'react';
import { node } from 'prop-types';
import fetchApi from '../_services/fetchApi';
import MachineContext from './MachineContext';

function Provider({ children }) {
  const [assets, setAssets] = useState([]);
  const [status, setStatus] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      const result = await fetchApi();

      const counting = await result.reduce((acc, asset) => {
        if (!acc[asset.status] && asset.status) {
          acc[asset.status] = 1;
        } else {
          acc[asset.status] = acc[asset.status] + 1;
        }
        return acc;
      }, {});

      setAssets(result);
      setStatus(Object.keys(counting));
      setCount(Object.values(counting))
    }
    fetchAssets();
  }, []);

  const contextValue = {
    assets,
    status,
    count,
  };

  return (
    <MachineContext.Provider value={ contextValue }>
      {children}
    </MachineContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;
 
export default Provider;
