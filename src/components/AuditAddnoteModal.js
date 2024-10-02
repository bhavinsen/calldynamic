import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const AuditAddnoteModal = props => {
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
              transform: 'translate(-50%,-50%)'
            }}
          >
            <Box
              sx={{
                width: { xs: '250px', sm: '900px' },
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
              <Box sx={{ display: 'flex', gap: '20px', px: '20px', pb: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '28px', color: '#101828' }}
                  >
                    Add notes
                  </Typography>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', color: '#475467' }}
                  >
                    Notes about the call and outcome of the audit.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#101828' }}
                  >
                    Final Audit Outcome
                  </Typography>
                  <Box sx={{ bgcolor: '#ECFDF3', borderRadius: '20px', p: '2.5px 10px' }}>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '22px',
                        color: '#027A48',
                        textAlign: 'center'
                      }}
                    >
                      Audit Passed
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', px: '20px', pb: '20px' }}>
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
                    Title*
                  </Typography>
                  <Box sx={{ maxWidth: '825px', width: '100%' }}>
                    <Typography
                      component={'input'}
                      placeholder='What is your title?'
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
                    Description*
                  </Typography>
                  <Box sx={{ maxWidth: '825px', width: '100%' }}>
                    <Typography
                      component={'textarea'}
                      placeholder='Lorem ipsum dolor sit amet consectetur. Varius ultrices nibh luctus id placerat hac. Ut nulla vitae ultricies consequat ut mus semper quis morbi. Elementum ac blandit magna eget vulputate odio erat. Et cras commodo vulputate ac viverra nulla blandit nec tellus.'
                      rows={8}
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

export default AuditAddnoteModal
