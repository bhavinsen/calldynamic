import { Box, Button, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import SucessfullPayment from './SucessfullPayment'

const AddPaymantmodal = props => {
  const { open, onClose } = props
  const [openSucessfullPaymentModal, setopenSucessfullPaymentModal] = useState(false)

  const handleClickPaymentSucessfullModal = () => {
    setopenSucessfullPaymentModal(!openSucessfullPaymentModal)
  }

  const handleClosePaymentSucessfullModal = () => {
    setopenSucessfullPaymentModal(false)
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
                width: { xs: '250px', sm: '480px' },
                height: 'auto',
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                p: '24px',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  transform: 'translateY(-50%)',
                  left: '0',
                  right: '0',
                  margin: 'auto',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Typography component={'img'} src='/assets/image/creditcard.svg' />
              </Box>
              <Box sx={{ mt: '100px' }}>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '28px'
                  }}
                >
                  Add New Payment Method
                </Typography>
                <Box sx={{ display: 'flex', gap: '60px', my: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      maxWidth: '280px',
                      width: '100%'
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
                      Name on card
                    </Typography>
                    <Box>
                      <Typography
                        component={'input'}
                        placeholder='Olivia Rhye'
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
                      gap: '6px',
                      maxWidth: '100px',
                      width: '100%'
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
                      Expiry
                    </Typography>
                    <Box>
                      <Typography
                        component={'input'}
                        placeholder='06 / 2024'
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
                <Box sx={{ display: 'flex', gap: '60px', my: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      maxWidth: '280px',
                      width: '100%'
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
                      Card number
                    </Typography>
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
                      <Typography component={'img'} src='/assets/image/mastercard.svg' />
                      <Typography
                        className='inter'
                        component={'input'}
                        type='number'
                        placeholder='1234 1234 1234 1234'
                        maxLength='19'
                        sx={{
                          padding: '',
                          background: '#FFF',
                          border: 'none',
                          outline: 'none',
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '24px',
                          color: '#667085',
                          width: '100%'
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      maxWidth: '100px',
                      width: '100%'
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
                      CVV
                    </Typography>
                    <Box>
                      <Typography
                        component={'input'}
                        type='password'
                        placeholder=''
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
                    flexDirection: 'column',
                    gap: '6px',
                    maxWidth: '100px',
                    width: '100%'
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
                    ZIP Code
                  </Typography>
                  <Box>
                    <Typography
                      component={'input'}
                      type='number'
                      placeholder='30001'
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
                    justifyContent: 'space-between',
                    gap: '20px',
                    pt: '20px'
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
                    onClick={handleClickPaymentSucessfullModal}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <SucessfullPayment open={openSucessfullPaymentModal} onClose={handleClosePaymentSucessfullModal} />
    </>
  )
}

export default AddPaymantmodal
