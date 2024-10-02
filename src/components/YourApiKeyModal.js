import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import CustomCheckbox from './CustomCheckbox'

const YourApiKeyModal = props => {
  const { open, onClose } = props
  const [copied, setCopied] = useState(false)
  const codeToCopy = '0756545345-ebd3-cfd23a4-23aedab-e674a99'

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
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
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Box
              sx={{
                width: { xs: '250px', sm: '400px' },
                height: 'auto',
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                p: '20px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pb: '20px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    color: '#101828'
                  }}
                >
                  Your New API Key
                </Typography>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', mb: '15px' }}>
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '28px',
                    color: '#101828'
                  }}
                >
                  FRIENDLY NAME
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
                  Test Key
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: '28px',
                      color: '#101828'
                    }}
                  >
                    SECRET:
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    bgcolor: '#F5F5F5',
                    borderRadius: '3px',
                    p: '10px 15px 30px'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <IconButton onClick={copyCodeToClipboard}>
                      <Typography component={'img'} src='/assets/image/copyicon.svg' />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      className='inter'
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#9AA4B2',
                        textAlign: 'center'
                      }}
                    >
                      {codeToCopy}
                    </Typography>
                    {copied && (
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                        <Box
                          sx={{
                            p: '5px 8px',
                            bgcolor: '#ECFDF3',
                            borderRadius: '12px'
                          }}
                        >
                          <Typography
                            className='inter'
                            sx={{
                              color: '#027A48',
                              textAlign: 'center',
                              fontSize: '14px',
                              fontWeight: '400',
                              lineHeight: '20px'
                            }}
                          >
                            Copied to clipboard!
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box sx={{ py: '15px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      color: '#697586',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '20px'
                    }}
                  >
                    Please copy this secret and save it somewhere safe. For security reasons, we can’t show the secret
                    to you again.{' '}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center ' }}>
                  <CustomCheckbox />
                  <Typography
                    className='inter'
                    sx={{
                      color: '#344054',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '20px'
                    }}
                  >
                    I know I can’t access this key’s secret again
                  </Typography>
                </Box>
                <Box sx={{ pt: '32px' }}>
                  <Box>
                    <Button
                      disableRipple
                      disableElevation
                      variant='contained'
                      className='inter'
                      sx={{
                        width: '100%',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#fff',
                        background: '#7F56D9',
                        '&.MuiButton-root:hover': {
                          backgroundColor: '#7F56D9 !important'
                        }
                      }}
                      onClick={onClose}
                    >
                      Got It
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default YourApiKeyModal
