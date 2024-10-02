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

function TranscriptionSucessDrawer(props) {
  const { window, openSuccess, SuccesstoggleDrawer } = props

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
        open={openSuccess}
        onClose={SuccesstoggleDrawer(false)}
        onOpen={SuccesstoggleDrawer(true)}
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
              <IconButton onClick={SuccesstoggleDrawer(false)}>
                <KeyboardArrowLeft sx={{ color: '#667085' }} />
              </IconButton>
              <Typography
                className='inter'
                sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
              >
                Success
              </Typography>
              <Box sx={{ color: 'transparent' }}>.........</Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: '30px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'center',
                maxWidth: '250px',
                width: '100%'
              }}
            >
              <Box>
                <Typography component={'img'} src='/assets/image/sucessmark.svg' />
              </Box>
              <Typography
                className='inter'
                sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#160647' }}
              >
                0 Transcription minutes added to your subscription
              </Typography>
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Root>
  )
}
export default TranscriptionSucessDrawer