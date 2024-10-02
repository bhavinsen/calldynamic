import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import StreemSucessDrawer from './StreemSucessDrawer'

const drawerBleeding = -200

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function StreemPurchaseDrawer(props) {
  const { window, openSreemDrawer, StreemtoggleDrawer } = props
  const [open, setOpen] = useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

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
          open={openSreemDrawer}
          onClose={StreemtoggleDrawer(false)}
          onOpen={StreemtoggleDrawer(true)}
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
                <IconButton onClick={StreemtoggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  API Stream Purchase
                </Typography>
                <Box sx={{ color: 'transparent' }}>.........</Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: '30px' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  textAlign: 'center'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/apistreem.svg' />
                </Box>
                <Typography
                  className='inter'
                  sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#160647' }}
                >
                  API Streams
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '22px', color: '#475467' }}
                >
                  Add more API Streams to your plan
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', px: '15px' }}>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  borderRadius: '7px',
                  padding: '13px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '500', lineHeight: '21px', color: '#7F56D9' }}
                >
                  5
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '21px', color: '#7F56D9' }}
                  >
                    {' '}
                    Streams
                  </Typography>
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '500', lineHeight: '21px', color: '#101828' }}
                >
                  $97
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '21px', color: '#98A2B3' }}
                  >
                    /mo
                  </Typography>
                </Typography>
                <Box>
                  <Button
                    variant='contained'
                    disableRipple
                    sx={{
                      background: '#7F56D9',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '24px',
                      '&.MuiButton-root:hover': {
                        background: '#7F56D9'
                      }
                    }}
                    onClick={toggleDrawer(true)}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  borderRadius: '7px',
                  padding: '13px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '500', lineHeight: '21px', color: '#7F56D9' }}
                >
                  10
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '21px', color: '#7F56D9' }}
                  >
                    {' '}
                    Streams
                  </Typography>
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '500', lineHeight: '21px', color: '#101828' }}
                >
                  $149
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '21px', color: '#98A2B3' }}
                  >
                    /mo
                  </Typography>
                </Typography>
                <Box>
                  <Button
                    variant='contained'
                    disableRipple
                    sx={{
                      background: '#7F56D9',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '24px',
                      '&.MuiButton-root:hover': {
                        background: '#7F56D9'
                      }
                    }}
                    onClick={toggleDrawer(true)}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  borderRadius: '7px',
                  padding: '13px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '500', lineHeight: '21px', color: '#7F56D9' }}
                >
                  25
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '21px', color: '#7F56D9' }}
                  >
                    {' '}
                    Streams
                  </Typography>
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '500', lineHeight: '21px', color: '#101828' }}
                >
                  $249
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '21px', color: '#98A2B3' }}
                  >
                    /mo
                  </Typography>
                </Typography>
                <Box>
                  <Button
                    variant='contained'
                    disableRipple
                    sx={{
                      background: '#7F56D9',
                      color: '#fff',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '24px',
                      '&.MuiButton-root:hover': {
                        background: '#7F56D9'
                      }
                    }}
                    onClick={toggleDrawer(true)}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <StreemSucessDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  )
}
export default StreemPurchaseDrawer
