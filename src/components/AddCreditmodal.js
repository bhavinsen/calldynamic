import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SucessfullCredit from './SucessfullCredit'

const AddCreditmodal = props => {
  const { open, onClose } = props
  const [count, setCount] = useState(500)
  const [openCreditModal, setopenCreditModal] = useState(false)

  const handleClickModal = () => {
    setopenCreditModal(!openCreditModal)
  }

  const handleCloseModal = () => {
    setopenCreditModal(false)
  }

  const incrementCount = () => {
    setCount(count + 5)
  }

  const decrementCount = () => {
    setCount(count - 5)
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
                p: '10px',
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '10px',
                  pt: '20px',
                  pb: '10px'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/credit.svg' />
                </Box>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    color: '#6941C6'
                  }}
                >
                  Credits
                </Typography>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#475467'
                  }}
                >
                  Add more credits to your plan
                </Typography>
              </Box>
              <Box
                sx={{
                  border: '1px solid #EAECF0',
                  bgcolor: '#FCFCFD',
                  p: '20px',
                  borderRadius: '7px',
                  m: '20px'
                }}
              >
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      color: '#475467',
                      textAlign: 'center',
                      pb: '20px'
                    }}
                  >
                    Enter the number of credits you would like to add
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: '11px', alignItems: 'end' }}>
                    <Box
                      sx={{
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        width: '150px',
                        display: 'flex'
                      }}
                    >
                      <Box
                        sx={{
                          p: '8px',
                          borderRight: '1px solid #D0D5DD',
                          width: '130px'
                        }}
                      >
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '24px',
                            color: '#667085'
                          }}
                        >
                          {count}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          p: '8px',
                          width: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative'
                        }}
                      >
                        <Box sx={{ position: 'absolute', top: '0', left: '2px' }} onClick={incrementCount}>
                          <KeyboardArrowUpIcon />
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: '0',
                            left: '2px'
                          }}
                          onClick={decrementCount}
                        >
                          <KeyboardArrowDownIcon />
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '16px',
                          fontWeight: '400',
                          lineHeight: '24px',
                          color: '#667085'
                        }}
                      >
                        Credits
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'right'
                    }}
                  >
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '22px',
                        fontWeight: '600',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      $ 4.25
                    </Typography>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '24px',
                        color: '#98A2B3'
                      }}
                    >
                      100 credits
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    pt: '20px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                  }}
                >
                  <Box>
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
                        width: '200px',
                        height: '48px',
                        '&.MuiButton-root:hover': {
                          backgroundColor: '#7F56D9 !important'
                        }
                      }}
                      onClick={handleClickModal}
                    >
                      Add
                    </Button>
                  </Box>
                  <Box sx={{}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '10px',
                          fontWeight: '500',
                          lineHeight: '24px',
                          color: '#344054'
                        }}
                      >
                        Total
                      </Typography>
                      <Typography
                        className='inter'
                        sx={{
                          fontSize: '30px',
                          fontWeight: '600',
                          lineHeight: '24px',
                          color: '#101828'
                        }}
                      >
                        $ 21.25
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <SucessfullCredit open={openCreditModal} onClose={handleCloseModal} />
    </>
  )
}

export default AddCreditmodal
