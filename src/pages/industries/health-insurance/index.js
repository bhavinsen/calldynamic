import Layout from '@/components/Layout/Layout'
import { Box, Button, Container, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import React from 'react'
import FooterBar from '@/components/footer'

const index = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: "url('../assets/image/Hero Bg 1.png')",
          backgroundSize: 'cover',
          maxHeight: { xs: '400px', md: '900px' },
          backgroundPosition: { xs: 'bottom' }
        }}
      >
        <Container maxWidth={'xl'}>
          <Box
            sx={{
              pt: { xs: '150px', md: '200px' },
              pb: { xs: '80px', md: '130px' },
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '1000px',
              mx: 'auto'
            }}
          >
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '30px', md: '48px' },
                lineHeight: { xs: '46px', md: '68px' },
                fontWeight: '700',
                letterSpacing: '-0.96px',
                textAlign: 'center',
                color: '#000'
              }}
            >
              <Typography
                component={'span'}
                className='inter'
                sx={{
                  fontSize: { xs: '30px', md: '48px' },
                  lineHeight: { xs: '46px', md: '68px' },
                  fontWeight: '700',
                  letterSpacing: '-0.96px',
                  textAlign: 'center',
                  color: '#000',
                  position: 'relative'
                }}
              >
                Unlock
                <Typography
                  component={'img'}
                  sx={{
                    position: 'absolute',
                    bottom: { xs: '-12px', md: '-9px', lg: '-18px' },
                    left: '0',
                    width: { xs: '150px', md: '180px', lg: '250px' }
                  }}
                  src='/assets/image/fency-underline.svg'
                />
              </Typography>{' '}
              Unparalleled Insights with CallDynamics AI in Your
              <Typography
                component={'span'}
                className='inter'
                sx={{
                  fontSize: { xs: '30px', md: '48px' },
                  lineHeight: { xs: '46px', md: '68px' },
                  fontWeight: '700',
                  letterSpacing: '-0.96px',
                  textAlign: 'center',
                  color: '#7F56D9'
                }}
              >
                {' '}
                Insurance Business
              </Typography>
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '17px', md: '18px' },
                lineHeight: { xs: '28px', md: '28px' },
                fontWeight: '400',
                textAlign: 'center',
                color: '#344054',
                maxWidth: '704px',
                width: '100%',
                mx: 'auto'
              }}
            >
              Revolutionize Your Call Analytics and Optimize Client Engagement with Data-Driven Strategies, Exclusively
              Tailored for the Insurance Industry
            </Typography>
            <Box sx={{ mx: 'auto' }}>
              <Button
                variant='contained'
                className='inter'
                sx={{
                  background: '#7F56D9',
                  padding: '17px 35px',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '28px',
                  letterSpacing: '-0.36px',
                  borderRadius: '12px'
                }}
              >
                Get Started with CallDynamics AI Today <EastIcon sx={{ ml: '5px' }} />
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            my: '100px'
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              mx: 'auto'
            }}
          >
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '29px', md: '30px' },
                lineHeight: { xs: '28px', md: '38px' },
                fontWeight: '700',
                textAlign: 'left',
                color: '#101828'
              }}
            >
              Elevate Your Customer Experience
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '19px', md: '22px' },
                lineHeight: { xs: '28px', md: '28px' },
                fontWeight: '500',
                textAlign: 'left',
                color: '#101828',
                letterSpacing: '-0.36px',
                padding: '17px 0px 27px'
              }}
            >
              Amplify Customer Satisfaction with In-depth Call Analytics
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: { xs: '24px', md: '30px' },
                fontWeight: '400',
                textAlign: 'left',
                color: '#101828'
              }}
            >
              In the insurance sector, client calls are pivotal - they're not just transactions, but critical
              touchpoints that can drive customer satisfaction and loyalty. CallDynamics AI goes beyond traditional call
              analytics to provide deep, actionable insights from every customer interaction. Whether assisting with
              policy inquiries, claims processing, or providing vital information, utilize our AI-driven,
              industry-specific prompting models to analyze and understand your customer's needs, concerns, and
              preferences. Derive a richer understanding from every call, and utilize these insights to amplify your
              service quality, enhance customer experiences, and forge lasting client relationships.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/centeragent1.png' />
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            display: { xs: 'none', lg: 'block' }
          }}
        >
          <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/path-progress.svg' />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            my: '100px'
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography component={'img'} sx={{ maxWidth: '600px', width: '100%' }} src='/assets/image/mobRisk.svg' />
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              mx: 'auto'
            }}
          >
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '29px', md: '30px' },
                lineHeight: { xs: '28px', md: '38px' },
                fontWeight: '700',
                textAlign: 'left',
                color: '#101828'
              }}
            >
              Compliance and Risk Management
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '19px', md: '22px' },
                lineHeight: { xs: '28px', md: '28px' },
                fontWeight: '500',
                textAlign: 'left',
                color: '#101828',
                letterSpacing: '-0.36px',
                padding: '17px 0px 27px'
              }}
            >
              Ensure Regulatory Compliance and Mitigate Risks with Precision
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: { xs: '24px', md: '30px' },
                fontWeight: '400',
                textAlign: 'left',
                color: '#101828'
              }}
            >
              Navigating through the complex tapestry of compliance and risk management is a nuanced challenge for the
              insurance industry. With CallDynamics AI, audit your calls with unmatched precision and adherence to
              regulatory standards, ensuring every interaction aligns with industry rules and protocols. The AI not only
              transcribes but also analyses calls, identifying any non-compliance or potential risks in real-time, thus
              enabling immediate corrective actions. Secure your operations, safeguard your reputation, and ensure every
              client interaction is conducted within the regulatory framework, mitigating risks and fortifying trust.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            display: { xs: 'none', lg: 'block' }
          }}
        >
          <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/path-progress2.svg' />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              mx: 'auto'
            }}
          >
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '29px', md: '30px' },
                lineHeight: { xs: '28px', md: '38px' },
                fontWeight: '700',
                textAlign: 'left',
                color: '#101828'
              }}
            >
              Strategic Lead Generation and Conversion
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '19px', md: '22px' },
                lineHeight: { xs: '28px', md: '28px' },
                fontWeight: '500',
                textAlign: 'left',
                color: '#101828',
                letterSpacing: '-0.36px',
                padding: '17px 0px 27px'
              }}
            >
              Transform Every Call into a Strategic Asset for Lead Generation and Conversion
            </Typography>
            <Typography
              component={'p'}
              className='inter'
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: { xs: '24px', md: '30px' },
                fontWeight: '400',
                textAlign: 'left',
                color: '#101828'
              }}
            >
               Imagine transforming every inbound call into a strategic data point that enhances your lead generation
              and conversion strategy. CallDynamics AI does precisely that by meticulously analyzing calls to extract
              vital information and KPIs relevant to your insurance offerings. Identify which campaigns are driving
              valuable calls, understand customer pain points, and pinpoint the exact services that resonate with your
              target audience. Leverage this data to optimize your marketing strategies, ensuring that your messaging
              and offerings are not just heard but echo with relevance among your prospects. Turn each call into an
              opportunity, driving not just conversions but fostering value-driven client relationships.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center'
            }}
          >
            <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/insurance-lead-gen.svg' />
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'center'
            }}
          >
            <Typography component={'img'} sx={{ maxWidth: '100%' }} src='/assets/image/mobLeadGen.svg' />
          </Box>
        </Box>

        <Box sx={{ padding: '100px 0px', background: '#F9FAFB  ', mt: '100px' }}>
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
                  fontSize: { xs: '30px', md: '32px' },
                  lineHeight: { xs: '41px', md: '63px' },
                  fontWeight: '500',
                  letterSpacing: '-0.64px',
                  color: '#101828'
                }}
              >
                Integrating CallDynamics AI in the insurance sector provides an innovative, strategic, and data-driven
                approach to managing customer calls, ensuring compliance, and enhancing lead strategies.{' '}
              </Typography>
              <Box>
                <Button
                  className='inter'
                  variant='contained'
                  sx={{
                    padding: '17px 30px',
                    borderRadius: '8px',
                    backgroundColor: '#7F56D9',
                    fontSize: '19px',
                    fontWeight: '600',
                    lineHeight: '39px',
                    color: '#FFF',
                    textTransform: 'capitalize',
                    maxWidth: '256px',
                    width: '100%'
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
