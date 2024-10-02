import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import StreemPurchaseDrawer from './StreemPurchaseDrawer'
import TranscriptionTimeDrawer from './TranscriptionTimeDrawer'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function PurchaseDrawer(props) {
  const { window, open, toggleDrawer } = props
  const [openSreemDrawer, setopenSreemDrawer] = useState(false)
  const [openTranscriptionDrawer, setopenTranscriptionDrawer] = useState(false)

  const StreemtoggleDrawer = newOpen => () => {
    setopenSreemDrawer(newOpen)
  }

  const TranscriptiontoggleDrawer = newOpen => () => {
    setopenTranscriptionDrawer(newOpen)
  }

  return (
    <>
      <Root>
        <SwipeableDrawer
          sx={{
            '.MuiPaper-root': {
              height: 'auto',
              overflow: 'hidden',
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px'
            }
          }}
          anchor='bottom'
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
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
                  What would you like to purchase?
                </Typography>
                <Box></Box>
              </Box>
            </Box>
            <Box sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }} onClick={StreemtoggleDrawer(true)}>
                <Box>
                  <Typography component={'img'} src='/assets/image/apistreem.svg' />
                </Box>
                <Box>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
                  >
                    API Streams
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ padding: '20px 27px', borderBottom: '1px solid #E9E9E9' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }} onClick={TranscriptiontoggleDrawer(true)}>
                <Box>
                  <Typography component={'img'} src='/assets/image/TTclock.svg' />
                </Box>
                <Box>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}
                  >
                    Transcription Time
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <StreemPurchaseDrawer StreemtoggleDrawer={StreemtoggleDrawer} openSreemDrawer={openSreemDrawer} />
      <TranscriptionTimeDrawer
        openTranscriptionDrawer={openTranscriptionDrawer}
        TranscriptiontoggleDrawer={TranscriptiontoggleDrawer}
      />
    </>
  )
}
export default PurchaseDrawer
