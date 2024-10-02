import CustomCheckbox from '@/components/CustomCheckbox'
import LoginHeader from '@/components/LoginHeader'
import styled from '@emotion/styled'
import { ArrowBack } from '@mui/icons-material'
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
            mt: '20px',
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
              <Typography component={'img'} src='/assets/image/forgetpass.svg' />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', mb: '32px' }}>
            <Typography
              className='inter'
              sx={{ fontSize: '30px', fontWeight: '600', lineHeight: '38px', color: '#101828' }}
            >
              Forgot password?
            </Typography>
            <Typography
              className='inter'
              sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px', color: '#475467' }}
            >
              No worries, we’ll send you reset instructions.
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
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mt: '25px' }}>
            <Box>
              <Button
                disableRipple
                className='inter'
                href='/checkyourmail'
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
                Reset password
              </Button>
            </Box>
            <Box>
              <Button
                disableRipple
                className='inter'
                href='/login'
                sx={{
                  bgcolor: '#fff',
                  color: '#475467',
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
                <ArrowBack sx={{ mr: '8px' }} />
                Back to log in
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '32px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', color: '#475467' }}>
              Already have an account?{' '}
              <Typography
                component={'a'}
                href='/login'
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#6941C6',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                Log in
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default index
