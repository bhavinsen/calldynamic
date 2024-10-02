import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Add, Delete, KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import AddNewPaymentDrawer from './AddNewPaymentDrawer'
import { useSwipeable } from 'react-swipeable'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

const cardDetail = [
  {
    payimage: '/assets/image/visa.svg',
    ending: 'Visa ending in 1234'
  },
  {
    payimage: '/assets/image/mastercard.svg',
    ending: 'Mastercard ending in 1234'
  },
  {
    payimage: '/assets/image/applepay.svg',
    ending: 'Mastercard ending in 1234'
  }
]

function UpdatePaymentDrawer(props) {
  const { window, openPyment, PaymenttoggleDrawer } = props
  const [chackedItemId, setchackedItemId] = useState(null)
  const [openAddPyment, setOpenAddPyment] = useState(false)

  const AddPaymenttoggleDrawer = newOpen => () => {
    setOpenAddPyment(newOpen)
  }

  const handleChackedItem = itemId => {
    setchackedItemId(prevState => (prevState === itemId ? null : itemId))
  }

  const handlers = useSwipeable({ onSwipedLeft: e => setElmove(e.absX)})

  // setup ref for your usage
  const myRef = React.useRef()

  const refPassthrough = el => {
    // call useSwipeable ref prop with el
    handlers.ref(el)

    // set myRef el so you can access it yourself
    myRef.current = el
  }

  const [elmove, setElmove] = useState(false)

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
          open={openPyment}
          onClose={PaymenttoggleDrawer(false)}
          onOpen={PaymenttoggleDrawer(true)}
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
                <IconButton onClick={PaymenttoggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  Update Payment Method
                </Typography>
                <Box></Box>
              </Box>
            </Box>
            <Box sx={{ padding: '10px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Typography
                  className='inter'
                  sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#344054' }}
                >
                  Card details
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#475467' }}
                >
                  Select default payment method.
                </Typography>
              </Box>
              <Box>
                {cardDetail.map((item, index) => (
                  <Box {...handlers} ref={refPassthrough} sx={{ position: 'relative', mt: 2, width: '100%' }}>
                    <Box
                      sx={{
                        bgcolor: '#E54D4D',
                        borderRadius: '13px',
                        zIndex: 1,
                        width: '100%',
                        height: '102px',

                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:"center" , pt:"15px", px:"20px"}}>
                        <Typography sx={{color:"transparent"}}>...</Typography>
                        <Typography className='inter' sx={{ fontSize: '20px', color: '#fff', padding: '20px' }}>
                          Release to Remove
                        </Typography>
                        <Delete sx={{color:"#fff"}}/>
                      </Box>
                    </Box>
                    <Box
                      key={index}
                      sx={{
                        border: chackedItemId === index ? '2px solid #7F56D9' : '2px solid #EAECF0',
                        borderRadius: '12px',
                        background: chackedItemId === index ? '#F9F5FF' : '#fff',
                        py: '19px',
                        px: '10px',
                        cursor: 'pointer',
                        position: 'absolute',
                        zIndex: 999,
                        width: '96%',
                        top: 0,
                        left: elmove ? `-${elmove}px` : 0
                      }}
                      onClick={() => handleChackedItem(index)}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Box>
                            <Typography component={'img'} src={item.payimage} />
                          </Box>
                          <Box>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                color: chackedItemId === index ? '#53389E' : '#344054'
                              }}
                            >
                              {item.ending}
                            </Typography>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: chackedItemId === index ? '#7F56D9' : '#475467'
                              }}
                            >
                              Expiry 06/2024
                            </Typography>
                            <Typography
                              className='inter'
                              sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                color: chackedItemId === index ? '#9E77ED' : '#475467'
                              }}
                            >
                              Set as default{' '}
                              <Typography
                                component={'span'}
                                className='inter'
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: '600',
                                  lineHeight: '20px',
                                  color: '#6941C6',
                                  ml: '12px'
                                }}
                              >
                                Edit
                              </Typography>
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            sx={{ cursor: 'pointer' }}
                            component={'img'}
                            src={chackedItemId === index ? '/assets/image/roundcheck.svg' : '/assets/image/round.svg'}
                            onClick={() => handleChackedItem(index)}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ my: '15px' }}>
                <Button
                  className='inter'
                  disableRipple
                  sx={{
                    border: '1px solid #D0D5DD',
                    padding: '10px 16px',
                    width: '100%',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#344054',
                    bgcolor: '#fff',
                    '&.MuiButton-root:hover': {
                      bgcolor: '#fff'
                    }
                  }}
                  onClick={AddPaymenttoggleDrawer(true)}
                >
                  <Add sx={{ pr: 1, color: '#344054' }} />
                  Add new payment method
                </Button>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <AddNewPaymentDrawer AddPaymenttoggleDrawer={AddPaymenttoggleDrawer} openAddPyment={openAddPyment} />
    </>
  )
}
export default UpdatePaymentDrawer
