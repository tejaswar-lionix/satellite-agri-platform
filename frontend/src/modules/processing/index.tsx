import React, {useState} from 'react';
export const ProcessingView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PROCESSING - Processing - orthomosaic, calibration, s</h2><p>orthomosaic</p></div>
};
export default ProcessingView;
