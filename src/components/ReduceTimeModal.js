import { Box, Button, Checkbox, IconButton, Menu, MenuItem, Modal, Typography, withStyles } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { KeyboardArrowDown } from '@mui/icons-material'
import TimeReduceModal from './TimeReduceModal'

const Timemenu = ['Minutes', 'Hours']

const ReduceTimeModal = props => {
  const { open, onClose } = props
  const [count, setcount] = useState(0)
  const [openTimeReduceModal, setopenTimeReduceModal] = useState(false)
  const [selectTime, setselectTime] = useState('Select...')
  const [anchorElTime, setAnchorElTime] = useState(null)

  const handleClickTimereducemodal = () => {
    setopenTimeReduceModal(!openTimeReduceModal)
  }

  const handleCloseTimereducemodal = () => {
    setopenTimeReduceModal(false)
  }

  const IncrementCount = () => {
    setcount(count + 5)
  }

  const DecremetCount = () => {
    setcount(count - 5)
  }

  const handleClickTime = event => {
    setAnchorElTime(event.currentTarget)
  }

  const handleCloseTime = Timemenu => {
    setAnchorElTime(null)
    setselectTime(Timemenu)
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
                p: '20px 47px',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'absolute', right: '20px', top: '20px' }}>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  py: '20px',
                  px: '20px'
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
                  <Typography component={'img'} src='/assets/image/ReduceTime.svg' />
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
                  Reduce the additional transcription time
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: '20px'
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      boxShadow: '0px 1px 2px 0px #1018280D',
                      display: 'flex',
                      overflow: 'hidden'
                    }}
                  >
                    <Box sx={{ padding: '8px 40px 8px 12px' }}>
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
                    <Typography
                      component={'img'}
                      src='/assets/image/minus.svg'
                      sx={{ cursor: 'pointer' }}
                      onClick={DecremetCount}
                    />
                    <Typography
                      component={'img'}
                      src='/assets/image/plusround.svg'
                      sx={{ cursor: 'pointer' }}
                      onClick={IncrementCount}
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Button
                        sx={{
                          px: '14px',
                          py: '10px',
                          borderRadius: '8px',
                          border: '1px solid #D0D5DD',
                          color: '#475467',
                          width: '150px',
                          height: '46px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          fontSize: { xs: '14px', sm: '16px' },
                          textTransform: 'initial',
                          ':hover': {
                            background: '#fff !important',
                            border: '1px solid #D0D5DD'
                          }
                        }}
                        disableRipple
                        onClick={handleClickTime}
                        variant='outlined'
                        className='inter'
                      >
                        <Box>
                          <Typography
                            className='inter'
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px'
                            }}
                          >
                            {selectTime}
                          </Typography>
                        </Box>
                        <KeyboardArrowDown />
                      </Button>
                      <Menu
                        anchorEl={anchorElTime}
                        open={Boolean(anchorElTime)}
                        onClose={() => handleCloseTime(selectTime)}
                      >
                        {Timemenu.map(selectTime => (
                          <MenuItem key={selectTime} onClick={() => handleCloseTime(selectTime)}>
                            {selectTime}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '30px',
                        fontWeight: '600',
                        color: '#101828'
                      }}
                    >
                      $0
                    </Typography>
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
                  mt: '20px',
                  borderTop: '1px solid #EAECEF'
                }}
              >
                <Button
                  disableRipple
                  disableElevation
                  variant='contained'
                  className='inter'
                  sx={{
                    padding: ' 12px 20px',
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
                  onClick={handleClickTimereducemodal}
                >
                  Update
                </Button>
                <Button
                  disableRipple
                  disableElevation
                  variant='contained'
                  className='inter'
                  sx={{
                    padding: ' 12px 20px',
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
                  Remove All
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <TimeReduceModal open={openTimeReduceModal} onClose={handleCloseTimereducemodal} />
    </>
  )
}

export default ReduceTimeModal
