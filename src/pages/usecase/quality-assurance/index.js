import Layout from '@/components/Layout/Layout'
import FooterBar from '@/components/footer'
import EastIcon from '@mui/icons-material/East'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: "url('../assets/image/Hero Bg 1.png')",
          backgroundSize: 'cover',
          maxHeight: { xs: '550px', md: '900px' },
          backgroundPosition: 'bottom'
        }}
      >
        <Container maxWidth={'xl'}>
          <Box
            sx={{
              pt: { xs: '150px', md: '200px' }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '707px',
                width: '100%',
                mx: 'auto',
                textAlign: 'center'
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: { xs: '30px', md: '48px' },
                  lineHeight: { xs: '44px', md: '68px' },
                  fontWeight: '700',
                  letterSpacing: '-0.96px',
                  color: '#000'
                }}
              >
                Elevate Your{' '}
                <Typography
                  className='inter'
                  component={'span'}
                  sx={{
                    fontSize: { xs: '30px', md: '48px' },
                    lineHeight: { xs: '44px', md: '68px' },
                    fontWeight: '700',
                    letterSpacing: '-0.96px',
                    color: '#7F56D9',
                    position: 'relative'
                  }}
                >
                  Quality Assurance
                  <Typography
                    component={'img'}
                    sx={{
                      position: 'absolute',
                      bottom: '-40%',
                      left: '0',
                      maxWidth: '100%'
                    }}
                    src='/assets/image/fency-underline.svg'
                  />
                </Typography>{' '}
                Game with CallDynamics AI
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  color: '#344054'
                }}
              >
                Revolutionize Call Audits and Enhance Efficiency in Your Quality Assurance Practices with Our
                Intelligent, AI-Powered Call Analytics Platform
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button
                  disableRipple
                  disableElevation
                  className='inter'
                  variant='contained'
                  sx={{
                    textTransform: 'capitalize',
                    padding: '17px 20px',
                    borderRadius: '12px',
                    background: '#7F56D9',
                    color: '#FFF',
                    fontSize: { sm: '11px', md: '20px' },
                    fontWeight: '500',
                    letterSpacing: { md: '-0.36px' }
                  }}
                >
                  Empower Your QA Team with CallDynamics AI Now!
                  <EastIcon sx={{ ml: '5px' }} />
                </Button>
              </Box>
              <Box
                sx={{
                  padding: '30px 10px',
                  background: '#7F56D9',
                  textAlign: 'center',
                  display: { xs: 'flex', sm: 'none' },
                  flexDirection: 'column',
                  gap: '13px'
                }}
              >
                <Typography
                  className='inter'
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '28px',
                    color: '#FFF',
                    letterSpacing: '-0.36px'
                  }}
                >
                  Unlock the Full Potential of Every Call with CallDynamics AI Today!
                </Typography>
                <Box>
                  <Button
                    className='inter'
                    variant='contained'
                    sx={{
                      background: '#FFF',
                      color: '#7F56D9',
                      textTransform: 'capitalize',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}
                  >
                    Get Started <EastIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Monumental Savings on Time and Financial Resources
           */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' },
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: '50px',
              gap: '80px'
            }}
          >
            <Box
              sx={{
                maxWidth: { lg: '616px' },
                width: { xs: '100%', sm: '65%' },
                mx: 'auto',
                order: { xs: '2', md: '1' }
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: '30px',
                  fontWeight: { xs: '600', md: '700' },
                  lineHeight: '38px',
                  color: '#101828',
                  pb: '20px'
                }}
              >
                Monumental Savings on Time and Financial Resources
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: { xs: '18px', md: '22px' },
                  fontWeight: { xs: '400', md: '500' },
                  lineHeight: '28px',
                  color: '#101828',
                  letterSpacing: '-0.36px',
                  pb: '20px'
                }}
              >
                Streamline Your QA Process and Achieve Cost-Effectiveness
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/shield-dollar-light.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Time and Cost Savings:
                    </Typography>{' '}
                    CallDynamics AI drastically reduces manual hours spent on call auditing, saving your team valuable
                    time and significantly reducing operational costs.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/star-light.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Streamlined Processes:
                    </Typography>{' '}
                    In the fast-paced world of QA, it is crucial to streamline processes for maximum efficacy. Our
                    platform automates transcription and analysis of call data, providing actionable insights promptly.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/file-icon.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Avoid Manual Audits:
                    </Typography>{' '}
                    Move away from the time-consuming process of manual audits with our platform that presents precise
                    and actionable insights swiftly.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                order: { xs: '1', md: '2' },
                position: 'relative',
                mx: 'auto  '
              }}
            >
              <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/qa-insights.svg' />
              <Typography
                component={'img'}
                sx={{
                  maxWidth: '100%',
                  position: 'absolute',
                  bottom: '23%',
                  right: '-5%',
                  width: '10%',
                  display: { xs: 'none', sm: 'block' }
                }}
                src='/assets/image/line.svg'
              />
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', display: { xs: 'none', lg: 'block' } }}>
            <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/path-progress.svg' />
          </Box>

          {/* Unparalleled Accuracy in Every Audit */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' },
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: '50px',
              gap: '80px'
            }}
          >
            <Box sx={{ mx: 'auto' }}>
              <Typography
                component={'img'}
                src='/assets/image/accuracy-mission.png'
                sx={{ maxWidth: '100%', display: { xs: 'block', sm: 'none' }, mx: 'auto' }}
              />
            </Box>
            <Box sx={{ maxWidth: '600px', width: '100%', mx: 'auto', display: { xs: 'none', sm: 'block' } }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '30px',
                  px: '10px'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <Typography
                    sx={{
                      fontSize: '17px',
                      fontWeight: '500',
                      color: '#475467',
                      textAlign: 'left'
                    }}
                  >
                    Accuracy Metrics
                  </Typography>
                  <Box
                    sx={{
                      padding: '12px 14px',
                      maxWidth: '250px',
                      width: '100%',
                      background: '#FFF',
                      borderRadius: '10px',
                      border: '0.8px solid #EAECF0',
                      boxShadow:
                        '0px 0.81353px 1.62706px 0px rgba(16, 24, 40, 0.06), 0px 0.81353px 2.44058px 0px rgba(16, 24, 40, 0.10)'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Typography component={'img'} src='/assets/image/target-green.svg' />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            color: '#475467'
                          }}
                        >
                          Average Accuracy Rate of Call Audits
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '30px',
                            fontWeight: '500',
                            color: '##101828'
                          }}
                        >
                          98%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      padding: '12px 14px',
                      maxWidth: '250px',
                      width: '100%',
                      background: '#FFF',
                      borderRadius: '10px',
                      border: '0.8px solid #EAECF0',
                      boxShadow:
                        '0px 0.81353px 1.62706px 0px rgba(16, 24, 40, 0.06), 0px 0.81353px 2.44058px 0px rgba(16, 24, 40, 0.10)'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Typography component={'img'} src='/assets/image/file-search.svg' />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            color: '#475467'
                          }}
                        >
                          Improvement in accuracy over manual audits
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '30px',
                            fontWeight: '500',
                            color: '##101828'
                          }}
                        >
                          25%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <Box
                    sx={{
                      padding: '40px 0px',
                      maxWidth: '156px',
                      width: '100%',
                      background: '#FFF',
                      borderRadius: '10px',
                      border: '0.8px solid #EAECF0',
                      boxShadow:
                        '0px 0.81353px 1.62706px 0px rgba(16, 24, 40, 0.06), 0px 0.81353px 2.44058px 0px rgba(16, 24, 40, 0.10)'
                    }}
                  >
                    <Typography
                      component={'img'}
                      sx={{
                        mx: 'auto',
                        justifyContent: 'center',
                        display: 'flex'
                      }}
                      src='/assets/image/target-circle.svg'
                    />
                  </Box>
                  <Typography
                    className='inter'
                    sx={{
                      fontSize: '17px',
                      fontWeight: '500',
                      textAlign: 'center',
                      color: '#475467'
                    }}
                  >
                    Error Reduction
                  </Typography>
                  <Box
                    sx={{
                      padding: '12px 14px',
                      maxWidth: '226px',
                      width: '100%',
                      background: '#FFF',
                      borderRadius: '10px',
                      border: '0.8px solid #EAECF0',
                      boxShadow:
                        '0px 0.81353px 1.62706px 0px rgba(16, 24, 40, 0.06), 0px 0.81353px 2.44058px 0px rgba(16, 24, 40, 0.10)'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/warning.svg' />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            color: '#475467'
                          }}
                        >
                          Reduction in errors compared to manual audits
                        </Typography>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '30px',
                            fontWeight: '500',
                            color: '##101828'
                          }}
                        >
                          30%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      padding: '12px 14px',
                      maxWidth: '226px',
                      width: '100%',
                      background: '#FFF',
                      borderRadius: '10px',
                      border: '0.8px solid #EAECF0',
                      boxShadow:
                        '0px 0.81353px 1.62706px 0px rgba(16, 24, 40, 0.06), 0px 0.81353px 2.44058px 0px rgba(16, 24, 40, 0.10)'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Typography component={'img'} src='/assets/image/file-check.svg' />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '13px',
                            fontWeight: '500',
                            color: '#475467'
                          }}
                        >
                          Number of error-free audits conducted
                        </Typography>
                        <Typography
                          className='inter'
                          sx={{
                            fontSize: '18px',
                            fontWeight: '500',
                            color: '#101828'
                          }}
                        >
                          <Typography
                            className='inter'
                            component={'span'}
                            sx={{
                              fontSize: '18px',
                              fontWeight: '500',
                              color: '#039855'
                            }}
                          >
                            9800
                          </Typography>{' '}
                          /10000
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: { lg: '616px' },
                width: { xs: '100%', sm: '65%' },
                mx: 'auto',
                px: '10px'
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: '30px',
                  fontWeight: '700',
                  lineHeight: '38px',
                  color: '#101828',
                  pb: '20px'
                }}
              >
                Unparalleled Accuracy in Every Audit
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  lineHeight: '28px',
                  color: '#101828',
                  letterSpacing: '-0.36px',
                  pb: '20px'
                }}
              >
                 Ensure Meticulous and Unerring Call Audits with AI Precision
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/target-success.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Accuracy is Key:
                    </Typography>{' '}
                    CallDynamics AI provides exceedingly accurate call audits through sophisticated AI analysis and
                    state-of-the-art transcription models.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/star-light.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Error-Free Insights:
                    </Typography>{' '}
                    Mitigate risks of human error, providing your QA team with in-depth, error-free insights from every
                    call.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/database.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Reliable Data:
                    </Typography>{' '}
                    With CallDynamics AI, rely on data that is unwaveringly precise and consistently reliable, guiding
                    your QA practices and decisions effectively.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', display: { xs: 'none', lg: 'block' } }}>
            <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/path-progress2.svg' />
          </Box>

          {/* The Future-Ready Solution for Call QA Teams */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' },
              justifyContent: 'space-between',
              alignItems: 'center',
              py: '50px',
              gap: '80px'
            }}
          >
            <Box
              sx={{
                maxWidth: { lg: '616px' },
                width: { xs: '100%', sm: '65%' },
                mx: 'auto',
                order: { xs: '2', md: '1' }
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: '30px',
                  fontWeight: '700',
                  lineHeight: '38px',
                  color: '#101828',
                  pb: '20px'
                }}
              >
                The Future-Ready Solution for Call QA Teams
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  lineHeight: '28px',
                  color: '#101828',
                  letterSpacing: '-0.36px',
                  pb: '20px'
                }}
              >
                Step into the Future of Quality Assurance with Intelligent Call Analysis
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/chevron-right-double.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Future-Ready QA:
                    </Typography>{' '}
                    CallDynamics AI is a future-ready ally for your QA team, extending beyond call transcription and
                    analysis.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/star-light.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Intelligent Data Utilization:
                    </Typography>{' '}
                    Predict trends, preempt issues, and employ forward-thinking strategies with intelligent data
                    utilization.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Box
                    sx={{
                      padding: '11.25px',
                      border: '0.8px solid #EAECF0',
                      backgroundColor: '#FFF',
                      borderRadius: '9.643px'
                    }}
                  >
                    <Typography component={'img'} src='/assets/image/rocket.svg' />
                  </Box>
                  <Typography
                    className='inter'
                    component={'p'}
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '24px',
                      color: '#344054'
                    }}
                  >
                    <Typography
                      className='inter'
                      component={'span'}
                      sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        color: '#101828'
                      }}
                    >
                      Stay Ahead:
                    </Typography>{' '}
                    Ensure your QA practices are perpetually at the forefront of technological and strategic
                    advancements with CallDynamics AI.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ order: { xs: '1', md: '2' }, mx: 'auto' }}>
              <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/qa-futrue-ready.svg' />
            </Box>
          </Box>
        </Container>
        <Box sx={{ padding: '100px 0px', background: '#F9FAFB  ' }}>
          <Container maxWidth={'xl'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '33.6px',
                textAlign: 'center'
              }}
            >
              <Typography
                className='inter'
                sx={{
                  fontSize: { xs: '30px', md: '40px' },
                  lineHeight: { xs: '41px', md: '63px' },
                  fontWeight: '500',
                  letterSpacing: '-0.8px',
                  color: '#101828'
                }}
              >
                Embark on a journey where every customer interaction becomes a stepping stone towards elevated
                strategies, secure operations, and continual e-commerce growth.{' '}
              </Typography>
              <Typography
                className='inter'
                sx={{
                  fontSize: '21px',
                  fontSize: '21px',
                  fontWeight: '400',
                  lineHeight: '35px',
                  color: '#475467'
                }}
              >
                Propel your brand forward, ensuring your online storefront not only meets but anticipates, adapts, and
                shapes the demands of the digital marketplace, securing your position as a formidable e-commerce entity.
              </Typography>
              <Box>
                <Button
                  variant='contained'
                  className='inter'
                  sx={{
                    padding: '17px 33.141px',
                    borderRadius: '8px',
                    backgroundColor: '#7F56D9',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '24px',
                    color: '#FFF',
                    textTransform: 'capitalize'
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <FooterBar />
      </Box>
    </Layout>
  )
}

export default index
