import React from 'react';
import { SyncLoader } from 'react-spinners';


const Spinner = ({ size }) => {
  return (
    <div className='sweet-loading'>
        <SyncLoader
          color={'#123abc'} 
        />
      </div>
  );
};



export default Spinner ;
