import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SucessfullDelete from './sucessfullDelete'
import ApiKeyDeletedModal from './ApiKeydeletedModal'

const DeleteApiModal = props => {
  const { open, onClose } = props
  const [openDeletedModal, setopenDeletedModal] = useState(false)

  const handleClickApiKeyDeletedModal = () => {
    setopenDeletedModal(!openDeletedModal)
  }

  const handleCloseApiKeyDeletedModal = () => {
    setopenDeletedModal(false)
  }

  useEffect(() => {
    if (openDeletedModal) {
      const timer = setTimeout(() => {
        setopenDeletedModal(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [openDeletedModal])

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
                width: { xs: '250px', sm: '400px' },
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
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    color: '#101828',
                    mb: '4px'
                  }}
                >
                  Delete this API Key?
                </Typography>
                <IconButton>
                  <CloseIcon onClick={onClose} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  py: '10px',
                  px: '20px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '22px',
                    color: '#697586',
                    mb: '4px'
                  }}
                >
                  This will remove access for all apps and integrations that use this key.
                </Typography>
              </Box>
              <Box
                sx={{
                  p: '20px'
                }}
              >
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
                    background: '#D92D20',
                    width: '100%',
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#D92D20 !important'
                    }
                  }}
                  onClick={handleClickApiKeyDeletedModal}
                >
                  Delete Key
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <ApiKeyDeletedModal open={openDeletedModal} onClose={handleCloseApiKeyDeletedModal} />
    </>
  )
}

export default DeleteApiModal
