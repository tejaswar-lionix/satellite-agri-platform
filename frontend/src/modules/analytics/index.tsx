import React, {useState} from 'react';
export const AnalyticsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ANALYTICS - Analytics - NDVI trend, health, time-ser</h2><p>NDVI trend</p></div>
};
export default AnalyticsView;
