import CustomCheckbox from '@/components/CustomCheckbox'
import LoginHeader from '@/components/LoginHeader'
import styled from '@emotion/styled'
import { Box, Button, FormControl, InputBase, Typography } from '@mui/material'
import React from 'react'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    width: '330px',
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 14px',
    transition: ['border-color', 'box-shadow'],
    '&:focus': {
      borderRadius: 8,
      borderColor: '#D6BBFB',
      boxShadow: '0 0 0 0.2rem #F4EBFF'
    }
  }
}))

const index = () => {
  return (
    <>
      <LoginHeader />
      <Box sx={{ background: '#F7F5FF !important', width: '100%', height: '100vh' }}>
        <Box
          sx={{
            mt: '50px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            bgcolor: '#fff',
            padding: '56px 78px',
            borderRadius: '23px',
            maxWidth: '360px',
            width: '100%'
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: '24px' }}>
              <Typography component={'img'} src='/assets/image/logo.svg' />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', mb: '32px' }}>
            <Typography
              className='inter'
              sx={{ fontSize: '30px', fontWeight: '600', lineHeight: '38px', color: '#101828' }}
            >
              Log in to your account
            </Typography>
            <Typography
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px', color: '#475467' }}
            >
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Typography
                className='inter'
                sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
              >
                Email
              </Typography>
              <Box>
                <FormControl variant='standard'>
                  <BootstrapInput id='demo-customized-textbox' placeholder='Enter your email' type='email' />
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Typography
                className='inter'
                sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
              >
                Password
              </Typography>
              <Box>
                <Box>
                  <FormControl variant='standard'>
                    <BootstrapInput id='demo-customized-textbox' placeholder='••••••••' type='password' />
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: '24px' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <CustomCheckbox />
              <Typography
                className='inter'
                sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
              >
                Remember for 30 days
              </Typography>
            </Box>
            <Box>
              <Typography
                component={'a'}
                href='/forgetpassword'
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#6941C6',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                Forgot password
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Box>
              <Button
                href='/dashboard'
                disableRipple
                className='inter'
                sx={{
                  bgcolor: '#7F56D9',
                  color: '#fff',
                  width: '100%',
                  borderRadius: '8px',
                  textTransform: 'inherit',
                  padding: '10px 18px',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '24px',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#7F56D9 !important'
                  }
                }}
              >
                Sign in
              </Button>
            </Box>
            <Box>
              <Button
                disableRipple
                className='inter'
                sx={{
                  border: '1px solid #D0D5DD',
                  bgcolor: '#fff',
                  color: '#344054',
                  width: '100%',
                  borderRadius: '8px',
                  textTransform: 'inherit',
                  padding: '10px 18px',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '24px',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#fff !important'
                  }
                }}
              >
                <Typography component={'img'} src='/assets/image/google.svg' sx={{ mr: '8px' }} />
                Sign in with Google
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '32px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', color: '#475467' }}>
              Don’t have an account?{' '}
              <Typography
                component={'a'}
                href='/signup'
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#6941C6',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                Sign up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default index
