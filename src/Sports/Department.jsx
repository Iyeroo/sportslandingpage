import React from 'react';
import aimlsa from "../assets/aimlsa.png";
import csa from "../assets/csa.png";
import dsa from "../assets/dsa.png";
import itsa from "../assets/itsa.png";
import MECH from "../assets/MECH.png";
const LogoFlexbox = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around',
      width:"1200px",
      height:"300px",
      flexWrap:"wrap",
      alignItems: 'center', 
      backgroundColor: '#3B3C36', 
      borderRadius:"45px",
       
      margin:"auto",
    }}>
      <img src={aimlsa} alt="Logo 1" style={{ width: '100px', height: 'auto' }} />
      <img src={csa} alt="Logo 2" style={{ width: '100px', height: 'auto' }} />
      <img src={dsa} alt="Logo 3" style={{ width: '100px', height: 'auto' }} />
      <img src={itsa} alt="Logo 4" style={{ width: '100px', height: 'auto' }} />
      <img src={MECH} alt="Logo 5" style={{ width: '100px', height: 'auto' }} />
    </div>
  );
};

export default LogoFlexbox;
