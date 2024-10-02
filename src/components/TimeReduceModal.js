import { Box, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const TimeReduceModal = props => {
  const { open, onClose } = props
  return (
    <>
      <Fragment>
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Box
              sx={{
                width: { xs: '250px', sm: '800px' },
                height: '410px',
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  py: '20px',
                  px: '20px'
                }}
              >
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box sx={{ pt: '60px', pb: '100px', mx: 'auto' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Typography sx={{ width: '55px' }} component={'img'} src='/assets/image/timereduce.svg' />
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '17px',
                      fontWeight: '500',
                      lineHeight: '27px',
                      color: '#160647',
                      textAlign: 'center'
                    }}
                  >
                    Additional Transcription Minutes Reduced to 0
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default TimeReduceModal
