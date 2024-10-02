import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import PasswordUpdateDrawer from './PasswordUpdateDrawer'

const drawerBleeding = -200

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function ChangePasswordDrawer(props) {
  const { window, open, toggleDrawer } = props
  const [openPassword, setOpenPassword] = useState(false)
  const [seconds, setSeconds] = useState(5)


  const toggleDrawerPassword = newOpen => () => {
    setOpenPassword(newOpen)
  }

  useEffect(() => {
    if (openPassword) {
      const timer = setTimeout(() => {
        setOpenPassword(false)
        setSeconds(5)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [openPassword])


  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds])

  return (
    <>
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
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
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
                <IconButton onClick={toggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  Change Password
                </Typography>
                <Box></Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  maxWidth: '230px',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/message-question-circle.svg' />
                </Box>
                <Typography
                  className='inter'
                  sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#160647' }}
                >
                  Are you sure you want to update your password?
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '10px', p: '20px 10px 20px' }}>
              <Button
                disableRipple
                disableElevation
                variant='contained'
                className='inter'
                sx={{
                  border: '1px solid #D0D5DD',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#344054',
                  background: '#fff',
                  width: '200px',
                  height: '48px',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#fff !important'
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                disableRipple
                disableElevation
                variant='contained'
                className='inter'
                sx={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#fff',
                  background: '#7F56D9',
                  width: '200px',
                  height: '48px',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#7F56D9 !important'
                  }
                }}
                onClick={toggleDrawerPassword(true)}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <PasswordUpdateDrawer openPassword={openPassword} toggleDrawerPassword={toggleDrawerPassword} seconds={seconds}/>
    </>
  )
}
export default ChangePasswordDrawer
