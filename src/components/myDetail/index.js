import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const MyDetail = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = event => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    console.log('🚀 ~ handleFileChange ~ selectedFile:', selectedFile)
  }

  const handleUploadClick = () => {
    document.getElementById('fileInput').click()
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid #EAECF0',
          pb: '20px',
          gap: { xs: '20px', sm: '0px' }
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
            Personal Info
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
            Update your photo and personal details here.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '12px' }}>
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
          >
            save
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          py: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          borderBottom: '1px solid #EAECF0'
        }}
      >
        <Box sx={{ maxWidth: '315px', width: '100%', display: { xs: 'none', md: 'block' } }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            Name
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            gap: { xs: '10px', md: '25px' },
            maxWidth: '637px',
            width: '100%'
          }}
        >
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Typography
              className='inter'
              sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
            >
              First Name
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '10px 14px',
              border: '1px solid #D0D5DD',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              pr: '5px',
              background: '#fff',
              width: { xs: '100%', md: '50%' }
            }}
          >
            <Typography
              className='inter'
              component={'input'}
              placeholder='First Name'
              sx={{
                width: '100%',
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
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Typography
              className='inter'
              sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#344054' }}
            >
              Last Name
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '10px 14px',
              border: '1px solid #D0D5DD',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              pr: '5px',
              background: '#fff',
              width: { xs: '100%', md: '50%' }
            }}
          >
            <Typography
              className='inter'
              component={'input'}
              placeholder={'Last Name'}
              sx={{
                width: '100%',
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
          flexWrap: 'wrap',
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
            Email address
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
              placeholder='E-mail'
              sx={{
                width: '100%',
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
          gap: { xs: '20px', sm: '0px' },
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
            Your photo
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
            This will be displayed on your profile.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            maxWidth: '640px',
            width: '100%'
          }}
        >
          <Box sx={{ width: '64px', height: '64px', borderRadius: '100%', display: { xs: 'none', sm: 'block' } }}>
            <Typography component={'img'} src={'/assets/image/userphoto.png'} />
          </Box>
          <Box
            sx={{
              padding: '16px 24px',
              backgroundColor: '#fff',
              border: '1px solid #EAECF0',
              borderRadius: '12px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }}>
                <Typography
                  component={'img'}
                  sx={{ maxWidth: '100%' }}
                  src={file ? URL.createObjectURL(file) : '/assets/image/userphoto.png'}
                />
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
                <Typography
                  component={'img'}
                  sx={{ maxWidth: '100%' }}
                  src={file ? URL.createObjectURL(file) : '/assets/image/userphoto.png'}
                />
              </Box>
              <Box sx={{ display: { xs: 'flex', sm: 'none', justifyContent: 'center' } }}>
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
                  onClick={handleUploadClick}
                >
                  Change Photo
                </Button>
              </Box>
              <Typography
                component={'input'}
                type='file'
                id='fileInput'
                sx={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <Typography
                component={'p'}
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#6941C6',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onClick={handleUploadClick}
              >
                Click to upload{' '}
                <Typography
                  component={'span'}
                  sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                    color: '#475467'
                  }}
                >
                  or drag and drop
                </Typography>
                {/* <Typography component={'span'} sx={{ ml: '10px' }}>
                  {file?.name}
                </Typography> */}
              </Typography>
              <Typography
                component={'p'}
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '18px',
                  color: '#475467'
                }}
              >
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography>
            </Box>
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
        <Box sx={{ maxWidth: '315px', width: '100%', display: { xs: 'block', sm: 'none' } }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            Role
          </Typography>
        </Box>
        <Box sx={{ maxWidth: '315px', width: '100%', display: { xs: 'none', sm: 'block' } }}>
          <Typography
            className='inter'
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#344054'
            }}
          >
            Title
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
              placeholder='Product Designer'
              sx={{
                width: '100%',
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
            Country
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
            <Typography component={'img'} src='/assets/image/AU.svg' />
            <Typography
              className='inter'
              component={'input'}
              placeholder='Australia'
              sx={{
                width: '100%',
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
            Timezone
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
            <Typography component={'img'} src='/assets/image/clock.svg' />
            <Typography
              className='inter'
              component={'input'}
              placeholder='Pacific Standard Time (PST) UTC−08:00'
              sx={{
                width: '100%',
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
          >
            save
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default MyDetail
