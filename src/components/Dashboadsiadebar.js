import { Box, Button, IconButton, Tooltip, Typography, tooltipClasses } from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import CloseIcon from '@mui/icons-material/Close'
import LogoutIcon from '@mui/icons-material/Logout'
import React, { useState } from 'react'
import { KeyboardDoubleArrowRight } from '@mui/icons-material'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import ArticleIcon from '@mui/icons-material/Article'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const DashboadSiadebar = ({ selectedCardData, setSelectedCardData, toggleWidth }) => {
  const Logouttooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#101828'
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#101828',
      boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      width: 'auto',
      fontSize: '12px',
      padding: '10px 12px',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: '15px'
    }
  }))

  const router = useRouter()
  const path = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Leads', href: '/leads', icon: GroupIcon },
    { name: 'Pending Audits', href: '/pendingaudits', icon: ManageSearchIcon },
    { name: 'File Management', href: '/filemanagement', icon: InsertDriveFileIcon },
    { name: 'Streams', href: '/Streams', icon: SyncAltIcon },
    { name: 'Reports', href: '#', icon: ArticleIcon },
    { name: 'settings', href: '/settings', icon: SettingsIcon },
    { name: 'Help & Support', href: '/helpandsupport', icon: HelpOutlineIcon }
  ]

  return (
    <>
      {/* sidebar */}
      <Box
        sx={{
          maxWidth: selectedCardData ? '300px' : '100px',
          transition: 'all 0.2s',
          width: '100%',
          background: '#FFF',
          position: 'fixed',
          left: '0',
          top: '0',
          height: '100%',
          padding: '0px 10px',
          boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '5px'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#B692F6',
            borderRadius: '12px'
          }
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              padding: '20px',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '10px',
              position: 'fixed',
              top: '0',
              zIndex: '111',
              bgcolor: '#fff',
              width: selectedCardData ? '260px' : '60px'
            }}
          >
            <Typography
              component={'img'}
              sx={{ width: selectedCardData ? '200px' : '40px' }}
              src={selectedCardData ? 'assets/image/logo.svg' : 'assets/image/logo2.svg'}
            />
            <IconButton sx={{ width: '40px', height: '40px' }} onClick={toggleWidth}>
              {selectedCardData ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRight />}
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: `${selectedCardData ? '23px' : '10px'}`,
            alignItems: 'flex-start',
            mb: '57px',
            mt: selectedCardData ? '110px' : '100px'
          }}
        >
          {navigation.map(item => (
            <Box sx={{ width: '100%', textAlign: 'left' }}>
              <Button
                onClick={() => router.push(item.href)}
                disableElevation
                disableRipple
                className='inter'
                sx={{
                  width: '100%',
                  alignItems: 'flex-start',
                  padding: `${selectedCardData ? '8px 12px 8px 27px' : '20px'}`,
                  justifyContent: `${selectedCardData ? 'start' : 'center'}`,
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  borderRadius: '8px',
                  backgroundColor: path === item.href ? '#7F56D9' : '#FFf',
                  color: path === item.href ? '#fff' : '#000',
                  '&.MuiButtonBase-root:hover': {
                    backgroundColor: path == item.href ? '#7F56D9' : '#e8d6ff',
                    color: path === item.href ? 'white' : 'black'
                  }
                }}
              >
                <item.icon sx={{ marginRight: '10px' }} />
                {selectedCardData ? item.name : ''}
              </Button>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: `${selectedCardData ? 'flex' : 'none'}`,
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            padding: '20px 16px',
            background: '#F9FAFB',
            borderRadius: '8px',
            maxWidth: '248px',
            width: '100%',
            mx: 'auto',
            mb: '29px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: '248px',
              width: '100%',
              mx: 'auto'
            }}
          >
            <Box>
              <Typography component={'img'} src='/assets/image/Ring.png' />
            </Box>
            <Box sx={{ justifyContent: 'flex-end' }}>
              <CloseIcon />
            </Box>
          </Box>
          <Box sx={{}}>
            <Typography
              className='inter'
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '20px',
                color: '#101828',
                mb: '4px'
              }}
            >
              Used Transcription Time
            </Typography>
            <Typography
              className='inter'
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '20px',
                color: '#475467',
                mb: '16px'
              }}
            >
              You have used 52 mins of your 60 minutes of free transcription time. Need more?
            </Typography>
            <Typography
              className='inter'
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '20px',
                color: '#6941C6',
                mb: '16px'
              }}
            >
              Upgrade plan
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: `${selectedCardData ? '14px 12px 0px 8px' : '20px 0px'}`,
            borderTop: '1px solid #EAECF0'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              padding: '9px 18px'
            }}
          >
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Box>
                <Typography component={'img'} src='/assets/image/userphoto.png' sx={{}} />
              </Box>
              <Box
                sx={{
                  display: `${selectedCardData ? 'block' : 'none'}`
                }}
              >
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
              <Logouttooltip title='logout'>
                <IconButton
                  onClick={() => router.push('/login')}
                  sx={{
                    display: `${selectedCardData ? 'block' : 'none'}`
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Logouttooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DashboadSiadebar
