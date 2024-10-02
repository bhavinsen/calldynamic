import { Box, Typography } from '@mui/material'
import React from 'react'

const Dashfooter = ({selectedCardData}) => {
  return (
    <>
      {/* footer */}
      <Box
        sx={{ 
          background: '#FFF',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px 30px',
          transition: 'all 0.2s',
          ml: selectedCardData ?'315px' :'115px'
        }}
      >
        <Box>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: ' rgba(101, 108, 183, 0.60)'
            }}
          >
            © 2023, Calldynamics
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#7F56D9'
            }}
          >
            License
          </Typography>
          <Typography
            className='inter'
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#7F56D9'
            }}
          >
            Documentation
          </Typography>
          <Typography
            className='inter'
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#7F56D9'
            }}
          >
            Support
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Dashfooter
