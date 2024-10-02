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

function RoleDrawer(props) {
  const { window, openRole, RoletoggleDrawer, setValue, setData } = props

  return (
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
        open={openRole}
        onClose={RoletoggleDrawer(false)}
        onOpen={RoletoggleDrawer(true)}
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
              <IconButton onClick={RoletoggleDrawer(false)}>
                <KeyboardArrowLeft sx={{ color: '#667085' }} />
              </IconButton>
              <Typography
                className='inter'
                sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
              >
                Role
              </Typography>
              <Box></Box>
            </Box>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(1)
              setData('Admin')
              RoletoggleDrawer()
            }}
          >
            <Typography
              onClick={RoletoggleDrawer(false)}
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
            >
              Admin
            </Typography>
          </Box>
          <Box
            sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}
            onClick={() => {
              setValue(2)
              setData('User')
            }}
          >
            <Typography
              onClick={RoletoggleDrawer(false)}
              value='2'
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
            >
              User
            </Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Root>
  )
}
export default RoleDrawer
