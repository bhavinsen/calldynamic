import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import AuditAddnoteModal from './AuditAddnoteModal'

const FinalAuditMOdal = props => {
  const { open, onClose } = props
  const [openAuditAddnoteModal, setopenAuditAddnoteModal] = useState(false)

  const handleClickAuditAddnoteModal = () => {
    setopenAuditAddnoteModal(!openAuditAddnoteModal)
  }

  const handleCloseAuditAddnoteModal = () => {
    setopenAuditAddnoteModal(false)
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
                  pt: '20px',
                  px: '20px'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/auditsucess.svg' />
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
                  py: '10px',
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
                    mb: '4px'
                  }}
                >
                  Select the final audit status
                </Typography>
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
                  Fail Audit
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
                  onClick={handleClickAuditAddnoteModal}
                >
                  Pass Audit
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Fragment>
      <AuditAddnoteModal open={openAuditAddnoteModal} onClose={handleCloseAuditAddnoteModal} />
    </>
  )
}

export default FinalAuditMOdal
