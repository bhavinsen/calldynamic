import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SucessfullDelete from './sucessfullDelete'

const ApiSettingModal = props => {
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
                width: { xs: '250px', sm: '640px' },
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
                  pt: '20px',
                  px: '20px'
                }}
              >
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
                  Settings
                </Typography>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  p: '20px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#344054'
                    }}
                  >
                    Input the API Token
                  </Typography>
                  <Box sx={{ maxWidth: '565px', width: '100%' }}>
                    <Typography
                      component={'input'}
                      placeholder='Enter your API Token'
                      type='text'
                      sx={{
                        width: '100%',
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        outline: 'none',
                        padding: '10px 14px'
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#344054'
                    }}
                  >
                    Account ID
                  </Typography>
                  <Box sx={{ maxWidth: '565px', width: '100%' }}>
                    <Typography
                      component={'input'}
                      placeholder='Enter Account ID'
                      type='text'
                      sx={{
                        width: '100%',
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        outline: 'none',
                        padding: '10px 14px'
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

export default ApiSettingModal
