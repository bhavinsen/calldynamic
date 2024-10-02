import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Add, KeyboardArrowLeft, Send } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import Close from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import RoleDrawer from './RoleDrawer'
import InviteSucessDrawer from './InviteSucessDrawer'

const drawerBleeding = -200

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function AddTeamDrawer(props) {
  const { window, open, toggleDrawer } = props
  const [openInvite, setOpenInvite] = useState(false)
  const [openRole, setOpenRole] = useState(false)
  const [value, setValue] = useState('1')
  const [data, setData] = useState('User')

  const RoletoggleDrawer = newOpen => () => {
    setOpenRole(newOpen)
  }

  const InvitetoggleDrawer = newOpen => () => {
    setOpenInvite(newOpen)
  }

  useEffect(() => {
    if (openInvite) {
      const timer = setTimeout(() => {
        setOpenInvite(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [openInvite])

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
                  Add Team Member
                </Typography>
                <IconButton onClick={toggleDrawer(false)}>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ p: '20px' }}>
              <Box sx={{ display: 'flex', gap: '10px', width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '50%' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                  >
                    First Name
                  </Typography>
                  <Box
                    sx={{
                      padding: '10px 14px',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      pr: '5px',
                      background: '#fff'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'input'}
                      sx={{
                        width: '100%',
                        padding: '',
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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '50%' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                  >
                    Last Name
                  </Typography>
                  <Box
                    sx={{
                      padding: '10px 14px',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      pr: '5px',
                      background: '#fff'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'input'}
                      sx={{
                        width: '100%',
                        padding: '',
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
              </Box>
              <Box
                sx={{
                  py: '20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: '10px', sm: '0px' }
                }}
              >
                <Box sx={{ maxWidth: '315px', width: '100%' }}>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      color: '#344054'
                    }}
                  >
                    Email address
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    maxWidth: '640px',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '8px',
                      padding: '10px 14px',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      pr: '5px',
                      background: '#fff',
                      width: '100%',
                      maxWidth: '620px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/mail-01.svg' />
                    <Typography
                      className='inter'
                      component={'input'}
                      placeholder='E-mail'
                      sx={{
                        padding: '',
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
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '50%' }}>
                <Typography
                  className='inter'
                  sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                >
                  Role
                </Typography>
                <Box
                  sx={{
                    padding: '10px 14px',
                    border: '1px solid #D0D5DD',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    background: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      width: '100%',
                      padding: '',
                      background: '#FFF',
                      border: 'none',
                      outline: 'none',
                      fontSize: '18px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#667085'
                    }}
                    onClick={RoletoggleDrawer(true)}
                  >
                    {data}
                  </Typography>
                  <Box>
                    <KeyboardArrowDownIcon sx={{ color: '#667085' }} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    color: '#6941C6',
                    display: 'flex',
                    pt: '20px'
                  }}
                >
                  <Add /> Add another
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '10px', p: '20px 10px 20px', borderTop: '1px solid #EAECF0' }}>
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
                onClick={InvitetoggleDrawer(true)}
              >
                <Typography component={'img'} src='/assets/image/sendicon.svg' sx={{ mr: '4px' }} />
                Send Invite
              </Button>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <RoleDrawer openRole={openRole} RoletoggleDrawer={RoletoggleDrawer} setValue={setValue} setData={setData} />
      <InviteSucessDrawer openInvite={openInvite} InvitetoggleDrawer={InvitetoggleDrawer} />
    </>
  )
}
export default AddTeamDrawer
