import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Switch,
  Typography
} from '@mui/material'
import React from 'react'
import GetInTouch from '@/components/getintouch'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Layout from '@/components/Layout/Layout'
import FooterBar from '@/components/footer'
import IOSSwitch from '@/components/IOSSwitch'

const index = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            pt: { xs: '100px', md: '200px' },
            mx: 'auto',
            position: 'relative',
            backgroundImage: "url('../assets/image/Hero Bg 1.png')",
            backgroundSize: 'cover'
          }}
        >
          <Container maxWidth={'xxl'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '20px',
                alignSelf: 'stretch'
              }}
            >
              <Typography
                component='p'
                sx={{
                  borderRadius: '16px',
                  background: '#F9F5FF',
                  color: '#6941C6',
                  padding: '4px 12px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Pricing plans
              </Typography>
              <Typography
                component='p'
                sx={{
                  fontSize: '48px',
                  fontWeight: '600',
                  color: '#42307D',
                  lineHeight: '60px',
                  letterSpacing: '-0.96px'
                }}
              >
                Plans for all sizes
              </Typography>
              <Typography
                component='p'
                sx={{
                  fontSize: '20px',
                  fontWeight: '400',
                  color: '#42307D',
                  lineHeight: '30px'
                }}
              >
                Streamline Your Lead Generation Process with Our Pricing Plans
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <IOSSwitch />
                <Typography
                  component='p'
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#42307D',
                    lineHeight: '24px',
                    pl: '10px'
                  }}
                >
                  Annual pricing{' '}
                  <Typography
                    component='span'
                    sx={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6941C6',
                      lineHeight: '24px'
                    }}
                  >
                    (save 20%)
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Container>
          <Container maxWidth={'xl'}>
            <Box sx={{ padding: '90px 0px', mx: 'auto' }}>
              <Grid container item spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      padding: '32px',
                      borderRadius: '16px 16px 0px 0px ',
                      border: '1px solid #EAECF0',
                      borderBottom: 'none',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                      background: '#FFF'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography component='img' sx={{ mb: '15px' }} src='/assets/image/startericon.png' />
                      <Typography
                        component='p'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#6941C6',
                          lineHeight: '30px',
                          mb: '15px'
                        }}
                      >
                        Starter
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '48px',
                          fontWeight: '600',
                          color: '#101828',
                          lineHeight: '60px',
                          letterSpacing: '-0.96px'
                        }}
                      >
                        $.0425{' '}
                        <Typography
                          component='span'
                          sx={{
                            fontSize: '24px',
                            fontWeight: '500',
                            color: '#6D648A',
                            lineHeight: '32px'
                          }}
                        >
                          /min
                        </Typography>
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: 'white',
                          lineHeight: '20px',
                          textAlign: 'center',
                          mb: '15px'
                        }}
                      >
                        n
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          maxWidth: '254px',
                          padding: '13px  20px',
                          borderRadius: '35px',
                          background: '#F9F5FF',
                          justifyContent: 'center',
                          fontSize: '13.714px',
                          fontWeight: '400',
                          color: '#6941C6',
                          lineHeight: '18.571px',
                          textAlign: 'center',
                          mb: '25px'
                        }}
                      >
                        1,000 Free Credits <br></br> for New Accounts
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          alignSelf: 'stretch',
                          alignItems: 'flex-start',
                          height: '300px'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Pay-As-You-Go
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Includes 1 User
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Unlimited Streams
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Conversation Analysis
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Reporting & Analytics
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Email Support
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: '#F9FAFB',
                      borderRadius: '0px 0px 16px 16px',
                      padding: '32px',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                    }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        background: '#7F56D9',
                        padding: '12px 40px',
                        borderRadius: '8px',
                        width: '100%',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      Get Started For Free
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      padding: '32px',
                      borderRadius: '16px 16px 0px 0px ',
                      border: '1px solid #EAECF0',
                      borderBottom: 'none',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                      background: '#FFF'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography sx={{ mb: '15px' }} component='img' src='/assets/image/business.png' />
                      <Typography
                        component='p'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#6941C6',
                          lineHeight: '30px',
                          mb: '15px'
                        }}
                      >
                        Business
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '48px',
                          fontWeight: '600',
                          color: '#101828',
                          lineHeight: '60px',
                          letterSpacing: '-0.96px'
                        }}
                      >
                        $.129{' '}
                        <Typography
                          component='span'
                          sx={{
                            fontSize: '24px',
                            fontWeight: '500',
                            color: '#6D648A',
                            lineHeight: '32px'
                          }}
                        >
                          /mo
                        </Typography>
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: 'black',
                          lineHeight: '20px',
                          textAlign: 'center',
                          mb: '15px'
                        }}
                      >
                        billed monthly
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          maxWidth: '254px',
                          padding: '13px  20px',
                          borderRadius: '35px',
                          background: '#F9F5FF',
                          justifyContent: 'center',
                          fontSize: '13.714px',
                          fontWeight: '400',
                          color: '#6941C6',
                          lineHeight: '18.571px',
                          textAlign: 'center',
                          mb: '25px'
                        }}
                      >
                        Best for SMB businesses <br></br> Includes 1,200 credits
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          alignSelf: 'stretch',
                          alignItems: 'flex-start',
                          height: '300px'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#6941C6'
                            }}
                          >
                            Everything in Starter
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            $.0325 per min.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Includes 3 Users
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Real-Time Transcription <br></br> *coming soon
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            API & Webhooks
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: '#F9FAFB',
                      borderRadius: '0px 0px 16px 16px',
                      padding: '32px',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                    }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        background: '#7F56D9',
                        padding: '12px 40px',
                        borderRadius: '8px',
                        width: '100%',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      padding: '32px',
                      borderRadius: '16px 16px 0px 0px ',
                      border: '1px solid #EAECF0',
                      borderBottom: 'none',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                      background: '#FFF'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography sx={{ mb: '15px' }} component='img' src='/assets/image/businessicon.png' />
                      <Typography
                        component='p'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#6941C6',
                          lineHeight: '30px',
                          mb: '15px'
                        }}
                      >
                        Agency
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '48px',
                          fontWeight: '600',
                          color: '#101828',
                          lineHeight: '60px',
                          letterSpacing: '-0.96px'
                        }}
                      >
                        $.349{' '}
                        <Typography
                          component='span'
                          sx={{
                            fontSize: '24px',
                            fontWeight: '500',
                            color: '#6D648A',
                            lineHeight: '32px'
                          }}
                        >
                          /mo
                        </Typography>
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: 'black',
                          lineHeight: '20px',
                          textAlign: 'center',
                          mb: '15px'
                        }}
                      >
                        billed monthly
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          maxWidth: '254px',
                          padding: '13px  20px',
                          borderRadius: '35px',
                          background: '#F9F5FF',
                          justifyContent: 'center',
                          fontSize: '13.714px',
                          fontWeight: '400',
                          color: '#6941C6',
                          lineHeight: '18.571px',
                          textAlign: 'center',
                          mb: '25px'
                        }}
                      >
                        Best for high volume agencies <br></br> Includes 2,400 credits
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          alignSelf: 'stretch',
                          alignItems: 'flex-start',
                          height: '300px'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#6941C6'
                            }}
                          >
                            Everything in Business
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            $.025 per min.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Includes 10 Users
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Live Chat Support
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: '#F9FAFB',
                      borderRadius: '0px 0px 16px 16px',
                      padding: '32px',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                    }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        background: '#7F56D9',
                        padding: '12px 40px',
                        borderRadius: '8px',
                        width: '100%',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      padding: '32px',
                      borderRadius: '16px 16px 0px 0px ',
                      border: '1px solid #EAECF0',
                      borderBottom: 'none',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                      background: '#FFF'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography component='img' sx={{ mb: '15px' }} src='/assets/image/enterprise.png' />
                      <Typography
                        component='p'
                        sx={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#6941C6',
                          lineHeight: '30px',
                          mb: '15px'
                        }}
                      >
                        Enterprise
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '48px',
                          fontWeight: '600',
                          color: '#101828',
                          lineHeight: '60px',
                          letterSpacing: '-0.96px'
                        }}
                      >
                        Call us{' '}
                        <Typography
                          component='span'
                          sx={{
                            fontSize: '24px',
                            fontWeight: '500',
                            color: '#6D648A',
                            lineHeight: '32px'
                          }}
                        ></Typography>
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: 'white',
                          lineHeight: '20px',
                          textAlign: 'center',
                          mb: '15px'
                        }}
                      >
                        n
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          maxWidth: '254px',
                          width: '100%',
                          padding: '13px  20px',
                          borderRadius: '35px',
                          background: '#F9F5FF',
                          justifyContent: 'center',
                          fontSize: '13.714px',
                          fontWeight: '400',
                          color: '#6941C6',
                          height: '33px',
                          textAlign: 'center',
                          mb: '25px'
                        }}
                      >
                        Need More? Let’s Talk!
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          alignSelf: 'stretch',
                          alignItems: 'flex-start',
                          height: '300px'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Unlimited Users
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Unlimited Streams
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Custom Reporting
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            API & Webhooks
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Custom AI Training
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '12px',
                            alignSelf: 'stretch',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Typography component='img' src='/assets/image/checkicon.svg' />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '400',
                              lineHeight: '24px',
                              color: '#475467'
                            }}
                          >
                            Dedicated Account Manager
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: '#F9FAFB',
                      borderRadius: '0px 0px 16px 16px',
                      padding: '32px',
                      boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
                    }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        background: '#7F56D9',
                        padding: '12px 40px',
                        borderRadius: '8px',
                        width: '100%',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      Book a Call
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container maxWidth={'xl'}>
            <Box
              sx={{
                display: 'flex',
                gap: '108px',
                padding: '64px',
                background: '#FFF',
                borderRadius: '16px',
                boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: { xs: 'wrap', sm: 'now' }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '600',
                    lineHeight: '38px',
                    color: '#101828'
                  }}
                >
                  Need Additional Minutes or Users?
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '30px',
                    color: '#475467'
                  }}
                >
                  Add more transcription minutes or user licenses to your subscription.
                </Typography>
              </Box>
              <Box>
                <Button
                  variant='contained'
                  sx={{
                    padding: '12px 28px',
                    borderRadius: '8px',
                    border: '1px solid #7F56D9',
                    fontSize: '18px',
                    background: '#7F56D9',
                    fontWeight: '600',
                    lineHeight: '28px'
                  }}
                >
                  Check Out Pricing
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container maxWidth={'lg'}>
            <Box sx={{ my: '100px' }}>
              <Typography
                component='p'
                sx={{
                  color: '#101828',
                  fontSize: '36px',
                  fontWeight: '600',
                  lineHeight: '44px',
                  textAlign: 'center',
                  letterSpacing: '-0.72px',
                  mb: '10px'
                }}
              >
                Frequently asked questions
              </Typography>
              <Typography
                component='p'
                sx={{
                  color: '#475467',
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '30px',
                  textAlign: 'center',
                  mb: '10px'
                }}
              >
                Everything you need to know about the product and billing.
              </Typography>

              <Box sx={{ my: '50px' }}>
                <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                  <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography>Is there a free trial available?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>No, there is no free trial available at this time.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                  <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                  >
                    <Typography>Can I change my plan later?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                  <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                  >
                    <Typography>What is your cancellation policy?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                  <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                  >
                    <Typography>How does billing work?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                  <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                  >
                    <Typography>Can I get a refund for the minutes I purchased?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                  <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                  >
                    <Typography>Do you offer bulk discounts on minutes?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      How does the integration process work, and what kind of support can new users expect during
                      onboarding and continuous usage?
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Container>
        </Box>

        <GetInTouch />

        <Box
          sx={{
            transform: 'translateY(35%)',
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Container maxWidth={'xl'}>
            <Box
              sx={{
                display: 'flex',
                gap: '108px',
                padding: '64px',
                background: '#FFF',
                borderRadius: '16px',
                boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '600',
                    lineHeight: '38px',
                    color: '#101828'
                  }}
                >
                  Create Your Free Account Today
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '30px',
                    color: '#475467'
                  }}
                >
                  Receive 60 minutes to try us out!
                </Typography>
              </Box>
              <Box>
                <Button
                  variant='contained'
                  sx={{
                    padding: '12px 77px',
                    borderRadius: '8px',
                    border: '1px solid #7F56D9',
                    fontSize: '18px',
                    background: '#7F56D9',
                    fontWeight: '600',
                    lineHeight: '28px'
                  }}
                >
                  Get started
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <FooterBar />
      </Layout>
    </>
  )
}

export default index
