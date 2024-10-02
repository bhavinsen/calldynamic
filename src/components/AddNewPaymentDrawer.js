import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import PaymentSucessDrawer from './PaymentSucessDrawer'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function AddNewPaymentDrawer(props) {
  const { window, openAddPyment, AddPaymenttoggleDrawer } = props
  const [openSuccess, setopenSuccess] = useState(false)

  const SuccesstoggleDrawer = newOpen => () => {
    setopenSuccess(newOpen)
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
          open={openAddPyment}
          onClose={AddPaymenttoggleDrawer(false)}
          onOpen={AddPaymenttoggleDrawer(true)}
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
            <Box sx={{ padding: '20px 13px 30px', borderBottom: '1px solid #E9E9E9' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={AddPaymenttoggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  Settings
                </Typography>
                <Box></Box>
              </Box>
              <Box>
                <Box>
                  <Typography component={'img'} src='/assets/image/creditcard.svg' />
                </Box>
                <Box sx={{ mt: '-50px' }}>
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                          background: '#fff'
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
                            color: '#667085'
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      my: '20px',
                      maxWidth: '360px',
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        maxWidth: '170px',
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
                        maxWidth: '120px',
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
                  <Box sx={{ display: 'flex', my: '20px', gap: '60px' }}>
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
                        maxWidth: '80px',
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
                      onClick={AddPaymenttoggleDrawer(false)}
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
                      onClick={SuccesstoggleDrawer(true)}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <PaymentSucessDrawer SuccesstoggleDrawer={SuccesstoggleDrawer} openSuccess={openSuccess} />
    </>
  )
}
export default AddNewPaymentDrawer
