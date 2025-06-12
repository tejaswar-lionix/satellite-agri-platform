import React, {useState} from 'react';
export const FrontendView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FRONTEND - Frontend - map, field view, NDVI overlay</h2><p>map</p></div>
};
export default FrontendView;
