import React from 'react'
import Typography from '@mui/material/Typography';
import { useStateContext } from '../contexts/ContextProvider';

const Footer = () => {
  const { activeMenu } = useStateContext();
  return (
    <Typography variant="body2" color="text.secondary" align="center" style={{fontSize:'12px'}}>
      {activeMenu ?
      <span>
        ©2022 All rights reserved<br/>
        by Hanamicron
      </span>
      :
      <span>
        ©2022<br/>
        All<br/>
        rights<br/>
        reserved<br/>
        by<br/>
        Hanamicron
      </span>
      }
    </Typography>
  )
};

export default Footer;