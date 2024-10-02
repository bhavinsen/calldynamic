import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import IOSSwitch from '../IOSSwitch'
import ApiSettingModal from '../ApiSettingModal'
import IntegrationWarningModal from '../IntegrationWarningModal'

const IntigrationsApp = [
  {
    img: '/assets/image/ringba.svg',
    title: 'Ringba',
    Disc: 'Need a Ringba account? '
  },
  {
    img: '/assets/image/track.svg',
    title: 'Trackdrive',
    Disc: 'Need a Trackdrive account? '
  },
  {
    img: '/assets/image/retreaver.svg',
    title: 'Retreaver',
    Disc: 'Need a Retreaver account? '
  },
  {
    img: '/assets/image/twilio.svg',
    title: 'Twilio',
    Disc: 'Need a Twilio account? '
  },
  {
    img: '/assets/image/highlevel.svg',
    title: 'HighLevel',
    Disc: 'Need a HighLevel account? '
  }
]

const Intigrations = () => {
  const [openApiSettingModal, setopenApiSettingModal] = useState(false)
  const [openIntegrationWarningModal, setopenIntegrationWarningModal] = useState(false)

  const handleClickApiSettingModal = () => {
    setopenApiSettingModal(!openApiSettingModal)
  }

  const handleCloseApiSettingModal = () => {
    setopenApiSettingModal(false)
  }

  const handleClickIntegrationWarningModal = () => {
    setopenIntegrationWarningModal(!openIntegrationWarningModal)
  }

  const handleCloseIntegrationWarningModal = () => {
    setopenIntegrationWarningModal(false)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: '20px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#101828'
            }}
          >
            Integrations and connected apps
          </Typography>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Connect with your favorite call routing software to quickly setup real-time streams.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {IntigrationsApp.map(item => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                border: '1px solid #EAECF0',
                background: '#FFF',
                boxShadow: '0px 0.973px 1.946px 0px rgba(16, 24, 40, 0.05)',
                borderRadius: '12px'
              }}
            >
              <Box
                sx={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <Typography component={'img'} src={item.img} />
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box>
                    <IOSSwitch onClick={handleClickIntegrationWarningModal} />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: '#475467'
                    }}
                  >
                    {item.Disc}{' '}
                    <Typography
                      component={'span'}
                      className='inter'
                      sx={{
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        color: '#7F56D9'
                      }}
                    >
                      {' '}
                      signup here
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ padding: '17px 24px', borderTop: '1px solid #EAECF0' }}>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Button
                    disableRipple
                    disableElevation
                    variant='contained'
                    className='inter'
                    sx={{
                      padding: ' 10px 16px',
                      borderRadius: '8px',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#fff',
                      background: '#7F56D9',
                      '&.MuiButton-root:hover': {
                        backgroundColor: '#7F56D9 !important'
                      }
                    }}
                    onClick={handleClickApiSettingModal}
                  >
                    Settings
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ApiSettingModal open={openApiSettingModal} onClose={handleCloseApiSettingModal} />
      <IntegrationWarningModal open={openIntegrationWarningModal} onClose={handleCloseIntegrationWarningModal} />
    </>
  )
}

export default Intigrations
