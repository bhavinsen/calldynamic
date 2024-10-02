import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { KeyboardArrowDown } from '@mui/icons-material'
import YourApiKeyModal from './YourApiKeyModal'

const NewApiKey = props => {
  const { open, onClose } = props
  const [isOpen, setIsOpen] = useState(false)
  const [openYourApikeyModal, setopenYourApikeyModal] = useState(false)

  const handleClickYourApiModal = () => {
    setopenYourApikeyModal(!openYourApikeyModal)
  }

  const handleCloseYourApiModal = () => {
    setopenYourApikeyModal(false)
  }

  const toggleInnerDiv = () => {
    setIsOpen(!isOpen)
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
                width: { xs: '250px', sm: '480px' },
                height: 'auto',
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box sx={{ position: 'absolute', top: '7px', right: '10px' }}>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box sx={{ background: '#F2F4F7', padding: '16px', textAlign: 'center' }}>
                <Typography
                  className='inter'
                  sx={{ fontSize: '15px', fontWeight: 500, lineHeight: '28px', color: '#000000' }}
                >
                  Create an API Key
                </Typography>
              </Box>
              <Box sx={{ padding: '24px' }}>
                <Box>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#101828' }}
                  >
                    1. Name your Key:
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', pt: '20px', pb: '30px', borderBottom: '1px solid #EAECF0' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      width: '95%'
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
                      Friendly Name
                    </Typography>
                    <Box>
                      <Typography
                        component={'input'}
                        placeholder='My first useful key'
                        type='text'
                        sx={{
                          maxWidth: '400px',
                          width: '100%',
                          border: '1px solid #D0D5DD',
                          borderRadius: '8px',
                          outline: 'none',
                          padding: '10px 14px',
                          fontSize: '16px',
                          fontWeight: '400',
                          lineHeight: '24px',
                          color: '#101828'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ py: '14px' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#101828' }}
                  >
                    2. Set premissions:
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '18px',
                    flexDirection: 'column',
                    py: '20px',
                    borderBottom: '1px solid #EAECF0'
                  }}
                >
                  <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <Box>
                      <Radio
                        disableRipple
                        sx={{
                          color: '#D0D5DD',
                          '&.Mui-checked': {
                            color: '#7F56D9'
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                      <Typography
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                      >
                        Owner
                      </Typography>
                      <Typography
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#6D648A' }}
                      >
                        Full access to crate transcripts, manage team members and API keys, and change project and
                        billing settings. Permission to monitor usage and logs.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <Box>
                      <Radio
                        disableRipple
                        sx={{
                          color: '#D0D5DD',
                          '&.Mui-checked': {
                            color: '#7F56D9'
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                      <Typography
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                      >
                        Admin
                      </Typography>
                      <Typography
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#6D648A' }}
                      >
                        Full access to crate transcripts, manage team members and API keys, and change project and
                        billing settings. Permission to monitor usage and logs.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <Box>
                      <Radio
                        disableRipple
                        sx={{
                          color: '#D0D5DD',
                          '&.Mui-checked': {
                            color: '#7F56D9'
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                      <Typography
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                      >
                        Member
                      </Typography>
                      <Typography
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#6D648A' }}
                      >
                        Permission to create transcripts and monitor usage and logs. Limited access to mange team
                        members and API keys.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ py: '20px' }}>
                  <Typography
                    className='inter'
                    sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#101828' }}
                  >
                    3. Set Expiration
                  </Typography>
                </Box>
                <Box sx={{ pl: '20px', pb: '20px', borderBottom: '1px solid #EAECF0' }}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='female'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        value='female'
                        control={
                          <Radio
                            disableRipple
                            sx={{
                              color: '#D0D5DD',
                              '&.Mui-checked': {
                                color: '#7F56D9'
                              }
                            }}
                          />
                        }
                        label='Never'
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                      />
                      <FormControlLabel
                        value='male'
                        control={
                          <Radio
                            disableRipple
                            sx={{
                              color: '#D0D5DD',
                              '&.Mui-checked': {
                                color: '#7F56D9'
                              }
                            }}
                          />
                        }
                        label='Duration'
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                      />
                      <FormControlLabel
                        value='other'
                        control={
                          <Radio
                            disableRipple
                            sx={{
                              color: '#D0D5DD',
                              '&.Mui-checked': {
                                color: '#7F56D9'
                              }
                            }}
                          />
                        }
                        label='Date'
                        className='inter'
                        sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box sx={{ py: '20px', borderBottom: '1px solid #EAECF0' }}>
                  <Box
                    sx={{ display: 'flex', gap: '5px', alignItems: 'center', cursor: 'pointer' }}
                    onClick={toggleInnerDiv}
                  >
                    <KeyboardArrowDown sx={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    <Typography
                      className='inter'
                      sx={{ fontSize: '15px', fontWeight: 500, lineHeight: '28px', color: '#101828' }}
                    >
                      Advanced
                    </Typography>
                  </Box>
                  {isOpen && (
                    <Box>
                      <Box sx={{ pt: '20px' }}>
                        <Typography
                          className='inter'
                          sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#101828' }}
                        >
                          4. Add new tags (E.g: ‘env-name’, ‘proj-name’):
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', pt: '20px' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            width: '95%'
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
                            Tags
                          </Typography>
                          <Box>
                            <Typography
                              component={'input'}
                              placeholder='Add Tag'
                              type='text'
                              sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                outline: 'none',
                                padding: '10px 14px',
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#101828'
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '12px',
                      justifyContent: 'flex-end',
                      pt: '20px'
                    }}
                  >
                    <Button
                      disableRipple
                      className='inter'
                      variant='outlined'
                      sx={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '1px solid #D0D5DD',
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#344054',
                        '&.MuiButton-root:hover': {
                          border: '1px solid #D0D5DD'
                        }
                      }}
                      onClick={onClose}
                    >
                      Cancle
                    </Button>
                    <Button
                      disableRipple
                      variant='contained'
                      className='inter'
                      sx={{
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
                      onClick={handleClickYourApiModal}
                    >
                      Create Key
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <YourApiKeyModal open={openYourApikeyModal} onClose={handleCloseYourApiModal} />
    </>
  )
}

export default NewApiKey
