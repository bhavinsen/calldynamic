
import { Box, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const AudioPlayerModal = props => {
  const { open, onClose } = props
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    let intervalId

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [isPlaying])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
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
                width: { xs: '250px', sm: '900px' },
                height: 'auto',
                borderRadius: '24px',
                background: '#FFF',
                boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: '26px 20px 16px 46px ',
                  borderBottom: '1px solid #EAECF0'
                }}
              >
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      lineHeight: '30px',
                      color: '#475467',
                      mb: '4px'
                    }}
                  >
                    Call Recording
                  </Typography>
                </Box>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14x', padding: '15px 27px 28px 42px' }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Typography component={'img'} src='/assets/image/musicfile.svg' />

                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '16px',
                      fontWeight: '500',
                      lineHeight: '19px',
                      color: '#000',
                      mb: '4px'
                    }}
                  >
                    lead_33_health.mp3
                  </Typography>
                </Box>
                <Box>
                  <Typography component={'img'} src='/assets/image/musicwave.svg' />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: '26px 20px 30px 46px ',
                  borderTop: '1px solid #EAECF0'
                }}
              >
                <Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '16px',
                      fontWeight: '500',
                      lineHeight: '20px',
                      color: '#000000'
                    }}
                  >
                    {formatTime(currentTime)} / 15:00
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
                  <Typography component={'img'} src='/assets/image/forward10.svg' />
                  <Typography
                    component={'img'}
                    src={isPlaying ? '/assets/image/Playblue.svg' : '/assets/image/Player.svg'}
                    onClick={handleClick}
                  />
                  <Typography component={'img'} src='/assets/image/backword10.svg' />
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    </>
  )
}

export default AudioPlayerModal
