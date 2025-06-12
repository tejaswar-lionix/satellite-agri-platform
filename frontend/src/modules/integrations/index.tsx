import React, {useState} from 'react';
export const IntegrationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INTEGRATIONS - Integrations - weather, soil, drone APIs</h2><p>weather</p></div>
};
export default IntegrationsView;
