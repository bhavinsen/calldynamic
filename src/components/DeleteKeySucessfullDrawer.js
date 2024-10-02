import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function DeleteKeySucessfullDrawer(props) {
  const { window, openDeleteSucess, DeleteSucesstoggleDrawer } = props

  return (
    <>
      <Root>
        <SwipeableDrawer
          sx={{
            '.MuiPaper-root': {
              height: 'auto',
              overflow: 'hidden',
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px'
            }
          }}
          anchor='bottom'
          open={openDeleteSucess}
          onClose={DeleteSucesstoggleDrawer(false)}
          onOpen={DeleteSucesstoggleDrawer(true)}
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
                <IconButton onClick={DeleteSucesstoggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  Delete Key
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
                  textAlign: 'center',
                  mx: '15px'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/deletekey.svg' />
                </Box>
                <Typography
                  className='inter'
                  sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#160647' }}
                >
                  API Key Successfully Deleted
                </Typography>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
    </>
  )
}
export default DeleteKeySucessfullDrawer
