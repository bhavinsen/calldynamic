import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const FooterBar = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        background: '#1D2939',
        padding: '100px 0px 50.4px 0px'
      }}
    >
      <Container maxWidth={'xl'}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '33.6px',
            mb: '50px'
          }}
        >
          <Typography component='img' src='/assets/image/logo.svg' />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: '33.6px'
            }}
          >
            <Typography className='inter' component='ul' sx={{ listStyle: 'none', padding: '0', cursor: 'pointer' }}>
              <Typography
                onClick={() => router.push('/')}
                className='inter'
                component='li'
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EAECF0'
                }}
              >
                Overview
              </Typography>
            </Typography>
            <Typography className='inter' component='ul' sx={{ listStyle: 'none', padding: '0', cursor: 'pointer' }}>
              <Typography
                onClick={() => router.push('/pricing')}
                className='inter'
                component='li'
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EAECF0'
                }}
              >
                Pricing
              </Typography>
            </Typography>
            <Typography className='inter' component='ul' sx={{ listStyle: 'none', padding: '0', cursor: 'pointer' }}>
              <Typography
                onClick={() => router.push('/aboutus')}
                className='inter'
                component='li'
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EAECF0'
                }}
              >
                About Us
              </Typography>
            </Typography>
            <Typography className='inter' component='ul' sx={{ listStyle: 'none', padding: '0', cursor: 'pointer' }}>
              <Typography
                onClick={() => router.push('/')}
                className='inter'
                component='li'
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EAECF0'
                }}
              >
                contact
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gap: '20px',
            display: { xs: 'flex', sm: 'none' },
            justifyContent: 'center'
          }}
        >
          <Typography
            component='img'
            src='/assets/image/twitter.svg'
            sx={{ width: '24px', height: '24px' }}
          ></Typography>
          <Typography
            component='img'
            src='/assets/image/linkedin.svg'
            sx={{ width: '24px', height: '24px' }}
          ></Typography>
          <Typography
            component='img'
            src='/assets/image/facebook.svg'
            sx={{ width: '24px', height: '24px' }}
          ></Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            paddingTop: '33.6px',
            borderTop: { xs: 'none', sm: '1.05px solid #475467' },
            justifyContent: 'center'
          }}
        >
          <Typography
            className='inter'
            component='p'
            sx={{
              flex: '1 1 0',
              color: '#D0D5DD',
              fontSize: '16.08px',
              fontWeight: '600'
            }}
          >
            © 2023 Calldynamics AI. All rights reserved.
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, mx: 'auto' }}>
            <Typography
              className='inter'
              component='ul'
              sx={{
                listStyle: 'none',
                padding: '0',
                display: 'flex',
                gap: '33px'
              }}
            >
              <Typography
                className='inter'
                component='li'
                sx={{
                  color: '#D0D5DD',
                  fontSize: '16.8px',
                  fontWeight: '400',
                  lineHeight: '25.2px',
                  cursor:"pointer"
                }}
              >
                <Typography component='a'>Terms</Typography>
              </Typography>
              <Typography
                className='inter'
                component='li'
                sx={{
                  color: '#D0D5DD',
                  fontSize: '16.8px',
                  fontWeight: '400',
                  lineHeight: '25.2px',
                  cursor:"pointer"
                }}
              >
                <Typography component='a'>Privacy</Typography>
              </Typography>
              <Typography
                className='inter'
                component='li'
                sx={{
                  color: '#D0D5DD',
                  fontSize: '16.8px',
                  fontWeight: '400',
                  lineHeight: '25.2px',
                  cursor:"pointer"
                }}
              >
                <Typography
                  component='a'
                  className='inter'
                  sx={{
                    color: '#D0D5DD',
                    fontSize: '16.8px',
                    fontWeight: '400',
                    lineHeight: '25.2px'
                  }}
                >
                  Cookies
                </Typography>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default FooterBar
