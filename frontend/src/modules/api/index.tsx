import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for imagery, detection, field</h2><p>POST imagery</p></div>
};
export default ApiView;
