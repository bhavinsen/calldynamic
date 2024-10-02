import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowDown, KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import TranscriptionSucessDrawer from './TranscriptionSucessDrawer'

const drawerBleeding = -200

const Timemenu = ['Minutes', 'Hours']

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function TranscriptionTimeDrawer(props) {
  const { window, openTranscriptionDrawer, TranscriptiontoggleDrawer } = props
  const [count, setcount] = useState(0)
  const [selectTime, setselectTime] = useState('Select...')
  const [anchorElTime, setAnchorElTime] = useState(null)
  const [openSuccess, setOpenSuccess] = useState(false)

  const SuccesstoggleDrawer = newOpen => () => {
    setOpenSuccess(newOpen)
  }

  const IncrementCount = () => {
    setcount(count + 5)
  }

  const DecremetCount = () => {
    setcount(count - 5)
  }

  const handleClickTime = event => {
    setAnchorElTime(event.currentTarget)
  }

  const handleCloseTime = Timemenu => {
    setAnchorElTime(null)
    setselectTime(Timemenu)
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
          open={openTranscriptionDrawer}
          onClose={TranscriptiontoggleDrawer(false)}
          onOpen={TranscriptiontoggleDrawer(true)}
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
                <IconButton onClick={TranscriptiontoggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  Transcription Time Purchase
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
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/TTclock.svg' />
                </Box>
                <Box>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '20px', fontWeight: '600', lineHeight: '30px', color: '#6941C6' }}
                  >
                    Transcription Time
                  </Typography>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '22px', color: '#475467' }}
                  >
                    Add more minutes/hours to your plan
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ borderTop: '1px solid #EAECF0', p: '15px' }}>
            <Typography
              className='inter'
              sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '22px', color: '#475467' }}
            >
              Enter the number of minutes/hours you would like to add below
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', my: '10px' }}>
              <Box>
                <Box
                  sx={{
                    border: '1px solid #D0D5DD',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 2px 0px #1018280D',
                    display: 'flex',
                    overflow: 'hidden',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ padding: '8px 12px', width: '60px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        color: '#667085'
                      }}
                    >
                      {count}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '8px 12px', borderLeft: '1px solid #D0D5DD' }}>
                    <Typography
                      component={'img'}
                      src='/assets/image/minusgrey.svg'
                      sx={{ cursor: 'pointer' }}
                      onClick={DecremetCount}
                    />
                  </Box>
                  <Box sx={{ padding: '8px 12px', borderLeft: '1px solid #D0D5DD' }}>
                    <Typography
                      component={'img'}
                      src='/assets/image/plusgray.svg'
                      sx={{ cursor: 'pointer' }}
                      onClick={IncrementCount}
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Button
                    sx={{
                      p: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #D0D5DD',
                      color: '#475467',
                      width: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      fontSize: { xs: '14px', sm: '16px' },
                      textTransform: 'initial',
                      ':hover': {
                        background: '#fff !important',
                        border: '1px solid #D0D5DD'
                      }
                    }}
                    disableRipple
                    onClick={handleClickTime}
                    variant='outlined'
                    className='inter'
                  >
                    <Box>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: '400',
                          lineHeight: '24px'
                        }}
                      >
                        {selectTime}
                      </Typography>
                    </Box>
                    <KeyboardArrowDown />
                  </Button>
                  <Menu
                    anchorEl={anchorElTime}
                    open={Boolean(anchorElTime)}
                    onClose={() => handleCloseTime(selectTime)}
                  >
                    {Timemenu.map(selectTime => (
                      <MenuItem key={selectTime} onClick={() => handleCloseTime(selectTime)}>
                        {selectTime}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                mt: '20px',
                borderTop: '1px solid #E9E9E9',
                py: '20px'
              }}
            >
              <Button
                disableRipple
                disableElevation
                variant='contained'
                className='inter'
                sx={{
                  padding: ' 12px 20px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#fff',
                  background: '#7F56D9',
                  width: '65%',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#7F56D9 !important'
                  }
                }}
                onClick={SuccesstoggleDrawer(true)}
              >
                Add
              </Button>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <Typography
                  className='inter'
                  sx={{ fontSize: '10px', fontWeight: '500', lineHeight: '22px', color: '#344054' }}
                >
                  Total
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '30px', fontWeight: '600', lineHeight: '22px', color: '#101828' }}
                >
                  $ 2.25
                </Typography>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <TranscriptionSucessDrawer openSuccess={openSuccess} SuccesstoggleDrawer={SuccesstoggleDrawer}/>
    </>
  )
}
export default TranscriptionTimeDrawer
