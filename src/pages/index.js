import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Slider from 'react-slick'
import FooterBar from '@/components/footer'
import GetInTouch from '@/components/getintouch'
import Layout from '@/components/Layout/Layout'

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  }

  return (
    <Layout>
      {/* Say ‘goodbye’ */}
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
          <Typography
            component='h3'
            className='inter'
            sx={{
              fontSize: { xs: '35px', sm: '66px' },
              color: '#160647',
              fontWeight: '700',
              textAlign: 'center',
              lineHeight: { xs: '49.979px', sm: '77.268px' }
            }}
          >
            Say ‘goodbye’ to manual <br />
            <Typography
              component='span'
              className='inter'
              sx={{
                color: '#7F56D9',
                fontSize: { xs: '35px', sm: '66px' },
                fontWeight: '700',
                lineHeight: { xs: '49.979px', sm: '77.268px' }
              }}
            >
              call quality assurance{' '}
            </Typography>
          </Typography>
          <Typography
            component='p'
            className='inter'
            sx={{
              fontSize: '20.71px',
              fontWeight: '450',
              lineHeight: '28.812px',
              color: '#160647',
              textAlign: 'center',
              mt: '30px'
            }}
          >
            Get your free account today
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              mx: 'auto',
              mt: '18px'
            }}
          >
            <Button
              disableRipple
              variant='contained'
              className='inter'
              sx={{
                backgroundColor: '#160647',
                textTransform: 'capitalize',
                padding: '12px 20px',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px'
              }}
            >
              <Typography
                component='img'
                variant='button'
                src='../assets/image/google.svg'
                sx={{ marginRight: '8px' }}
              />
              Sign up with Google
            </Button>
            <Typography
              className='inter'
              sx={{
                color: '76838F',
                fontSize: '15px',
                fontWeight: '500',
                lineHeight: '22.5px',
                display: { xs: 'none', md: 'block' }
              }}
            >
              Or
            </Typography>
            <Button
              variant='contained'
              className='inter'
              sx={{
                backgroundColor: '#7F56D9',
                padding: '12px 20px',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px',
                textTransform: 'capitalize'
              }}
            >
              Sign up with email
              <EastIcon />
            </Button>
          </Box>
          <Box sx={{}}>
            <Typography
              component='img'
              src='/assets/image/home-page.png'
              alt=''
              sx={{
                maxWidth: '80%',
                display: { xs: 'none', md: 'block' },
                mx: 'auto'
              }}
            />
            <Typography
              component='img'
              src='/assets/image/mobile-preview.png'
              alt=''
              sx={{
                maxWidth: '100%',
                display: { xs: 'block', md: 'none' },
                mx: 'auto'
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Trusted across industries */}
      <Box>
        <Container maxWidth={'xxl'}>
          <Box>
            <Typography
              component='p'
              className='inter'
              sx={{
                textAlign: 'center',
                fontSize: '22.397px',
                fontWeight: '600',
                lineHeight: '39.092px',
                letterSpacing: '1.073px',
                color: '#000000',
                my: '80px'
              }}
            >
              Trusted across industries
            </Typography>
            <Grid container justifyContent={'center'} gap={2}>
              <Grid xs={3} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component='img' src='/assets/image/substract.svg' sx={{ maxWidth: '100%' }} />
              </Grid>
              <Grid xs={3} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component='img' src='/assets/image/s-app.svg' sx={{ maxWidth: '100%' }} />
              </Grid>
              <Grid xs={3} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component='img' src='/assets/image/group41.svg' sx={{ maxWidth: '100%' }} />
              </Grid>
              <Grid xs={3} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component='img' src='/assets/image/group18.svg' sx={{ maxWidth: '100%' }} />
              </Grid>
              <Grid xs={3} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component='img' src='/assets/image/group14.svg' sx={{ maxWidth: '100%' }} />
              </Grid>
              <Grid xs={3} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component='img' src='/assets/image/groupX.svg' sx={{ maxWidth: '100%' }} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CallDynamics AI*/}
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Container maxWidth={''}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'relative',
              mt: '50px'
            }}
          >
            <Typography
              component='img'
              src='/assets/image/trustotherbg.png'
              sx={{ maxWidth: '100%', display: { sm: 'none', md: 'block' } }}
            />
            <Box
              sx={{
                position: 'absolute',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                top: { sm: '10%', lg: '20%' }
              }}
            >
              <Typography
                component={'p'}
                className='inter'
                sx={{
                  maxWidth: {
                    sm: '590px',
                    md: '700px',
                    lg: '660px',
                    xl: '650px'
                  },
                  fontSize: { sm: '30px', lg: '32.199px' },
                  fontWeight: '450',
                  lineHeight: { sm: '30px', lg: '55.136px' },
                  color: '#160647'
                }}
              >
                Introducing{' '}
                <Typography
                  className='inter'
                  component='span'
                  sx={{
                    fontSize: { sm: '25px', lg: '32.199px' },
                    fontWeight: '450',
                    lineHeight: { sm: '30px', lg: '55.136px' },
                    background: '-webkit-linear-gradient(90deg, #4759DD -15.42%, #F068E7 115.02%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  CallDynamics AI,
                </Typography>{' '}
                the ultimate solution for{' '}
                <Typography
                  component='span'
                  sx={{
                    fontStyle: 'italic',
                    fontSize: { sm: '30px', lg: '32.199px' },
                    fontWeight: '450',
                    lineHeight: '55.  136px'
                  }}
                  className='pt'
                >
                  “automating quality assurance”
                </Typography>{' '}
                in your lead generation process.
              </Typography>
              <Typography
                sx={{
                  display: { sm: 'none', lg: 'block' },
                  borderRight: '2px solid white',
                  height: '147px',
                  mx: '20px'
                }}
              ></Typography>
              <Typography
                className='inter'
                sx={{
                  display: { sm: 'none', lg: 'block' },
                  maxWidth: '456px',
                  fontSize: '19.241px',
                  fontWeight: '450',
                  color: 'white'
                }}
              >
                CallDynamics AI transcribes and analyzes your audio files to determine if a human audit is needed.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: '30px' }}>
        <Container maxWidth={'xs'}>
          <Box sx={{ position: 'relative' }}>
            <Typography
              component='img'
              src='/assets/image/calldynamic.png'
              sx={{ position: 'relative', maxWidth: '100%' }}
            />
            <Box sx={{ position: 'absolute', top: '10%', left: '10%' }}>
              <Typography
                className='inter'
                component='p'
                sx={{
                  maxWidth: '334px',
                  fontSize: '20.2px',
                  fontWeight: '450',
                  lineHeight: '27.136px',
                  color: '#160647'
                }}
              >
                Introducing{' '}
                <Typography
                  className='inter'
                  component='span'
                  sx={{
                    fontSize: '20.02px',
                    fontWeight: '700',
                    lineHeight: '27.136px',
                    background: '-webkit-linear-gradient(90deg, #4759DD -15.42%, #F068E7 115.02%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  CallDynamics
                </Typography>{' '}
                AI, the ultimate solution for “automating quality assurance” in your lead generation process.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* {How it works} */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth={'xl'}>
          <Typography
            sx={{
              fontSize: '44.27px',
              fontWeight: '700',
              letterSpacing: '-1.5px',
              textAlign: 'center',
              mt: { xs: '100px', sm: '240px', md: '120px' },
              mb: '50px'
            }}
            className='inter'
          >
            How it works
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Typography
              component='img'
              src='/assets/image/line .svg'
              sx={{
                position: 'absolute',
                top: '300px',
                left: '30%',
                display: { xs: 'none', md: 'none', lg: 'block' }
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexWrap: { sm: 'wrap', md: 'nowrap' },
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: { md: 'center', xl: 'space-around' }
              }}
            >
              <Box sx={{ width: '50%' }}>
                <Typography
                  component='img'
                  src='/assets/image/upload.png'
                  sx={{
                    zIndex: '10',
                    maxWidth: '100%',
                    boxShadow: 'rgba(132, 125, 238, 0.2) 0px 3.33607px 65.8873px 0px',
                    borderRadius: '18px',
                    mx: 'auto'
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  ml: '50px',
                  alignItems: 'center',
                  maxWidth: '400px'
                }}
              >
                <Typography component='img' src='/assets/image/1.png' sx={{ width: '38px', height: '38px' }} />
                <Box className='inter' sx={{ ml: '10px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      color: '#160647',
                      fontSize: '24px',
                      fontWeight: '500'
                    }}
                  >
                    Upload{' '}
                    <Typography component='span' sx={{ color: '#BEB9CE', fontSize: '24px' }}>
                      your
                    </Typography>{' '}
                    <Typography className='inter' component='span' sx={{ color: '#5554CB', fontSize: '24px' }}>
                      audio file(s)
                    </Typography>
                  </Typography>
                  <Typography
                    className='inter'
                    component='p'
                    sx={{
                      color: '#988DBA',
                      fontSize: '20.74px',
                      fontWeight: '400',
                      lineHeight: '29.397px'
                    }}
                  >
                    Simply upload the call recording you'd like to analyze.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: { md: 'center', xl: 'space-around' },
                mt: '100px'
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  maxWidth: '500px'
                }}
              >
                <Typography component='img' src='/assets/image/2.png' sx={{ width: '38px', height: '38px' }} />
                <Box className='inter' sx={{ ml: '10px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      color: '#160647',
                      fontSize: '24px',
                      fontWeight: '500'
                    }}
                  >
                    Transcription
                  </Typography>
                  <Typography
                    className='inter'
                    component='p'
                    sx={{
                      color: '#988DBA',
                      fontSize: '20.74px',
                      fontWeight: '400',
                      lineHeight: '29.397px'
                    }}
                  >
                    CallDynamics AI transcribes the audio file into a text document.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: '50%', zIndex: '10' }}>
                <Typography
                  component='img'
                  src='/assets/image/transcription.png'
                  sx={{
                    zIndex: '10',
                    maxWidth: '100%',
                    boxShadow: 'rgba(132, 125, 238, 0.2) 0px 3.33607px 65.8873px 0px',
                    borderRadius: '18px'
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: { md: 'center', xl: 'space-evenly' },
                mt: '50px'
              }}
            >
              <Box sx={{ width: '50%', zIndex: '10' }}>
                <Typography
                  component='img'
                  src='/assets/image/analysis.png'
                  sx={{
                    zIndex: '10',
                    maxWidth: '100%',
                    boxShadow: 'rgba(132, 125, 238, 0.2) 0px 3.33607px 65.8873px 0px',
                    borderRadius: '18px'
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: { md: 'center', lg: 'flex-start' },
                  ml: '20px',
                  mt: '30px',
                  maxWidth: '500px',
                  width: '50%'
                }}
              >
                <img src='/assets/image/3.png' style={{ width: '38px', height: '38px' }} />
                <Box className='inter' sx={{ ml: '10px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      color: '#160647',
                      fontSize: '24px',
                      fontWeight: '500'
                    }}
                  >
                    Analysis
                  </Typography>
                  <Typography
                    className='inter'
                    component='p'
                    sx={{
                      color: '#988DBA',
                      fontSize: '20.74px',
                      fontWeight: '400',
                      lineHeight: '29.397px'
                    }}
                  >
                    CallDynamics AI transcribes the audio file into a text document.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: { md: 'center', xl: 'space-around' },
                mt: '80px'
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  maxWidth: '500px'
                }}
              >
                <img src='/assets/image/4.png' style={{ width: '38px', height: '38px' }} />
                <Box className='inter' sx={{ ml: '10px' }}>
                  <Typography
                    className='inter'
                    sx={{
                      color: '#160647',
                      fontSize: '24px',
                      fontWeight: '500'
                    }}
                  >
                    Results
                  </Typography>
                  <Typography
                    className='inter'
                    component='p'
                    sx={{
                      color: '#988DBA',
                      fontSize: '20.74px',
                      fontWeight: '400',
                      lineHeight: '29.397px'
                    }}
                  >
                    Receive a comprehensive report detailing the analysis, highlighting any areas that may require human
                    intervention.
                  </Typography>
                </Box>
              </Box>
              <Box width={'50%'} zIndex={'10'}>
                <Typography
                  component='img'
                  src='/assets/image/result.png'
                  sx={{
                    zIndex: '10',
                    maxWidth: '100%',
                    boxShadow: 'rgba(132, 125, 238, 0.2) 0px 3.33607px 65.8873px 0px',
                    borderRadius: '18px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* xs slider */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          mt: { xs: '30px', sm: '170px' }
        }}
      >
        <Container maxWidth='md'>
          <Slider {...settings}>
            <Box>
              <Typography component='img' src='/assets/image/upload.png' sx={{ maxWidth: '100%' }} />
            </Box>
            <Box>
              <Typography component='img' src='/assets/image/transcription.png' sx={{ maxWidth: '100%' }} />
            </Box>
            <Box>
              <Typography component='img' src='/assets/image/analysis.png' sx={{ maxWidth: '100%' }} />
            </Box>
            <Box>
              <Typography component='img' src='/assets/image/result.png' sx={{ maxWidth: '100%' }} />
            </Box>
          </Slider>
        </Container>
      </Box>

      {/* See our pricing */}
      <Box
        sx={{
          backgroundColor: '#53389E',
          padding: '96px 0px',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: '20px',
          margin: '80px 0px',
          position: 'relative'
        }}
      >
        <Typography
          component='img'
          src='/assets/image/priceLeft.png'
          sx={{ position: 'absolute', left: '0', bottom: '0' }}
        />
        <Typography
          component='img'
          src='/assets/image/priceRight.svg'
          sx={{ position: 'absolute', right: '0', bottom: '0' }}
        />
        <Typography
          className='inter'
          component='p'
          sx={{
            margin: 'auto',
            fontSize: '36px',
            fontWeight: '600',
            color: 'white',
            lineHeight: '44px'
          }}
        >
          See our pricing
        </Typography>
        <Typography
          className='inter'
          component='p'
          sx={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30px',
            color: 'white'
          }}
        >
          Get a transparent look at our pricing and features
        </Typography>
        <Button
          variant='contained'
          className='inter'
          sx={{
            textTransform: 'capitalize',
            backgroundColor: 'white',
            color: 'black',
            padding: '12px 20px',
            borderRadius: '8px',
            border: '1px solid #D0D5DD',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          See Pricing
        </Button>
      </Box>

      {/* Features */}
      <Box>
        <Container maxWidth={'xxl'}>
          <Typography
            component='div'
            sx={{
              fontSize: '44.27px',
              fontWeight: '700',
              lineHeight: '77.268px',
              textAlign: 'center',
              mt: '30px'
            }}
            className='inter'
          >
            Features
          </Typography>
          <Grid container gap={4} sx={{ margin: '50px 0px', justifyContent: 'center' }}>
            <Grid xs={12} md={4} lg={3}>
              <Box
                sx={{
                  padding: '43px 28.357px 29.191px 28.357px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '23.352px',
                  borderRadius: '19.182px',
                  background: '#FFF',
                  boxShadow: '0px 3.336px 65.887px 0px rgba(132, 125, 238, 0.20)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '331px'
                }}
              >
                <Typography component='img' src='/assets/image/feature-1.svg' sx={{ width: '48px', height: '48px' }} />
                <Typography
                  className='inter'
                  component={'p'}
                  sx={{
                    fontSize: '26.472px',
                    fontWeight: '700',
                    lineHeight: '46.202px',
                    color: '#160647'
                  }}
                >
                  AI-Powered Transcription
                </Typography>
                <Typography
                  className='inter'
                  component='p'
                  sx={{
                    color: '#BEB9CE',
                    fontSize: '19.8px',
                    fontWeight: '400',
                    lineHeight: '32.023px'
                  }}
                >
                  Benefit from the accuracy and efficiency of calldynamics AI for seamless transcription.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4} lg={3}>
              <Box
                sx={{
                  padding: '43px 28.357px 29.191px 28.357px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '23.352px',
                  borderRadius: '19.182px',
                  background: '#FFF',
                  boxShadow: '0px 3.336px 65.887px 0px rgba(132, 125, 238, 0.20)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '331px'
                }}
              >
                <Typography component='img' src='/assets/image/feature2.svg' sx={{ width: '48px', height: '48px' }} />
                <Typography
                  className='inter'
                  component={'p'}
                  sx={{
                    fontSize: '26.472px',
                    fontWeight: '700',
                    lineHeight: '46.202px',
                    color: '#160647'
                  }}
                >
                  Customizable Trigger Words/Phrases
                </Typography>
                <Typography
                  className='inter'
                  component='p'
                  sx={{
                    color: '#BEB9CE',
                    fontSize: '19.8px',
                    fontWeight: '400',
                    lineHeight: '32.023px'
                  }}
                >
                  Get the notified of protentional risks by tracking keywords and phrases in every call.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4} lg={3}>
              <Box
                sx={{
                  padding: '43px 28.357px 29.191px 28.357px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '23.352px',
                  borderRadius: '19.182px',
                  background: '#FFF',
                  boxShadow: '0px 3.336px 65.887px 0px rgba(132, 125, 238, 0.20)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '331px'
                }}
              >
                <Typography component='img' src='/assets/image/feature-3.svg' sx={{ width: '48px', height: '48px' }} />
                <Typography
                  className='inter'
                  component={'p'}
                  sx={{
                    fontSize: '26.472px',
                    fontWeight: '700',
                    lineHeight: '46.202px',
                    color: '#160647'
                  }}
                >
                  Efficient Quality Assurance
                </Typography>
                <Typography
                  className='inter'
                  component='p'
                  sx={{
                    color: '#BEB9CE',
                    fontSize: '19.8px',
                    fontWeight: '400',
                    lineHeight: '32.023px'
                  }}
                >
                  Save time and resources by automating the initial review process, allowing your team to focus on
                  high-priority calls.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4} lg={3}>
              <Box
                sx={{
                  padding: '43px 28.357px 29.191px 28.357px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '23.352px',
                  borderRadius: '19.182px',
                  background: '#FFF',
                  boxShadow: '0px 3.336px 65.887px 0px rgba(132, 125, 238, 0.20)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '349px'
                }}
              >
                <Typography component='img' src='/assets/image/feature-4.svg' sx={{ width: '48px', height: '48px' }} />
                <Typography
                  className='inter'
                  component={'p'}
                  sx={{
                    fontSize: '26.472px',
                    fontWeight: '700',
                    lineHeight: '46.202px',
                    color: '#160647'
                  }}
                >
                  Data-Driven Insights
                </Typography>
                <Typography
                  className='inter'
                  component='p'
                  sx={{
                    color: '#BEB9CE',
                    fontSize: '19.8px',
                    fontWeight: '400',
                    lineHeight: '32.023px'
                  }}
                >
                  Gain valuable insights into your lead generation process and identify areas for improvement.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4} lg={3}>
              <Box
                sx={{
                  padding: '43px 28.357px 29.191px 28.357px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '23.352px',
                  borderRadius: '19.182px',
                  background: '#FFF',
                  boxShadow: '0px 3.336px 65.887px 0px rgba(132, 125, 238, 0.20)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '349px'
                }}
              >
                <Typography component='img' src='/assets/image/feature-5.svg' sx={{ width: '48px', height: '48px' }} />
                <Typography
                  className='inter'
                  component={'p'}
                  sx={{
                    fontSize: '26.472px',
                    fontWeight: '700',
                    lineHeight: '46.202px',
                    color: '#160647'
                  }}
                >
                  Secure and Confidential
                </Typography>
                <Typography
                  className='inter'
                  component='p'
                  sx={{
                    color: '#BEB9CE',
                    fontSize: '19.8px',
                    fontWeight: '400',
                    lineHeight: '32.023px'
                  }}
                >
                  Your data is protected with industry-leading security measures, ensuring the privacy of your call
                  recordings and analysis.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4} lg={3}>
              <Box
                sx={{
                  padding: '43px 28.357px 29.191px 28.357px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '23.352px',
                  borderRadius: '19.182px',
                  background: '#FFF',
                  boxShadow: '0px 3.336px 65.887px 0px rgba(132, 125, 238, 0.20)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '349px'
                }}
              >
                <Typography component='img' src='/assets/image/feature-6.svg' sx={{ width: '48px', height: '48px' }} />
                <Typography
                  className='inter'
                  component={'p'}
                  sx={{
                    fontSize: '26.472px',
                    fontWeight: '700',
                    lineHeight: '46.202px',
                    color: '#160647'
                  }}
                >
                  HIPAA Compliant
                </Typography>
                <Typography
                  className='inter'
                  component='p'
                  sx={{
                    color: '#BEB9CE',
                    fontSize: '19.8px',
                    fontWeight: '400',
                    lineHeight: '32.023px'
                  }}
                >
                  We offer HIPAA compliant web services for secure and confidential healthcare data management with
                  automatic PII and PCI redaction.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* slider */}
      <Box>
        <Container maxWidth='xl'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '25.2px',
              background: '#53389E',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                padding: '67.2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '42px',
                flex: ' 1 0 0'
              }}
            >
              <Box>
                <Typography component='img' src='/assets/image/Star.png' />
                <Typography component='img' src='/assets/image/Star.png' />
                <Typography component='img' src='/assets/image/Star.png' />
                <Typography component='img' src='/assets/image/Star.png' />
                <Typography component='img' src='/assets/image/Star.png' />
              </Box>
              <Typography
                component='p'
                className='inter'
                sx={{
                  fontSize: '36px',
                  fontWeight: '500',
                  lineHeight: '44px',
                  color: '#FFF'
                }}
              >
                Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.
              </Typography>
              <Typography
                component='p'
                className='inter'
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '28 px',
                  color: '#FFF'
                }}
              >
                — Renee Wells
              </Typography>
            </Box>
            <Typography
              component='img'
              src='/assets/image/slideimage.png'
              sx={{ display: { xs: 'none', lg: 'block' } }}
            />
          </Box>
        </Container>
      </Box>

      {/* FAQ */}
      <Box>
        <Container maxWidth={'md'}>
          <Box sx={{ my: '40px' }}>
            <Typography
              component='p'
              className='inter'
              sx={{
                color: '#101828',
                fontSize: '37.8px',
                fontWeight: '600',
                lineHeight: '46.2px',
                textAlign: 'center',
                mb: '10px'
              }}
            >
              Frequently asked questions
            </Typography>

            <Box sx={{ my: '50px' }}>
              <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                <AccordionSummary
                  expandIcon={<AddCircleOutlineIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography className='inter'>
                    How does CallDynamics AI ensure the accuracy of transcription and data analysis?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='inter'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ my: '10px', boxShadow: 'none' }}>
                <AccordionSummary
                  expandIcon={<AddCircleOutlineIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='inter'>
                    What industries can benefit from CallDynamics AI, and how is it tailored to different sectors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='inter'>
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
                  <Typography className='inter'>
                    How does CallDynamics AI safeguard the privacy and security of that call data processed?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='inter'>
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
                  <Typography className='inter'>
                    In what ways can CallDynamics AI improve and optimize the quality assurance process in call centers
                    and lead generation agencies?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='inter'>
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
                  <Typography className='inter'>
                    How does CallDynamics AI adapt to and learn from the continuously evolving landscape of call data
                    and user requirements?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='inter'>
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
                  <Typography className='inter'>
                    How does CallDynamics AI adapt to and learn from the continuously evolving landscape of call data
                    and user requirements?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='inter'>
                    How does the integration process work, and what kind of support can new users expect during
                    onboarding and continuous usage?
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Get in touch */}
      <GetInTouch />

      {/* footer */}
      <FooterBar />
    </Layout>
  )
}

export default Index
