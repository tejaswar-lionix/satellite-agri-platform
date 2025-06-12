import React, {useState} from 'react';
export const MobileView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>MOBILE - Mobile - field offline, capture, sync</h2><p>offline</p></div>
};
export default MobileView;
