import { Box, Button, ButtonGroup, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

// const buttons = [
//   <Button
//     className="inter"
//     key="one"
//     sx={{
//       fontSize: "14px",
//       fontWeight: "600",
//       lineHeight: "20px",
//       color: "#1D2939",
//       textTransform: "lowercase",
//       padding: "10px 16px",
//       border: "1px solid #D0D5DD !important",
//     }}
//   >
//     Account Owner
//   </Button>,
//   <Button
//     className="inter"
//     key="two"
//     sx={{
//       fontSize: "14px",
//       fontWeight: "600",
//       lineHeight: "20px",
//       color: "#1D2939",
//       textTransform: "lowercase",
//       padding: "10px 16px",
//       border: "1px solid #D0D5DD !important",
//     }}
//   >
//     Admin
//   </Button>,
//   <Button
//     className="inter"
//     key="three"
//     sx={{
//       fontSize: "14px",
//       fontWeight: "600",
//       lineHeight: "20px",
//       color: "#1D2939",
//       textTransform: "lowercase",
//       padding: "10px 16px",
//       border: "1px solid #D0D5DD !important",
//     }}
//   >
//     User
//   </Button>,
// ];

const EditModal = props => {
  const { open, onClose } = props
  const [selectedButtons, setSelectedButtons] = useState([])

  const handleButtonClick = index => {
    const selectedIndex = selectedButtons.indexOf(index)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = [...selectedButtons, index]
    } else if (selectedIndex === 0) {
      newSelected = selectedButtons.slice(1)
    } else if (selectedIndex === selectedButtons.length - 1) {
      newSelected = selectedButtons.slice(0, -1)
    } else if (selectedIndex > 0) {
      newSelected = [...selectedButtons.slice(0, selectedIndex), ...selectedButtons.slice(selectedIndex + 1)]
    }

    setSelectedButtons(newSelected)
  }

  const buttons = [
    { label: 'Account Owner', key: 'one' },
    { label: 'Admin', key: 'two' },
    { label: 'User', key: 'three' }
  ]

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
                width: { xs: '250px', sm: '650px' },
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
                  Edit User
                </Typography>
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
                      Full Name
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
                      <Typography
                        className='inter'
                        component={'input'}
                        placeholder='Enter Full Name'
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
                      Full Name
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
                      <Typography component={'img'} src='/assets/image/mail-01.svg' />
                      <Typography
                        className='inter'
                        component={'input'}
                        placeholder='Enter email address'
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
                      Role
                    </Typography>
                  </Box>
                  <Box>
                    <ButtonGroup disableFocusRipple aria-label='medium button group'>
                      {buttons.map((button, index) => (
                        <Button
                          key={button.key}
                          className='inter'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            color: selectedButtons.includes(index) ? '#ffffff' : '#1D2939',
                            textTransform: 'capitalize',
                            padding: '10px 16px',
                            border: '1px solid #D0D5DD !important',
                            borderRadius: '10px',
                            backgroundColor: selectedButtons.includes(index) ? '#7F56D9' : 'transparent',
                            '&:hover': {
                              backgroundColor: selectedButtons.includes(index) ? '#7F56D9' : 'transparent'
                            }
                          }}
                          onClick={() => handleButtonClick(index)}
                        >
                          {button.label}
                        </Button>
                      ))}
                    </ButtonGroup>
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
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default EditModal
