import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography
          className='inter'
          sx={{
            position: 'absolute',
            transform: 'translateY(-50%,-50%)'
          }}
        >
          <Typography component={'img'} src='/assets/image/Calldynamics_Loader_Small.gif'/>
        </Typography>
      </Box>
    </>
  )
}
export default Loader
