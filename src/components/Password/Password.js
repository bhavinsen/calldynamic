import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ChangePasswordDrawer from '../ChangePasswordDrawer'

const Password = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
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
            Password
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
            Please enter your current password or if you forgot your password click here.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          py: '20px',
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: '10px', sm: '0px' },
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '315px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            Current password
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
              type='password'
              autoComplete='off'
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
      <Box
        sx={{
          py: '20px',
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: '10px', sm: '0px' },
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '315px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            New password
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
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
              background: '#fff'
            }}
          >
            <Typography
              className='inter'
              component={'input'}
              type='password'
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
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            Your new password must be more than 8 characters.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          py: '20px',
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: { xs: '10px', sm: '0px' },
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '315px', width: '100%' }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            Confirm new password
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
              type='password'
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
      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            py: '20px'
          }}
        >
          <Button
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
              color: '#344054'
            }}
          >
            Cancle
          </Button>
          <Button
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
              background: '#7F56D9'
            }}
            onClick={toggleDrawer(true)}
          >
            Update password
          </Button>
        </Box>
      </Box>
      <ChangePasswordDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default Password
