import { Box, Button, IconButton, Menu, MenuItem, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { KeyboardArrowDown } from '@mui/icons-material'

const method = ['GET', 'POST']

const AddWebhooksModal = props => {
  const { open, onClose } = props
  const [openMethod, setopenMethod] = useState(null)
  const [selectedMethod, setSelectedMethod] = useState('GET')

  const handleClickMethod = event => {
    setopenMethod(event.currentTarget)
  }

  const handleCloseMethod = method => {
    setopenMethod(null)
    setSelectedMethod(method)
  }

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
                  py: '20px',
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
                  Add Webhook
                </Typography>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box sx={{ padding: '20px' }}>
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
                      maxWidth: '620px'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'input'}
                      placeholder='Enter Name'
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
              <Box sx={{ px: '20px', py: '10px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '20px',
                        color: '#344054'
                      }}
                    >
                      Phone number
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
                        maxWidth: '620px'
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer ' }}
                        onClick={handleClickMethod}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '24px',
                            color: '#101828'
                          }}
                        >
                          {selectedMethod}
                        </Typography>
                        <KeyboardArrowDown sx={{ color: '#667085' }} />
                      </Box>
                      <Menu
                        anchorEl={openMethod}
                        open={Boolean(openMethod)}
                        onClose={() => handleCloseMethod(selectedMethod)}
                        PaperProps={{
                          sx: {
                            boxShadow:
                              '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                            maxWidth: '100px',
                            width: '100%'
                          }
                        }}
                      >
                        {method.map(method => (
                          <MenuItem key={method} onClick={() => handleCloseMethod(method)}>
                            {method}
                          </MenuItem>
                        ))}
                      </Menu>
                      <Typography
                        className='inter'
                        component={'input'}
                        placeholder='Enter URL or paste text'
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
              </Box>
              <Box sx={{ px: '20px', py: '10px', display: 'flex', gap: '4px' }}>
                <Button
                  disableRipple
                  disableElevation
                  variant='contained'
                  className='inter'
                  sx={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#fff',
                    background: '#7F56D9',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#7F56D9 !important'
                    }
                  }}
                >
                  Params
                </Button>
                <Button
                  disableRipple
                  disableElevation
                  variant='text'
                  className='inter'
                  sx={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#344054',
                    // background: '#7F56D9',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#7F56D9 !important',
                      color: '#fff'
                    }
                  }}
                >
                  Headers
                </Button>
              </Box>
              <Box sx={{ px: '20px', py: '10px' }}>
                <Button
                  disableRipple
                  disableElevation
                  variant='text'
                  className='inter'
                  sx={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#667085',
                    // background: '#7F56D9',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#7F56D9 !important',
                      color: '#fff'
                    }
                  }}
                >
                  Query Params
                </Button>
              </Box>
              <Box sx={{ px: '20px', py: '10px' }}>
                <Box sx={{ border: '1px solid #EAECF0', borderRadius: '11px', overflow: 'hidden' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', borderBottom: '1px solid #EAECF0', width: '100%' }}>
                      <Box
                        sx={{
                          width: '50%',
                          padding: '13px 32px',
                          bgcolor: '#F9FAFB',
                          borderRight: '1px solid #EAECF0'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '18px', color: '#475467' }}
                        >
                          Key
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: '50%',
                          padding: '13px 32px',
                          bgcolor: '#F9FAFB',
                          borderRight: '1px solid #EAECF0'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '18px', color: '#475467' }}
                        >
                          Value
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', borderBottom: '1px solid #EAECF0', width: '100%' }}>
                      <Box
                        sx={{
                          width: '50%',
                          padding: '25px 32px',
                          bgcolor: '#fff',
                          borderRight: '1px solid #EAECF0'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#475467' }}
                        >
                          Key
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: '50%',
                          padding: '25px 32px',
                          bgcolor: '#fff',
                          borderRight: '1px solid #EAECF0'
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography
                            className='inter'
                            sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#475467' }}
                          >
                            Value
                          </Typography>
                          <Box sx={{ display: 'flex', gap: '12px' }}>
                            <Box>
                              <Typography component={'img'} src='/assets/image/doublearrow.svg' />
                            </Box>
                            <Box>
                              <Typography component={'img'} src='/assets/image/Add.svg' />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '20px',
                  py: '20px',
                  px: '20px',
                  mt: '20px'
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
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default AddWebhooksModal
