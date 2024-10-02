import { AppBar, Box, Button, Container, Fade, Grid, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SegmentIcon from '@mui/icons-material/Segment'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useCaseRouteList = [
  {
    id: 1,
    icon: '/assets/image/call.svg',
    title: 'Call Center Agents',
    subTitle: 'Streamline Your Calls with Real-Time Transcription',
    path: '/usecase/center-agent'
  },
  {
    id: 2,
    icon: '/assets/image/leadgen.svg',
    title: 'Lead Generation Agencies',
    subTitle: 'Identify More Opportunities with Trigger Word Analysis',
    path: '/usecase/lead-generation'
  },
  {
    id: 3,
    icon: '/assets/image/E-com.svg',
    title: 'E-commerce Brands',
    subTitle: 'Optimize Your Customer Experience with Voice Analytics',
    path: '/usecase/ecommerce'
  },
  {
    id: 4,
    icon: '/assets/image/qualitysearch.svg',
    title: 'Quality Assurance Teams',
    subTitle: 'Improve Your Quality Control with Real-Time Monitoring',
    path: '/usecase/quality-assurance'
  }
]

const indriesRouteList = [
  {
    id: 1,
    icon: '/assets/image/handle.svg',
    title: 'Health Insurance',
    subTitle: 'ACA, short-term, & indemnity health insurance services.',
    path: '/industries/health-insurance'
  },
  {
    id: 2,
    icon: '/assets/image/home.svg',
    title: 'Home Services',
    subTitle: 'Home maintenance, repair, & installation services.',
    path: '/industries/home-service'
  },
  {
    id: 3,
    icon: '/assets/image/medicare.svg',
    title: 'Medicare & SSDI',
    subTitle: 'Government managed health benefits programs.',
    path: '/industries/medicare-SSDI'
  },
  {
    id: 4,
    icon: '/assets/image/mass.svg',
    title: 'Mass Tort',
    subTitle: 'Joint lawsuits for harm or injuries in class action cases.',
    path: '/industries/mass-tort'
  },
  {
    id: 5,
    icon: '/assets/image/debt.svg',
    title: 'Debt Relief',
    subTitle: 'Unsecured & tax debt reduction services.',
    path: '/industries/debt-relief'
  },
  {
    id: 6,
    icon: '/assets/image/customise.svg',
    title: 'Customizable',
    subTitle: 'Train calldynamics.ai to meet your unique requirements.',
    path: '/industries/customizable'
  }
]

const LoginHeader = ({ isCollapsed, setIsCollapsed }) => {
  const [isNavScroll, setIsNavScroll] = useState(false)

  const router = useRouter()

  const handleScroll = () => {
    if (window?.scrollY > 0) {
      setIsNavScroll(true)
    } else {
      setIsNavScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [anchorEls, setAnchorEls] = useState(null)
  const opens = Boolean(anchorEls)
  const handleClicks = event => {
    setAnchorEls(event.currentTarget)
  }
  const handleCloses = () => {
    setAnchorEls(null)
  }

  return (
    <AppBar
      sx={{
        backgroundColor: isNavScroll ? '#fff' : 'transparent',
        boxShadow: isNavScroll
          ? '0px 3.721px 5.582px -1.861px rgba(16, 24, 40, 0.03), 0px 11.164px 14.885px -3.721px rgba(16, 24, 40, 0.08)'
          : 'none',
        padding: '12px 0px'
      }}
    >
      <Box maxWidth={'1536px'} width={'100%'} sx={{ mx: 'auto' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography component={Link} href='/' sx={{ alignItems: 'center', cursor: 'pointer' }}>
            <Typography component={'img'} src='../assets/image/logo.svg' alt='' />
          </Typography>
          <Box sx={{ alignItems: 'center', display: { xs: 'none', md: 'block' } }}>
            <Typography
              className='inter'
              component='ul'
              sx={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}
            >
              <Typography component='li' className='inter' sx={{ padding: '0px 10px' }}>
                <Typography
                  className='inter'
                  component='a'
                  id='fade-button'
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{
                    color: '#160647',
                    alignItems: 'center',
                    display: 'flex',
                    fontWeight: '450',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}
                >
                  Use Case <KeyboardArrowDownIcon />
                </Typography>
                <Box sx={{}}>
                  <Menu
                    id='fade-menu'
                    MenuListProps={{
                      'aria-labelledby': 'fade-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    PaperProps={{
                      sx: {
                        borderRadius: '16px',
                        boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        padding: '24px 20px 20px 20px',
                        display: 'flex',
                        flexDirection: 'column',

                        alignItems: 'flex-start',
                        borderRadius: '24px !important'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '12px',
                          flex: '1 1 0'
                        }}
                      >
                        <Typography
                          className='inter'
                          component='p'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            color: '#7F56D9'
                          }}
                        >
                          Use cases
                        </Typography>
                        <Grid container spacing={2} rowGap={2} sx={{ maxWidth: '630px' }}>
                          {useCaseRouteList.map((item, index) => {
                            return (
                              <Grid item xs={6} key={index} onClick={() => router.push(item.path)}>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      backgroundColor: '#F4EBFF',
                                      width: '26px',
                                      height: '26px',
                                      padding: '12px',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      borderRadius: '24px'
                                    }}
                                  >
                                    <Typography component='img' src={item.icon} />
                                  </Box>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'column'
                                    }}
                                  >
                                    <Typography
                                      className='inter'
                                      component='p'
                                      sx={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#101828',
                                        lineHeight: '24px'
                                      }}
                                    >
                                      {item.title}
                                    </Typography>
                                    <Typography
                                      className='inter'
                                      component='p'
                                      sx={{
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        color: '#475467'
                                      }}
                                    >
                                      {item.subTitle}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                            )
                          })}
                        </Grid>
                        <Box
                          sx={{
                            background: '#F9FAFB',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '28px 32px',
                            borderRadius: '6px',
                            maxWidth: '100%',
                            alignSelf: 'stretch'
                          }}
                        >
                          <Button
                            variant='text'
                            sx={{
                              fontSize: '16px',
                              fontWeight: '600',
                              lineHeight: '24px',
                              color: '#6941C6',
                              textTransform: 'capitalize'
                            }}
                          >
                            Sign up for free
                          </Button>
                          <Button sx={{ textTransform: 'capitalize' }}>
                            <Typography component='img' src='/assets/image/chat.svg' />
                            <Typography
                              className='inter'
                              component='p'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                color: '#6941C6',
                                pl: '8px'
                              }}
                            >
                              Chat with sales
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Menu>
                </Box>
              </Typography>
              <Typography component='li' className='inter' sx={{ padding: '0px 10px' }}>
                <Typography
                  component='a'
                  className='inter'
                  id='fade-buttons'
                  aria-aria-controls={opens ? 'fade-menus' : undefined}
                  aria-haspopup='true'
                  aria-expanded={opens ? 'true' : undefined}
                  onClick={handleClicks}
                  PaperProps={{
                    sx: {
                      borderRadius: '16px',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                    }
                  }}
                  sx={{
                    color: '#160647',
                    alignItems: 'center',
                    display: 'flex',
                    fontWeight: '450',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}
                >
                  Industries <KeyboardArrowDownIcon />
                </Typography>
                <Box sx={{}}>
                  <Menu
                    id='fade-menus'
                    MenuListProps={{
                      'aria-labelledby': 'fade-buttons'
                    }}
                    anchorEl={anchorEls}
                    open={opens}
                    onClose={handleCloses}
                    TransitionComponent={Fade}
                    PaperProps={{
                      sx: {
                        borderRadius: '16px',
                        boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        padding: '24px 20px 20px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        borderRadius: '24px !important'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '12px',
                          flex: '1 1 0'
                        }}
                      >
                        <Typography
                          className='inter'
                          component='p'
                          sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            color: '#7F56D9'
                          }}
                        >
                          Industries
                        </Typography>
                        <Grid container spacing={2} rowGap={2} sx={{ maxWidth: '630px' }}>
                          {indriesRouteList.map((item, index) => {
                            return (
                              <Grid item xs={6} key={index} onClick={() => router.push(item.path)}>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <Box
                                    sx={{
                                      backgroundColor: '#F4EBFF',
                                      width: '26px',
                                      height: '26px',
                                      padding: '12px',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      borderRadius: '24px'
                                    }}
                                  >
                                    <Typography component='img' src={item.icon} />
                                  </Box>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'column'
                                    }}
                                  >
                                    <Typography
                                      className='inter'
                                      component='p'
                                      sx={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#101828',
                                        lineHeight: '24px'
                                      }}
                                    >
                                      {item.title}
                                    </Typography>
                                    <Typography
                                      className='inter'
                                      component='p'
                                      sx={{
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        color: '#475467'
                                      }}
                                    >
                                      {item.subTitle}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                            )
                          })}
                        </Grid>
                        <Box
                          sx={{
                            background: '#F9FAFB',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '28px 32px',
                            borderRadius: '6px',
                            maxWidth: '100%',
                            alignSelf: 'stretch'
                          }}
                        >
                          <Button
                            variant='text'
                            sx={{
                              fontSize: '16px',
                              fontWeight: '600',
                              lineHeight: '24px',
                              color: '#6941C6',
                              textTransform: 'capitalize'
                            }}
                          >
                            Sign up for free
                          </Button>
                          <Button sx={{ textTransform: 'capitalize' }}>
                            <Typography component='img' src='/assets/image/chat.svg' />
                            <Typography
                              className='inter'
                              component='p'
                              sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                color: '#6941C6',
                                pl: '8px'
                              }}
                            >
                              Chat with sales
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Menu>
                </Box>
              </Typography>
              <Typography component='li' className='inter' sx={{ padding: '0px 10px' }}>
                <Typography
                  className='inter'
                  component={Link}
                  href='/pricing'
                  sx={{
                    color: '#160647',
                    alignItems: 'center',
                    display: 'flex',
                    fontWeight: '450',
                    fontSize: '20px',
                    textDecoration: 'none'
                  }}
                >
                  Pricing
                </Typography>
              </Typography>
              <Typography component='li' className='inter' sx={{ padding: '0px 10px' }}>
                <Typography
                  className='inter'
                  component={Link}
                  href='/aboutus'
                  sx={{
                    color: '#160647',
                    alignItems: 'center',
                    display: 'flex',
                    fontWeight: '450',
                    fontSize: '20px',
                    textDecoration: 'none'
                  }}
                >
                  About Us
                </Typography>
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '48px' }}>
            <Typography
              className='inter'
              component={Link}
              href='/signup'
              sx={{
                color: '#160647',
                alignItems: 'center',
                display: 'flex',
                fontWeight: '450',
                fontSize: '20px',
                textDecoration: 'none'
              }}
            >
              Sign up
            </Typography>
          </Box>
          <Box
            sx={{
              color: 'black',
              display: { xs: 'block', md: 'none' },
              p: '7px 10px',
              background: '#FFF',
              borderRadius: '8px'
            }}
          >
            <SegmentIcon
              onClick={() => {
                setIsCollapsed(!isCollapsed)
              }}
            />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default LoginHeader
