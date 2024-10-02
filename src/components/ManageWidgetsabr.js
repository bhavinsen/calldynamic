import { Box, Button, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import { AddCircleOutline, Check } from '@mui/icons-material'

const widgetsdata = [
  {
    id: '1',
    img: '/assets/image/transcriptionDash.svg',
    title: 'Transcription'
  },
  {
    id: '2',
    img: '/assets/image/trigger.svg',
    title: 'Trigger Words & Phrases'
  },
  {
    id: '3',
    img: '/assets/image/speedometer.svg',
    title: 'Risk Score'
  },
  {
    id: '4',
    img: '/assets/image/phone.svg',
    title: 'Caller Status'
  },
  {
    id: '5',
    img: '/assets/image/Campaign.svg',
    title: 'Campaign'
  }
]

const ManageWidgetsabar = ({ isOpen, setisOpen }) => {
  const [IsAdded, setIsAdded] = useState([])

  const handleButtonClick = widgetId => {
    setIsAdded(prevSelectedWidgets => {
      if (prevSelectedWidgets.includes(widgetId)) {
        return prevSelectedWidgets.filter(id => id !== widgetId)
      } else {
        return [...prevSelectedWidgets, widgetId]
      }
    })
  }

  const isWidgetSelected = widgetId => {
    return IsAdded.includes(widgetId)
  }

  return (
    <>
      <Box
        sx={{
          display: `${isOpen ? 'block' : 'none'}`,
          position: 'fixed',
          inset: '0px',
          transition: 'all 0.2s',
          zIndex: '300',
          background: '#0000002b'
        }}
        onClick={() => {
          setisOpen(false)
        }}
      ></Box>
      <Box
        sx={{
          maxWidth: '400px',
          background: '#FFF',
          position: 'fixed',
          right: `${isOpen ? '0px' : '-500px'}`,
          top: '0',
          height: '100%',
          padding: '0px 20px',
          zIndex: '300',
          transition: 'all 0.2s',
          boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '3px'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#B692F6'
          }
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography component={'img'} src='/assets/image/addwidgets.svg' />
              <Typography
                className='inter'
                sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  color: '#101828',
                  pl: '10px'
                }}
              >
                Add Widgets
              </Typography>
            </Box>
            <IconButton
              onClick={() => {
                setisOpen(false)
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        {widgetsdata.map((item, index) => {
          return (
            <Box
              key={item.id}
              sx={{
                padding: '20px',
                background: `${isWidgetSelected(item.id) ? '#F9F5FF' : '#FFF'}`,
                borderRadius: '12px',
                border: '1px solid #EAECF0',
                transition: 'all 0.2s',
                my: '20px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: '12px'
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    borderRadius: '8px',
                    background: '#FFF',
                    border: '1px solid #EAECF0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                  }}
                >
                  <Typography component={'img'} src={item.img} />
                </Box>
                <Box>
                  <Button
                    variant='contained'
                    className='inter'
                    disableElevation
                    disableRipple
                    sx={{
                      padding: '4px 9px',
                      background: isWidgetSelected(item.id) ? '#7F56D9' : '#F9FAFB',
                      color: isWidgetSelected(item.id) ? '#fff' : '#98A2B3',
                      borderRadius: '6px',
                      textTransform: 'capitalize',
                      '&:hover': {
                        background: isWidgetSelected(item.id) ? '#7F56D9' : '#F9FAFB'
                      }
                    }}
                    onClick={() => handleButtonClick(item.id)}
                  >
                    {isWidgetSelected(item.id) ? <Check sx={{ mr: '3px' }} /> : <AddCircleOutline sx={{ mr: '5px' }} />}{' '}
                    {isWidgetSelected(item.id) ? 'Added' : 'Add To Dashboard'}
                  </Button>
                </Box>
              </Box>
              <Typography
                className='inter'
                sx={{
                  fontSize: '22px',
                  fontWeight: '600',
                  lineHeight: '38px',
                  color: '#344054',
                  mb: '4px'
                }}
              >
                {item.title}
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#475467',
                  mb: '4px'
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Amet nulla posuere ultrices urna habitant feugiat id.
              </Typography>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default ManageWidgetsabar
