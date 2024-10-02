import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const DashMobileSidebar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <>
      <Box
        component='div'
        sx={{
          left: `${isCollapsed ? '0px' : '-100%'} `,
          maxWidth: '300px',
          width: '100%',
          height: '100vh',
          top: '0',
          bottom: '0',
          position: 'fixed',
          background: '#FFF',
          zIndex: '4000',
          boxShadow:
            '0px 3.721px 5.582px -1.861px rgba(16, 24, 40, 0.03), 0px 11.164px 14.885px -3.721px rgba(16, 24, 40, 0.08)',
          transition: 'all 0.5s'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', px: '10px', pt: '20px' }}>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/dashboard'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/deshhome1.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  Dashboard
                </Button>
              </Box>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/leads'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/deshlead.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  Leads
                </Button>
              </Box>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/pendingaudits'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/deshpending.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  Pending Audits
                </Button>
              </Box>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/filemanagement'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/deshDriveFile.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  File Management
                </Button>
              </Box>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/Streams'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/desharrow.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  Streams
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', px: '10px', pt: '100px' }}>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/settings'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/Settings.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  Settings
                </Button>
              </Box>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Button
                  disableElevation
                  href='/helpandsupport'
                  variant='contained'
                  className='inter'
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    background: '#FFF',
                    color: '#494C6C',
                    padding: '8px 12px 8px 27px',
                    justifyContent: 'start',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    borderRadius: '8px',
                    '&.MuiButtonBase-root:hover': {
                      backgroundColor: '#7F56D9',
                      color: 'white'
                    },
                    '&.MuiButtonBase-root:focus': {
                      background: '#7F56D9',
                      color: 'white'
                    }
                  }}
                >
                  <Typography
                    component={'img'}
                    src='/assets/image/ddeshhelp.svg'
                    sx={{
                      maxWidth: '100%',
                      pr: '11px'
                    }}
                  />{' '}
                  Help & Support
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ m: '20px 10px' }}>
            <IconButton>
              <CloseIcon
                onClick={() => {
                  setIsCollapsed(false)
                }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '20px', pt: '30px' }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box>
              <Typography component={'img'} src='/assets/image/userphoto.png' sx={{}} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Olivia Rhye
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467'
                }}
              >
                oliviarhye@ema...
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton href='/login'>
              <Typography component={'img'} src='/assets/image/log-out.svg' />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: isCollapsed ? 'block' : 'none',
          position: 'fixed',
          inset: '0px',
          transition: 'all 0.2s',
          zIndex: '100'
        }}
        onClick={() => {
          setIsCollapsed(false)
        }}
      ></Box>
    </>
  )
}

export default DashMobileSidebar
