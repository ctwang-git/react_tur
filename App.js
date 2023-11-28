import React from 'react';
import QRCode from 'react-qr-code';

import { Card, CardActions, CardContent, Typography} from '@mui/material'
import './useCSS.css'

const App = () => {
 
  const background = require('./chipMosicon.jpg');
  return (
    <Card style={{width: 600, height: 600, marginLeft: 200, marginTop: 100}}>
      <CardContent align="center">
        <img  src={background}  alt="picture"/>
        <Typography variant='h3'color="blue" textGradient={true}> 預約人: S25600</Typography>
        
        <Typography variant='h3' align="center" className='usetext'> 10:00 am - 12: 00 am</Typography>
        <Typography variant='h3'align="center"> U102會議室</Typography>
        
        <QRCode  value="S25600 CTWang"/>
      </CardContent>
      

    </Card>
   
    
  );
}

export default App;
