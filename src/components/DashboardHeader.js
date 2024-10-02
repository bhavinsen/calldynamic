import { AppBar, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ClearAllIcon from '@mui/icons-material/ClearAll'
import { useRouter } from 'next/router'
const DashboardHeader = ({ isCollapsed, setIsCollapsed }) => {
  const [isNavScroll, setIsNavScroll] = useState(false)

  const router = useRouter()

  const handleScroll = () => {
    if (window?.scrollY > 0) {
      setIsNavScroll(true)
    } else {
      setIsNavScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: isNavScroll ? '#fff' : '#F7F3FD',
          boxShadow: isNavScroll
            ? '0px 3.721px 5.582px -1.861px rgba(16, 24, 40, 0.03), 0px 11.164px 14.885px -3.721px rgba(16, 24, 40, 0.08)'
            : 'none',
          padding: '12px '
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ width: '200px' }}>
            <Typography component={'img'} src='/assets/image/logo.svg' sx={{ maxWidth: '100%' }} />
          </Box>
          <Box
            sx={{
              color: 'black',
              display: { xs: 'block', md: 'none' }
            }}
          >
            <ClearAllIcon
              sx={{
                fontSize: '30px',
                color: '#667085'
              }}
              onClick={() => {
                setIsCollapsed(!isCollapsed)
              }}
            />
          </Box>
        </Box>
      </AppBar>
    </>
  )
}

export default DashboardHeader
