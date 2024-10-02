import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Box
        component='div'
        sx={{
          display: { xs: 'block', md: 'none' },
          left: `${isCollapsed ? '0px' : '-100%'} `,
          maxWidth: '100%',
          top: '0',
          bottom: '0',
          position: 'fixed',
          background: '#FFF',
          zIndex: '4000',
          boxShadow:
            '0px 3.721px 5.582px -1.861px rgba(16, 24, 40, 0.03), 0px 11.164px 14.885px -3.721px rgba(16, 24, 40, 0.08)',
          transition: 'all 0.5s'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            m: '20px'
          }}
        >
          <Typography component='img' src='/assets/image/logo.svg' sx={{ width: '180px' }} />
          <Typography component='a' className='inter' color={'black'} sx={{}}>
            <CloseIcon
              onClick={() => {
                setIsCollapsed(false)
              }}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            my: '20px'
          }}
        >
          <Typography
            className='inter'
            component='li'
            sx={{
              listStyle: 'none',
              py: '10px',
              pl: '16px',
              fontSize: '20px',
              fontWeight: '500'
            }}
          >
            Home
          </Typography>
          <Accordion
            disableGutters
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{
              boxShadow: 'none',
              border: 'none',
              borderBottom: 'none !important'
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
              <Typography
                className='inter'
                component='p'
                sx={{
                  listStyle: 'none',
                  fontSize: '20px',
                  fontWeight: '500',
                  alignItems: 'center'
                }}
              >
                Use Cases
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    Call Center Agents
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    Lead Generation Agencies
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    E-commerce Brands
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    {' '}
                    Quality Assurance Teams
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{
              boxShadow: 'none',
              '&:not(:last-child)': {
                borderBottom: 0
              },
              '&::before': {
                display: 'none'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2-content'
              id='panel2-header'
              sx={{ margin: '0px 0px !important' }}
            >
              <Typography
                className='inter'
                component='p'
                sx={{
                  listStyle: 'none',
                  fontSize: '20px',
                  fontWeight: '500',
                  alignItems: 'center'
                }}
              >
                Industries
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    Health Insurance
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    Home Services
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>
                    Medicare & SSDI
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}> Mass Tort</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>Debt Relief</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '30px' }}>Customizable</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              className='inter'
              component='p'
              sx={{
                listStyle: 'none',
                py: '10px',
                pl: '20px',
                fontSize: '20px',
                fontWeight: '500',
                alignItems: 'center'
              }}
            >
              Use Cases
            </Typography>
            <KeyboardArrowDownIcon sx={{ mr: '10px' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              className='inter'
              component='p'
              sx={{
                listStyle: 'none',
                py: '10px',
                pl: '20px',
                fontSize: '20px',
                fontWeight: '500',
                alignItems: 'center'
              }}
            >
              Industries
            </Typography>
            <KeyboardArrowDownIcon sx={{ mr: '10px' }} />
          </Box> */}
          <Typography
            component='li'
            className='inter'
            sx={{
              listStyle: 'none',
              py: '10px',
              pl: '16px',
              fontSize: '20px',
              fontWeight: '500'
            }}
          >
            pricing
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ m: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className='inter' component='p' sx={{ fontSize: '17px', color: 'gray', fontWeight: '500' }}>
                About us
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className='inter' component='p' sx={{ fontSize: '17px', color: 'gray', fontWeight: '500' }}>
                Support
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className='inter' component='p' sx={{ fontSize: '17px', color: 'gray', fontWeight: '500' }}>
                Press
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className='inter' component='p' sx={{ fontSize: '17px', color: 'gray', fontWeight: '500' }}>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className='inter' component='p' sx={{ fontSize: '17px', color: 'gray', fontWeight: '500' }}>
                Legal
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className='inter' component='p' sx={{ fontSize: '17px', color: 'gray', fontWeight: '500' }}>
                Cookie Settings
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ m: '10px' }}>
          <Button
            className='inter'
            variant='contained'
            sx={{
              width: '100%',
              background: '#7F56D9',
              fontSize: '16px',
              fontWeight: '600',
              textTransform: 'capitalize'
            }}
          >
            Sign up
          </Button>
        </Box>
        <Box sx={{ m: '10px' }}>
          <Button
            href='/login'
            className='inter'
            variant='outlined'
            sx={{
              width: '100%',
              fontSize: '16px',
              fontWeight: '600',
              textTransform: 'capitalize'
            }}
          >
            Log In{' '}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: `${isCollapsed ? 'block' : 'none'}`,
          position: 'fixed',
          inset: '0px',
          transition: 'all 0.2s',
          zIndex: '300'
        }}
        onClick={() => {
          setIsCollapsed(false)
        }}
      ></Box>
    </>
  )
}

export default Sidebar
