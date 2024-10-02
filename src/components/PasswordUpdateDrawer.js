import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

const drawerBleeding = -200

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function PasswordUpdateDrawer(props) {
  const { window, openPassword, toggleDrawerPassword ,seconds} = props
 

  return (
    <Root>
      <SwipeableDrawer
        sx={{
          '.MuiPaper-root': {
            height: 'auto',
            overflow: 'hidden',
            borderTopLeftRadius: '16px !important',
            borderTopRightRadius: '16px !important'
          }
        }}
        anchor='bottom'
        open={openPassword}
        onClose={toggleDrawerPassword(false)}
        onOpen={toggleDrawerPassword(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: false
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
            overflow: 'visible'
          }}
        >
          <Box sx={{ padding: '20px 13px ', borderBottom: '1px solid #E9E9E9' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <IconButton onClick={toggleDrawerPassword(false)}>
                <KeyboardArrowLeft sx={{ color: '#667085' }} />
              </IconButton>
              <Typography
                className='inter'
                sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
              >
                Success
              </Typography>
              <Box></Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: '30px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'center'
              }}
            >
              <Box>
                <Typography component={'img'} src='/assets/image/sucessmark.svg' />
              </Box>
              <Typography
                className='inter'
                sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#160647' }}
              >
                Password updated successfully.
              </Typography>
              <Typography
                className='inter'
                sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#6D648A' }}
              >
                You'll be logged out in{' '}
                <Typography
                  component={'span'}
                  sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#7F56D9' }}
                >
                  {seconds}
                </Typography>{' '}
                Second{seconds !== 1 ? 's' : ''}
              </Typography>
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Root>
  )
}
export default PasswordUpdateDrawer
