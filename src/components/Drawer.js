import React from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function Drawer(props) {
  const { window, open, toggleDrawer, setValue, setData } = props

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
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
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
                Settings
              </Typography>
              <Box></Box>
            </Box>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(1)
              setData('My Details')
              toggleDrawer()
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
            >
              My Details
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(2)
              setData('Password')
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              value='2'
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
            >
              Password
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(3)
              setData('My Team')
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              className='inter'
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '20px',
                color: '#344054',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              My Team{' '}
              <Box
                sx={{
                  bgcolor: '#F2F4F7',
                  p: '5px 10px',
                  borderRadius: '100%',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '21px',
                  color: '#344054'
                }}
              >
                4
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(4)
              setData('Billing & Plan')
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              className='inter'
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '20px',
                color: '#344054',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Billing & Plan{' '}
              <Box
                sx={{
                  bgcolor: '#F2F4F7',
                  p: '5px 10px',
                  borderRadius: '100%',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '21px',
                  color: '#344054'
                }}
              >
                2
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(5)
              setData('Notifications')
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              className='inter'
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '20px',
                color: '#344054',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Notifications{' '}
              <Box
                sx={{
                  bgcolor: '#F2F4F7',
                  p: '5px 10px',
                  borderRadius: '100%',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '21px',
                  color: '#344054'
                }}
              >
                2
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(6)
              setData('Integrations')
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
            >
              Integrations
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(7)
              setData('API')
            }}
          >
            <Typography
              onClick={toggleDrawer(false)}
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
            >
              API
            </Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Root>
  )
}
export default Drawer
