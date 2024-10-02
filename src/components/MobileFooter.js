import { Box, Typography } from '@mui/material'
import React from 'react'

const MobileFooter = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: '28px',
          bgcolor: '#F7F3FD',
          textAlign: 'center',
          gap: '20px'
        }}
      >
        <Typography className='inter' fontSize={'16px'} fontWeight={400} lineHeight={'24px'} color={'#7F56D9'}>
          License
        </Typography>
        <Typography className='inter' fontSize={'16px'} fontWeight={400} lineHeight={'24px'} color={'#7F56D9'}>
          Documentation
        </Typography>
        <Typography className='inter' fontSize={'16px'} fontWeight={400} lineHeight={'24px'} color={'#7F56D9'}>
          Support
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: '28px',
          bgcolor: '#F7F3FD',
          textAlign: 'center',
          gap: '20px',
          borderTop: '1px solid #EAECF0'
        }}
      >
        <Typography className='inter' fontSize={'14px'} fontWeight={500} lineHeight={'24px'} color={'#656CB799'}>
          © 2023, Calldynamics
        </Typography>
      </Box>
    </>
  )
}

export default MobileFooter
