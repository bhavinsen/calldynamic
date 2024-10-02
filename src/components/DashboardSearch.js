import { Box, Typography } from '@mui/material'
import React from 'react'

const DashboardSearch = ({ selectedCardData}) => {
  return (
    <>
      {/* search */}
      <Box
        sx={{
          ml: selectedCardData ? '315px' : '115px',
          transition: 'all 0.2s',
          padding: '8px 33px',
          alignItems: 'center',
          display: 'flex',
          height: '64px'
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography component={'img'} src='/assets/image/search-lg.svg' />
          <Typography
            className='inter'
            type='search'
            component={'input'}
            placeholder='Search'
            sx={{
              background: '#FFF',
              border: 'none',
              outline: 'none',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '24px',
              color: '#667085'
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default DashboardSearch
