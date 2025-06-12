import React, {useState} from 'react';
export const AlertsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ALERTS - Alerts - irrigation, pest, nutrient, per</h2><p>irrigation</p></div>
};
export default AlertsView;
