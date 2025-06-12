import React, {useState} from 'react';
export const FieldsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FIELDS - Fields - field management, zones, prescr</h2><p>field management</p></div>
};
export default FieldsView;
