import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SucessfullDelete from './sucessfullDelete'

const IntegrationWarningModal = props => {
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
                width: { xs: '250px', sm: '480px' },
                height: 'auto',
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  py: '20px',
                  px: '20px'
                }}
              >
                <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Typography component={'img'} src='/assets/image/warning.svg' />
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      lineHeight: '30px',
                      color: '#101828',
                      mb: '4px'
                    }}
                  >
                    Warning
                  </Typography>
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
                  py: '10px',
                  px: '20px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '22px',
                    color: '#697586',
                    mb: '4px'
                  }}
                >
                  Are you sure you want to pause{' '}
                  <Typography
                    component={'span'}
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '22px',
                      color: '#364152',
                      mb: '4px'
                    }}
                  >
                    Ringba
                  </Typography>{' '}
                  integration?
                </Typography>
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
                    background: '#D92D20',
                    width: '50%',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#D92D20 !important'
                    }
                  }}
                  onClick={onClose}
                >
                  Pause Stream
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default IntegrationWarningModal
