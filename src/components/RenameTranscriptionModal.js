import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const RenameTranscriptionModal = props => {
  const { open, onClose } = props
  return (
    <>
      <Fragment>
        <Modal open={open} onClose={onClose}>
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
                width: { xs: '250px', sm: '400px' },
                height: 'auto',
                borderRadius: '8px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: '20px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    border: '1px solid #EAECF0',
                    borderRadius: '10px',
                    padding: '15px',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                  }}
                >
                  <Typography component={'img'} src='/assets/image/edit.svg' />
                </Box>
                <Box>
                  <IconButton>
                    <CloseIcon onClick={onClose} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  px: '20px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '28px',
                    color: '#101828',
                    mb: '20px'
                  }}
                >
                  lead_34_john.mp3
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', p: '20px' }}>
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#160647'
                    }}
                  >
                    Rename Transcription
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    maxWidth: '640px',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '8px',
                      padding: '10px 14px',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      pr: '5px',
                      background: '#fff',
                      width: '100%',
                      maxWidth: '420px'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'input'}
                      placeholder='Enter new name'
                      sx={{
                        padding: '',
                        background: '#FFF',
                        border: 'none',
                        outline: 'none',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        color: '#667085'
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '20px',
                  py: '20px',
                  px: '20px'
                }}
              >
                <Button
                  disableRipple
                  disableElevation
                  className='inter'
                  variant='outlined'
                  sx={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid #D0D5DD',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#344054',
                    width: '50%',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#fff !important',
                      border: '1px solid #D0D5DD'
                    }
                  }}
                  onClick={onClose}
                >
                  Cancle
                </Button>
                <Button
                  disableRipple
                  disableElevation
                  variant='contained'
                  className='inter'
                  sx={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#fff',
                    background: '#7F56D9',
                    width: '50%',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#7F56D9 !important'
                    }
                  }}
                  onClick={onClose}
                >
                  Confirm
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default RenameTranscriptionModal