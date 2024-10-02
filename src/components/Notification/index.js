import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

const Notification = () => {
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
    { label: 'None', key: 'one' },
    { label: 'In-app', key: 'two' },
    { label: 'Email', key: 'three' }
  ]

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid #EAECF0',
          pb: '20px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#101828'
            }}
          >
            Email notifications
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
            Get emails to find out what’s going on when you’re not online. You can turn them off anytime.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid #EAECF0',
          py: '20px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '30px',
              fontWeight: '600',
              lineHeight: '38px',
              color: '#101828'
            }}
          >
            Notifications
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
            Select where and how you’ll be notified.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: '20px',
          py: '20px',
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '300px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            General Notifications
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
            Select how you’ll be notified when the following changes occur.
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              pb: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Stream Created/Updated
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Audio File Uploaded for Audit
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                New Team Member Added
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Company Announcements & Updates
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: '10px', sm: '0px' },
          gap: '20px',
          py: '20px'
          //   borderBottom: "1px solid #EAECF0",
        }}
      >
        <Box sx={{ maxWidth: '300px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#475467'
            }}
          >
            Audit Notifications
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
            Select how you’ll be notified when the following changes occur.
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              pb: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                New Audit Report Ready
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Manual Audit Recommended
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Manual Audit Completed
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Manual Audit Passed
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: '10px', sm: '0px' },
              justifyContent: 'space-between',
              borderBottom: '1px solid #EAECF0',
              py: '20px'
            }}
          >
            <Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500px',
                  lineHeight: '20px',
                  color: '#344054'
                }}
              >
                Manual Audit Failed
              </Typography>
            </Box>
            <Box>
              <ButtonGroup disableRipple aria-label='medium button group'>
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
      </Box>
    </>
  )
}

export default Notification
