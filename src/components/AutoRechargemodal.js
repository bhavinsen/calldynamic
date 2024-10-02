import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import IOSSwitch from './IOSSwitch'
import AutoRechargeUpdate from './AutoRechargeUpdate'

const AutoRechargemodal = props => {
  const { open, onClose } = props
  const [openAutoRechargeModal, setopenAutoRechargeModal] = useState(false)

  const handleClickAutoRechargeModal = () => {
    setopenAutoRechargeModal(!openAutoRechargeModal)
  }

  const handleCloseAutoRechargeModal = () => {
    setopenAutoRechargeModal(false)
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
                width: { xs: '250px', sm: '500px' },
                height: 'auto',
                borderRadius: '12px',
                background: '#FFF',
                p: '20px',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  borderBottom: '1px solid #EAECF0',
                  pb: '20px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '28px',
                    color: '#101828'
                  }}
                >
                  Recharge Settings
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
                  Update your card details.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '20px',
                  maxWidth: '400px',
                  width: '100%',
                  margin: 'auto'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    py: '32px',
                    maxWidth: '300px',
                    width: '100%'
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center'
                      }}
                    >
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '18px',
                          fontWeight: 500,
                          lineHeight: '28px',
                          color: '#000000'
                        }}
                      >
                        Auto Recharge
                      </Typography>
                      <Typography component={'img'} src='/assets/image/questionmarks.svg' />
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ mb: '20px' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'center'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '18px',
                            fontWeight: 500,
                            lineHeight: '28px',
                            color: '#000000'
                          }}
                        >
                          Recharge Below
                        </Typography>
                        <Typography component={'img'} src='/assets/image/questionmarks.svg' />
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'center'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '18px',
                            fontWeight: 500,
                            lineHeight: '28px',
                            color: '#000000'
                          }}
                        >
                          Recharge Amount
                        </Typography>
                        <Typography component={'img'} src='/assets/image/questionmarks.svg' />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    py: '32px',
                    borderBottom: '1px solid #EAECF0',
                    maxWidth: '300px',
                    width: '100%'
                  }}
                >
                  <Box>
                    <IOSSwitch />
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        sx={{
                          border: '1px solid #D0D5DD',
                          borderRadius: '8px',
                          maxWidth: '100px',
                          padding: '10px 14px'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#667085'
                          }}
                        >
                          $ 100
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        maxWidth: '100px',
                        padding: '10px 14px'
                      }}
                    >
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: 400,
                          color: '#667085'
                        }}
                      >
                        $ 1000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  borderTop: '1px solid #EAECF0',
                  padding: '16px',
                  maxWidth: '380px',
                  width: '100%',
                  margin: 'auto'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '20px'
                    }}
                  >
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
                        width: '100%',
                        '&.MuiButton-root:hover': {
                          backgroundColor: '#7F56D9 !important'
                        }
                      }}
                      onClick={handleClickAutoRechargeModal}
                    >
                      Update
                    </Button>
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
                        width: '100%',
                        '&.MuiButton-root:hover': {
                          backgroundColor: '#fff !important',
                          border: '1px solid #D0D5DD'
                        }
                      }}
                      onClick={onClose}
                    >
                      Cancle
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <AutoRechargeUpdate open={openAutoRechargeModal} onClose={handleCloseAutoRechargeModal} />
    </>
  )
}

export default AutoRechargemodal
