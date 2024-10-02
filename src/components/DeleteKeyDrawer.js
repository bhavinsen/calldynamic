import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import DeleteKeySucessfullDrawer from './DeleteKeySucessfullDrawer'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

function DeleteKeyDrawer(props) {
  const { window, openDeleteKeyDrawer, DeleteKeytoggleDrawer } = props
  const [openDeleteSucess, setOpenDeleteSucess] = useState(false)

  const DeleteSucesstoggleDrawer = newOpen => () => {
    setOpenDeleteSucess(newOpen)
  }

  return (
    <>
      <Root>
        <SwipeableDrawer
          sx={{
            '.MuiPaper-root': {
              height: 'auto',
              overflow: 'hidden',
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px'
            }
          }}
          anchor='bottom'
          open={openDeleteKeyDrawer}
          onClose={DeleteKeytoggleDrawer(false)}
          onOpen={DeleteKeytoggleDrawer(true)}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: false
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px',
              overflow: 'visible'
            }}
          >
            <Box sx={{ padding: '20px 13px ', borderBottom: '1px solid #E9E9E9' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={DeleteKeytoggleDrawer(false)}>
                  <KeyboardArrowLeft sx={{ color: '#667085' }} />
                </IconButton>
                <Typography
                  className='inter'
                  sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#667085' }}
                >
                  Delete Key
                </Typography>
                <Box></Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  textAlign: 'center',
                  mx: '15px'
                }}
              >
                <Box>
                  <Typography component={'img'} src='/assets/image/deletekey.svg' />
                </Box>
                <Typography
                  className='inter'
                  sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', color: '#160647' }}
                >
                  Are you sure you want to delete this KEY?
                </Typography>
                <Typography
                  className='inter'
                  sx={{ fontSize: '13px', fontWeight: '500', lineHeight: '20px', color: '#160647' }}
                >
                  Doing so will disrupt any existing connections. This action cannot be undone.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '10px', p: '20px ' }}>
              <Button
                disableRipple
                disableElevation
                variant='contained'
                className='inter'
                sx={{
                  width: '50%',
                  border: '1px solid #D0D5DD',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#344054',
                  background: '#fff',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#fff !important'
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                disableRipple
                disableElevation
                variant='contained'
                className='inter'
                sx={{
                  width: '50%',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#fff',
                  background: '#7F56D9',
                  '&.MuiButton-root:hover': {
                    backgroundColor: '#7F56D9 !important'
                  }
                }}
                onClick={DeleteSucesstoggleDrawer(true)}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Root>
      <DeleteKeySucessfullDrawer
        openDeleteSucess={openDeleteSucess}
        DeleteSucesstoggleDrawer={DeleteSucesstoggleDrawer}
      />
    </>
  )
}
export default DeleteKeyDrawer
